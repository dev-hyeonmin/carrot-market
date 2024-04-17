"use server"

import { PASSWORD_MIN_LENGTH, PASSWORD_REGEX, PASSWORD_REGEX_ERROR } from "@/lib/constants";
import db from "@/lib/db";
import getSession from "@/lib/session";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { z } from "zod";

const checkUsername = (username: string) => !username.includes("admin");
const checkPasswords = ({ password, confirmPassword }: {
  password: string,
  confirmPassword: string
}) => password === confirmPassword;

const formSchema = z.object({
  username: z.string({
    required_error: "Where is your name 😮"
  })
    .min(3)
    .max(10)
    .trim()
    .refine(checkUsername, "No admin allowed 🙅‍♀️"),
  email: z.string().email("It's not an email format 😞"),
  password: z.string().min(PASSWORD_MIN_LENGTH).regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
  confirmPassword: z.string().min(PASSWORD_MIN_LENGTH),
}).superRefine(async ({username}, ctx) => {
  const user = await db.user.findUnique({
    where: {
      username
    },
    select: {
      id: true
    }
  });

  if (user) {
    ctx.addIssue({
      code: "custom",
      message: "This username is already taken",
      path: ['username'],
      fatal: true
    });

    return z.NEVER;
  }
}).superRefine(async ({email}, ctx) => {
  const user = await db.user.findUnique({
    where: {
      email
    },
    select: {
      id: true
    }
  });

  if (user) {
    ctx.addIssue({
      code: "custom",
      message: "This email is already taken",
      path: ['email'],
      fatal: true
    });

    return z.NEVER;
  }
}).refine(checkPasswords, {
  message: "Both passwords should be the same.",
  path: ["confirmPassword"]
});

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get('username'),
    email: formData.get('email'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword'),
  }

  const result = await formSchema.safeParseAsync(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    // success!!
    // 1. check if username is taken -- zod
    // 2. check if email is already used -- zod

    // 3. hash password
    const hashPassword = await bcrypt.hash(result.data.password, 12);

    // 4. save the user to db
    const user = await db.user.create({
      data: {
        username: result.data.username,
        email: result.data.email,
        password: hashPassword
      },
      select: {
        id: true
      }
    });

    // 5. log the user in
    const session = await getSession();
    session.id = user.id;
    await session.save();

    // 6. redirect "/home"
    redirect('/profile');
  }
}
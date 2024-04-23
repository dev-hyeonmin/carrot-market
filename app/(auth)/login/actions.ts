"use server"

import { PASSWORD_MIN_LENGTH, PASSWORD_REGEX, PASSWORD_REGEX_ERROR } from "@/lib/constants";
import db from "@/lib/db";
import getSession from "@/lib/session";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { z } from "zod";

const checkEmailExists = async (email: string) => {
  const user = db.user.findUnique({
    where: {
      email
    },
    select: {
      id: true
    }
  });

  return Boolean(user);
}

const loginSchema = z.object({
  email: z.string()
    .email("It's not an email format 😞")
    .refine(checkEmailExists, "An account with this email does not exists."),
  password: z.string().min(PASSWORD_MIN_LENGTH).regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR)
});

export async function login(prevState: any, formData: FormData) {
  const data = {
    email: formData.get('email'),
    password: formData.get('password')
  }

  const result = await loginSchema.safeParseAsync(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    // success!!
    // 1. find a user with the email
    // 2. if the user is found, check password hash
    // 3. log the user in
    // 4. redirect "/profile"

    const user = await db.user.findUnique({
      where: {
        email: result.data.email
      },
      select: {
        id: true,
        password: true
      }
    });

    const ok = await bcrypt.compare(result.data.password, user!.password ?? '');
    if (ok) {
      const session = await getSession();
      session.id = user!.id;
      await session.save();
      redirect('/profile');
    } else {
      return {
        fieldErrors: {
          password: ["Wrong password."],
          email: [],
        },
      };
    }
  }
}
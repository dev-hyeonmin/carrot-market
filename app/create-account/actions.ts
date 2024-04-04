"use server"

import { PASSWORD_MIN_LENGTH, PASSWORD_REGEX, PASSWORD_REGEX_ERROR } from "@/lib/constants";
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
    .refine(username => checkUsername(username), "No admin allowed 🙅‍♀️"),
  email: z.string().email("It's not an email format 😞"),
  password: z.string().min(PASSWORD_MIN_LENGTH).regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
  confirmPassword: z.string().min(PASSWORD_MIN_LENGTH),
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

  const result = formSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    // success!!
    console.log(result.data)
  }
}
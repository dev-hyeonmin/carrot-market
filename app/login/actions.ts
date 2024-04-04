"use server"

import { PASSWORD_MIN_LENGTH, PASSWORD_REGEX, PASSWORD_REGEX_ERROR } from "@/lib/constants";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("It's not an email format 😞"),
  password: z.string().min(PASSWORD_MIN_LENGTH).regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR)
});

export async function login(prevState: any, formData: FormData) {
  const data = {
    email: formData.get('email'),
    password: formData.get('password')
  }

  const result = loginSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    // success!!
    console.log(result.data);
  }
}
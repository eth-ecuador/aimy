"use server";

import { AuthError } from "next-auth";
import * as z from "zod";

import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { LoginSchema } from "@repo/schemas";
import { signIn } from "@/auth";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validateFields = LoginSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid fields!", success: null };
  }

  const { email, password } = validateFields.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!", success: null };
        default:
          return { error: "Something went wrong", success: null };
      }
    }

    throw error;
  }

  return { success: "Email sent!", error: null };
};

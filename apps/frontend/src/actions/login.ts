"use server";

import { LoginSchema } from "@repo/schemas";
import * as z from "zod";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validateFields = LoginSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid fields!", success: null };
  }

  return { success: "Email sent!", error: null };
};

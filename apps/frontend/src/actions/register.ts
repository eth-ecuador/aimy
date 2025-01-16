"use server";

import { RegisterInput, RegisterSchema } from "@repo/schemas";
import { createUser } from "@repo/database/users";

export const register = async (values: RegisterInput) => {
  const validateFields = RegisterSchema.safeParse(values);

  if (!validateFields.success) {
    return { success: false, data: null, message: "Invalid fields!" };
  }

  const response = await createUser(values);

  return { success: true, data: response, message: "User created!" };
};

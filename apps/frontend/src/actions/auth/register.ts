"use server";

import { CreateUserDTO, CreateUserSchema } from "@repo/schemas";
import { createUser } from "@repo/database/users";

export const register = async (values: CreateUserDTO) => {
  const validateFields = CreateUserSchema.safeParse(values);

  if (!validateFields.success) {
    return { success: false, data: null, message: "Invalid fields!" };
  }

  const response = await createUser(values);

  return { success: true, data: response, message: "User created!" };
};

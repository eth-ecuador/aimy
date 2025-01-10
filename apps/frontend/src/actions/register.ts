"use server";

import * as z from "zod";
import bcrypt from "bcrypt";

import { RegisterSchema } from "@repo/schemas";
import { db } from "@/lib/db";

const SALT_ROUNDS = 10;

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validateFields = RegisterSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid fields!", success: null };
  }

  const { email, password, firstName, lastName } = validateFields.data;
  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

  const existingUser = await db.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return { error: "User already exists!", success: null };
  }

  await db.user.create({
    data: {
      email,
      password: hashedPassword,
      firstName,
    },
  });

  return { success: "Email sent!", error: null };
};

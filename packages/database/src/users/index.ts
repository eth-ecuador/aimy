import { RegisterInput } from "@repo/schemas";
import { db } from "../client";
import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

export async function createUser(data: RegisterInput) {
  try {
    const { email, password, firstName, lastName } = data;

    const existingUser = await getUserByEmail(email);

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    if (existingUser) {
      throw new Error("User already exists!");
    }

    const newUser = await db.user.create({
      data: {
        email,
        password: hashedPassword,
        firstName,
        lastName,
      },
    });

    return newUser;
  } catch (error) {
    return null;
  }
}

export async function getUserByEmail(email: string) {
  try {
    const user = await db.user.findUnique({
      where: { email },
    });

    return user;
  } catch (error) {
    return null;
  }
}

export async function getUserById(id: string) {
  try {
    const user = await db.user.findUnique({
      where: { id },
    });

    return user;
  } catch (error) {
    return null;
  }
}

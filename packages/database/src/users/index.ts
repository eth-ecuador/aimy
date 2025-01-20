import { CreateUserDTO } from "@repo/schemas";
import { db } from "../client";

export async function createUser(data: CreateUserDTO) {
  const { address } = data;

  const existingUser = await getUserByAddress(address);

  if (existingUser) {
    throw new Error("User already exists!");
  }

  const newUser = await db.user.create({
    data: {
      address,
    },
  });

  return newUser;
}

export async function getUserById(id: string) {
  const user = await db.user.findUnique({
    where: { id },
  });

  return user;
}

export async function getUserByAddress(address: string) {
  const user = await db.user.findUnique({
    where: { address },
  });

  return user;
}

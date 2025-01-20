import { CreateTransactionDTO } from "@repo/schemas";
import { db } from "../client";

export async function createTransaction(data: CreateTransactionDTO) {
  const transaction = await db.transaction.create({
    data,
  });

  return transaction;
}

type GetTransactionsByAddressParams = {
  address: string;
  limit?: number;
  offset?: number;
};

export async function getTransactionsByAddress({
  address,
  limit = 15,
  offset = 0,
}: GetTransactionsByAddressParams) {
  const transactions = await db.transaction.findMany({
    where: {
      user: {
        address: address,
      },
    },
    take: limit,
    skip: offset,
    orderBy: {
      createdAt: "desc",
    },
  });

  return transactions;
}

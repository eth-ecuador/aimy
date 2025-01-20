import * as z from "zod";

const TransactionTypeSchema = z.enum(["INCOME", "EXPENSE"]);

const CategoryTypeSchema = z.enum([
  "HOUSING",
  "TRANSPORTATION",
  "FOOD",
  "UTILITIES",
  "HEALTHCARE",
  "EDUCATION",
  "ENTERTAINMENT",
  "SHOPPING",
  "PERSONAL_CARE",
  "INCOME_SALARY",
  "INCOME_BUSINESS",
  "INCOME_INVESTMENT",
  "OTHER",
]);

export const TransactionSchema = z.object({
  id: z.string().cuid(),
  userId: z.string(),
  amount: z.number().positive(),
  type: TransactionTypeSchema,
  category: CategoryTypeSchema,
  createdAt: z.date(),
});
export type Transaction = z.infer<typeof TransactionSchema>;

export const CreateTransactionSchema = TransactionSchema.omit({
  id: true,
  createdAt: true,
});
export type CreateTransactionDTO = z.infer<typeof CreateTransactionSchema>;

export const UpdateTransactionSchema = CreateTransactionSchema.partial();
export type UpdateTransactionDTO = z.infer<typeof UpdateTransactionSchema>;

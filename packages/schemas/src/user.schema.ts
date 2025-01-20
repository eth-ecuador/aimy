import * as z from "zod";

export const UserSchema = z.object({
  id: z.string().cuid(),
  address: z.string(),
  image: z.string().nullable().optional(),
});
export type User = z.infer<typeof UserSchema>;

export const CreateUserSchema = UserSchema.omit({ id: true }).extend({
  address: z.string().min(1, "Address is required"),
});
export type CreateUserDTO = z.infer<typeof CreateUserSchema>;

export const UpdateUserSchema = UserSchema.omit({ id: true, address: true })
  .partial()
  .extend({
    address: z.string().min(1, "Address is required").optional(),
  });
export type UpdateUserDTO = z.infer<typeof UpdateUserSchema>;

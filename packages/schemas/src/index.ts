import * as zod from "zod";

export const LoginSchema = zod.object({
  email: zod.string().email({
    message: "Email is required",
  }),
  password: zod.string({
    message: "Password is required",
  }),
});

export type LoginInput = zod.infer<typeof LoginSchema>;

export const RegisterSchema = zod.object({
  email: zod.string().email({
    message: "Email is required",
  }),
  password: zod.string().min(6, {
    message: "Minimum 6 characters required",
  }),
  firstName: zod.string().min(1, {
    message: "First name is required",
  }),
  lastName: zod.string().min(1, {
    message: "Last Name is required",
  }),
});

export type RegisterInput = zod.infer<typeof RegisterSchema>;

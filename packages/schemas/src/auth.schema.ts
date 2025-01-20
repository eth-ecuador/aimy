import * as z from "zod";

export const LoginSchema = z.object({
  address: z.string(),
});

export type LoginDTO = z.infer<typeof LoginSchema>;

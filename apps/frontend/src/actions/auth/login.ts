"use server";

import { signIn as nextAuthSignIn } from "@/auth";

export const signIn = async () => {
  await nextAuthSignIn();
};

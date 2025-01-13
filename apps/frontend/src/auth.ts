import NextAuth, { NextAuthConfig, NextAuthResult } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";

import { db } from "@repo/database";
import authConfig from "./auth.config";

const authOptions: NextAuthConfig = {
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },
  ...authConfig,
};

const nextAuth = NextAuth(authConfig);

export const auth: NextAuthResult["auth"] = nextAuth.auth;
export const signIn: NextAuthResult["signIn"] = nextAuth.signIn;

export const { handlers, signOut, unstable_update } = nextAuth;

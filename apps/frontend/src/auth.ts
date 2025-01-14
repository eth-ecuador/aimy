import NextAuth, { NextAuthConfig, NextAuthResult } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";

import { db } from "@repo/database";
import authConfig from "./auth.config";

const authOptions: NextAuthConfig = {
  callbacks: {
    async session({ session, token }) {
      if (!token.sub || !session.user) {
        throw new Error("No session found");
      }

      session.user.address = token.address;
      session.user.id = token.sub as string;

      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.address = user.address;
        token.sub = user.id;
      }

      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },
  ...authConfig,
};

const nextAuth = NextAuth(authOptions);

export const auth: NextAuthResult["auth"] = nextAuth.auth;
export const signIn: NextAuthResult["signIn"] = nextAuth.signIn;

export const { handlers, signOut, unstable_update } = nextAuth;

import NextAuth from "next-auth";
import { NextAuthConfig } from "next-auth";
import { Provider } from "next-auth/providers";
import type { DefaultSession, NextAuthResult, Session } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      address: string;
      chainId: number;
    } & DefaultSession["user"];
  }
}

const CredentialsProvider = {
  id: "credentials",
  type: "credentials",
  name: "Credentials",
  credentials: {
    username: { label: "Username", type: "text" },
    password: { label: "Password", type: "password" },
  },
  async authorize(credentials) {
    return null;
  },
} satisfies Provider;

const config = {
  providers: [CredentialsProvider],
} satisfies NextAuthConfig;

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
}: NextAuthResult = NextAuth(config);

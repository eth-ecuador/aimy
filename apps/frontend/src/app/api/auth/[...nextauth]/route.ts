import { DefaultSession, NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
  }
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {
        name: { label: "Name", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (
          credentials?.name === "admin" &&
          credentials?.password === "admin"
        ) {
          return {
            id: "admin",
            name: "admin",
          };
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
    signOut: "/auth/logout",
    newUser: "/auth/new-user",
  },
  callbacks: {
    async session({ session, token }) {
      session.user = {
        ...session.user,
        id: token.sub as string,
      };

      return session;
    },
    async jwt({ token, user }) {
      console.log("jwt callback", token, user);
      if (user) {
        token.sub = user.id;
      }

      return {
        ...token,
      };
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60 * 10,
  },
  debug: true,
});

export { handler as GET, handler as POST };

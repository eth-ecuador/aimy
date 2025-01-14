import { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

export type ExtendedUser = DefaultSession["user"] & {
  address: string;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }

  interface User {
    address: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    address: string;
  }
}

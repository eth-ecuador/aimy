import { getUserByEmail } from "@repo/database";
import { LoginSchema } from "@repo/schemas";
import { NextAuthConfig } from "next-auth";

const authConfig: NextAuthConfig = {
  providers: [
    {
      id: "credentials",
      type: "credentials",
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (!validatedFields.success) {
          throw new Error("Invalid Fields");
        }

        const { email, password } = validatedFields.data;

        const user = await getUserByEmail(email);

        if (!user || !user.password) {
          throw new Error("User not found");
        }

        return {
          id: user.id,
          name: `${user.firstName} ${user.lastName}`,
          email: user.email,
          address: "0x123456789",
        };
      },
    },
  ],
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/signout",
    error: "/auth/error",
    newUser: "/welcome",
  },
};

export default authConfig;

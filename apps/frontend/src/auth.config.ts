import { createUser, getUserByAddress } from "@repo/database";
import { LoginSchema } from "@repo/schemas";
import { NextAuthConfig } from "next-auth";

const authConfig: NextAuthConfig = {
  providers: [
    {
      id: "credentials",
      type: "credentials",
      name: "Credentials",
      credentials: {
        address: { label: "Address", type: "text" },
      },
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (!validatedFields.success) {
          throw new Error("Invalid Fields");
        }

        const { address } = validatedFields.data;

        const user = await getUserByAddress(address);

        console.log("user", user);
        if (user) {
          return {
            id: user.id,
            name: `${user.firstName} ${user.lastName}`,
            address,
          };
        }

        const newUser = await createUser({ address });
        console.log("new user", newUser);
        if (!newUser) {
          throw new Error("Error creating user");
        }

        return {
          id: newUser.id,
          name: `${newUser.firstName} ${newUser.lastName}`,
          address,
        };
      },
    },
  ],
  pages: {
    signIn: "/login",
    signOut: "/",
    error: "/auth/error",
    newUser: "/welcome",
  },
};

export default authConfig;

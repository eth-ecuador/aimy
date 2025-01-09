"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

export default function LoginPage() {
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const password = formData.get("password");
    
    const response = await signIn("credentials", {
      name: name as string,
      password: password as string,
      redirect: false,
    });}

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Padimaster" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
}

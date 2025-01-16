"use client";

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { RegisterSchema } from "@repo/schemas";
import AuthCardWrapper from "./card-wrapper";
import FormError from "./form-error";
import FormSucess from "./form-sucess";
import { useState, useTransition } from "react";
import { register } from "@/actions/register";

export default function RegisterForm() {
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: { email: "", password: "", lastName: "", firstName: "" },
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setSuccess(false);
    setError(false);
    setMessage("");

    startTransition(() => {
      register(values).then((data) => {
        setSuccess(data.success);
        setError(!data.success);
        setMessage(data.message);
      });
    });
  };

  return (
    <AuthCardWrapper
      headerLabel="Create an account"
      backButtonHref="/login"
      backButtonLabel="Already have an account?"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex space-x-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <Label>First Name</Label>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Jhon" disabled={isPending} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <Label>Last Name</Label>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Doe" disabled={isPending} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="jhon.doe@example.com"
                    type="email"
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="**********"
                    type="password"
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {error && <FormError message={message} />}
          {success && <FormSucess message={message} />}
          <Button type="submit" className="w-full" disabled={isPending}>
            Login
          </Button>
        </form>
      </Form>
    </AuthCardWrapper>
  );
}

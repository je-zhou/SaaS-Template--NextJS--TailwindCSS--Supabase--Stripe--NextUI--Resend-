"use client";
import React, { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconCheck,
  IconX,
} from "@tabler/icons-react";

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";
import { createClient } from "@/libs/clients/supabase/client";
import { useRouter } from "next/navigation";
import axios from "axios";
import { cn } from "@/libs/utils";

const formSchema = z.object({
  // Lets ship fast don't need name 
  // firstName: z.string().min(1, {message: "Please enter at least 1 character"}),
  // lastName: z.string().min(2, {message: "Please enter at least 1 character"}),
  email: z.string().email({message: "Please enter a valid email"}),
  password: z.string().regex(new RegExp(/^(?=.*[A-Z])(?=.*\d).{8,}$/), "Password should have: minimum eight characters, at least one letter and one number") .min(6, {message: "Password must include more than 6 characters"}),
  confirmPassword: z.string().min(6, {message: "Password must include more than 6 characters"}),
}).refine(data => data.password == data.confirmPassword, {
  message: "Passwords must match",
  path: ['confirmPassword'] // Pointing out which field is invalid
});

interface SignupFormProps {
  origin: string
}

export function SignupForm({origin} : SignupFormProps) {
  const { toast } = useToast()
  const router = useRouter()
  const supabase = createClient();
  
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // Lets ship fast don't need name 
      // firstName: "",
      // lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);

    try {
      const {data: {user, session}, error} = await supabase.auth.signUp({
        email: values.email,
        password : values.password,
        options: {
          emailRedirectTo: `${origin}/auth/callback`,
        },
      });

      toast({
        title: "Success!",
        description: "Check your email for next steps",
      })

      await axios.post("/api/user", {email: values.email, user: user});

      setLoading(false);
      router.push("/login");

    } catch (e) {
      console.log(e)
      toast({
        title: "Error",
        description: "Something went wrong. Check your console logs if you are dev. Check back later if not.",
      })
    }
    // e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to Personif<span className="text-primary">.ai</span>
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm  mt-2 dark:text-neutral-300">
        We're excited to help you land the job of your dreams. Let's get started!
      </p>
      <Form {...form}>
        <form className="my-8 space-y-4" onSubmit={form.handleSubmit(handleSubmit)}>
          {/* Ship fast don't need name */}
          {/* <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First name</FormLabel>
                  <FormControl>
                    <Input disabled={loading} placeholder="Lebron" {...field} />
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
                  <FormLabel>Last name</FormLabel>
                  <FormControl>
                    <Input disabled={loading} placeholder="James" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div> */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input className="outline outline-1 outline-black/10" disabled={loading} placeholder="lebron.james@lalakers.com" {...field} />
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
                  <div className=" space-y-3">
                    <Input className="outline outline-1 outline-black/10" disabled={loading} placeholder="••••••••" {...field} type="password" />
                    <div className="text-xs">
                      <div className={cn("flex flex-row items-center space-x-1", field.value.length >= 8 ? "text-primary" : "opacity-50")}>
                        {field.value.length >= 8 ? <IconCheck className="h-4 w-4"/> : <IconX className="h-4 w-4"/>}
                        <p>Minimum 8 characters</p>
                      </div>
                      <div className={cn("flex flex-row items-center space-x-1", /[A-Z]/.test(field.value) ? "text-primary" : "opacity-50")}>
                        {/[A-Z]/.test(field.value) ? <IconCheck className="h-4 w-4"/> : <IconX className="h-4 w-4"/>}
                        <p>Contain at least 1 uppercase letter</p>
                      </div>
                      <div className={cn("flex flex-row items-center space-x-1", /\d/.test(field.value) ? "text-primary" : "opacity-50")}>
                        {/\d/.test(field.value) ? <IconCheck className="h-4 w-4"/> : <IconX className="h-4 w-4"/>}
                        <p>Contain at least 1 number</p>
                      </div>
                    </div>         
                  </div>

                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm password</FormLabel>
                <FormControl>
                  <Input className="outline outline-1 outline-black/10" disabled={loading} placeholder="••••••••" {...field} type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="h-1"></div>
          <Button
            className=" bg-gradient-to-br relative group/btn from-primary dark:from-primary/90 dark:to-primary/90 to-primary/60 block w-full text-primary-foreground rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
            disabled={loading} 
          >
            Sign up &rarr;
            <BottomGradient />
          </Button>
          {/* Need to configure OAuth - But we want to ship fast */}
          {/* 
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
          <div className="flex flex-col space-y-4">
            <Button
              className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="button"
              disabled={loading}
            >
              <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                GitHub
              </span>
              <BottomGradient />
            </Button>
            <Button
              className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="button"
              disabled={loading}
            >
              <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                Google
              </span>
              <BottomGradient />
            </Button>
          </div> */}
        </form>
      </Form>
      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      <div className="text-sm text-right">
        <p>Already have an account? <Link href={"/login"} className="underline text-primary">Log in</Link> instead</p>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
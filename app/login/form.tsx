"use client"

import Submit from "@/components/parts/SubmitButton";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

export default function Form() {
  const supabase = createClient()

  // console.log(await supabase.auth.getUser())
  const [transition, startTransition] = useTransition()
  const [errorMessage, setErrorMessage] = useState<string>()
  const { refresh } = useRouter()
  

  const handleSignin = async(formdata: FormData) => {
    
    const email = formdata.get('email') as string;
    const password = formdata.get('password') as string

    startTransition(async() => {
      const { data, error } = await supabase.auth.signInWithPassword({email, password})
      if(error){
        setErrorMessage(error.message)
        return
      }
       refresh()
    })
  }


  return (
    <div className="animate-in flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center">
      <h1 className="text-center text-2xl font-thin mb-5">Welcom back, Login.</h1>
      { errorMessage && (
        <div className="text-center">
          <p className="text-red-400">{ errorMessage }</p>
        </div>
      )}
      <form
        className="flex-1 flex flex-col w-full justify-center text-foreground"
        action={ handleSignin }
      >
        <label className="text-md" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="email"
          placeholder="you@example.com"
          required
        />
        <label className="text-md" htmlFor="password">
          Password
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <button className="rounded-md bg-btn-background hover:bg-btn-background/70 transition-colors px-4 py-2 text-foreground mb-2">
          <Submit loadingText="Signing In" laodingState={ transition } btnText="Sign In" />
        </button>
      </form>
      <div className="mt-5">
        <Link href="/auth/reset-password">
          <p className="text-center text-sm underline">Forgot password?</p>
        </Link>
        <Link href="/signup">
          <p className="text-center text-sm underline">Do not have an account? Sign Up now</p>
        </Link>
      </div>
    </div>
  );
}

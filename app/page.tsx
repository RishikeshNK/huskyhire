"use client"

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <h1 className="text-3xl">Husky Hire</h1>
      <Button onClick={() => signIn('google', { callbackUrl: '/profile' })}>Sign in</Button>
    </div>
  );
}

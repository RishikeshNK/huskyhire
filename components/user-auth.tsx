"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Icons } from "./icons";

import { signIn } from "next-auth/react";

export function UserAuthForm() {
  return (
    <div className="flex flex-col max-w-sm space-y-2 items-center text-center">
      <h1 className="text-2xl font-semibold tracking-tight">Get Started</h1>
      <p className="text-sm text-muted-foreground">
        Sign in with Google to continue{" "}
      </p>

      <Button
        variant="outline"
        type="button"
        onClick={() => signIn("github", { callbackUrl: "/profile" })}
        className="w-1/2"
      >
        <div className="flex">
        <Icons.google className="mr-2 h-4 w-4" />
        <p>Google</p>
        </div>
      </Button>
    </div>
  );
}

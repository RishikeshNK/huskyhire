"use client";

import Container from "@/components/container";
import ModeToggle from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <Container>
      <div className="flex items-center justify-between py-4">
        <h1 className="text-2xl font-bold">Husky Hire</h1>
        <ModeToggle />
      </div>
    </Container>
  );
}

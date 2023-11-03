"use client";

import { useRouter } from "next/navigation";
import { UserAuthForm } from "@/components/user-auth";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export default function Page() {
  const router = useRouter();
  return (
    <div className="flex flex-col h-screen p-8">
      <div className="flex items-start justify-between">
        <Button
          variant="ghost"
          onClick={() => {
            router.back();
          }}
        >
          <Icons.leftArrow />
          Back
        </Button>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <div className="w-full max-w-md">
          <UserAuthForm />
        </div>
      </div>
    </div>
  );
}

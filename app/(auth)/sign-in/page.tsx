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
      <div className="flex m-auto w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <UserAuthForm />
      </div>
    </div>
  );
}

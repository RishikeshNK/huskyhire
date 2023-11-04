'use client';

import { useRouter } from 'next/navigation';
import { UserAuthForm } from '@/components/user-auth';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';

export default function Page() {
  const router = useRouter();
  return (
    <div className="flex h-screen flex-col p-8">
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
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-md">
          <UserAuthForm />
        </div>
      </div>
    </div>
  );
}

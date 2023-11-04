'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Icons } from './icons';

import { signIn } from 'next-auth/react';

export function UserAuthForm() {
  return (
    <div className="flex max-w-sm flex-col items-center space-y-4 text-center">
      <h1 className="text-4xl font-semibold tracking-tight">Get Started</h1>
      <p className="text-lg text-muted-foreground">
        Sign in with Google to continue
      </p>
      <Button
        variant="outline"
        type="button"
        onClick={() => signIn('google', { callbackUrl: '/profile' })}
        className="w-[75%] p-6"
      >
        <div className="flex items-center">
          <Icons.google className="mr-2 h-6 w-6" />
          <p className="text-xl">Google</p>
        </div>
      </Button>
    </div>
  );
}

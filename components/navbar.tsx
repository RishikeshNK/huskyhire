'use client';

import React from 'react';

import Link from 'next/link';
import ModeToggle from './mode-toggle';
import { Button } from './ui/button';

export default function Navbar() {
  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex flex-row items-center space-x-4">
        <Link href="/" passHref legacyBehavior>
          <a className="flex items-center space-x-2">
            <p className="text-3xl font-bold">Husky Hire</p>
          </a>
        </Link>
      </div>
      <div className="flex flex-row space-x-2">
        <ModeToggle />
        <Button asChild variant="secondary">
          <Link href="/sign-in">Sign in</Link>
        </Button>
      </div>
    </div>
  );
}

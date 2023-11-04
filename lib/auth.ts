import { AuthOptions } from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from '@/lib/db'

const previewProviders = [
  CredentialsProvider({
    // @ts-ignore comment
    async authorize() {
      return {
        id: 1,
        name: 'Mock User',
        email: 'mock.user@example.com',
        image: 'https://i.pravatar.cc/150?u=jsmith@example.com',
      };
    },
  }),
]

const productionProviders = [
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID as string,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
  }),
]

export const authOptions: AuthOptions = {
  providers: process.env.VERCEL_ENV === 'preview' ? previewProviders : productionProviders,
  secret: process.env.NEXTAUTH_SECRET as string,
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
  },
  adapter: PrismaAdapter(prisma),
};

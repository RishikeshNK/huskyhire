import { authOptions } from '@/lib/auth';
import * as z from 'zod';
import prisma from '@/lib/db';
import { getServerSession } from 'next-auth/next';
import { NextResponse } from 'next/server';

const companyCreateSchema = z.object({
  name: z.string(),
  location: z.string().optional(),
});

// GET /api/companies
export async function GET() {
  try {
    const res = await prisma.company.findMany();
    return NextResponse.json(res);
  } catch (err) {
    return new Response(null, { status: 500 });
  }
}

// POST /api/companies
export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new Response('Unauthorized', { status: 403 });
    }

    const json = await req.json();
    const body = companyCreateSchema.parse(json);

    const company = await prisma.company.create({
      data: {
        name: body.name,
        location: body.location,
      },
    });

    return new Response(JSON.stringify(company));
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 });
    }

    return new Response(null, { status: 500 });
  }
}

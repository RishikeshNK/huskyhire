import * as z from 'zod';
import prisma from '@/lib/db';
import { NextResponse } from 'next/server';
import { Semester } from '@prisma/client';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';

const SemesterEnum = z.nativeEnum(Semester);
type SemesterEnum = z.infer<typeof SemesterEnum>;

const reviewCreateSchema = z.object({
  companyId: z.string(),
  rating: z.number().min(1).max(5),
  role: z.string(),
  content: z.string(),
  semester: SemesterEnum,
  year: z.number().min(2000).max(2024), // Find better alternative for typechecking year
  drugTested: z.boolean(),
});

// GET /api/reviews
export async function GET() {
  try {
    const res = await prisma.review.findMany();
    return NextResponse.json(res);
  } catch (err) {
    return new Response(null, { status: 500 });
  }
}

// POST /api/reviews
export async function POST(req: Request, res: Response) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new Response('Unauthorized', { status: 403 });
    }

    const json = await req.json();
    const body = reviewCreateSchema.parse(json);

    const review = await prisma.review.create({
      data: {
        companyId: body.companyId,
        userId: session.user.id,
        rating: body.rating,
        role: body.role,
        content: body.content,
        semester: body.semester,
        year: body.year,
        drugTested: body.drugTested,
      },
    });

    return new Response(JSON.stringify(review));
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 });
    }

    return new Response(null, { status: 500 });
  }
}

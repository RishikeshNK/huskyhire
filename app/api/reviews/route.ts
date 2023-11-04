import prisma from '@/lib/db';
import { NextResponse } from 'next/server';

// GET /api/reviews
export async function GET() {
  const res = await prisma.review.findMany();
  return NextResponse.json(res);
}

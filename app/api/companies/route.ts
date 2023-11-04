import prisma from '@/lib/db';
import { NextResponse } from 'next/server';

// GET /api/companies
export async function GET() {
  const res = await prisma.company.findMany();
  return NextResponse.json(res);
}

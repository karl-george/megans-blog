import prisma from '@/utils/connect';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    const categories = await prisma.category.findMany();

    return new NextResponse(JSON.stringify(categories));
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: 'Failed to fetch categories' })
    );
  }
};

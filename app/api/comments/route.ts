import prisma from '@/utils/connect';
import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';

export const GET = async (req: NextApiRequest) => {
  const { searchParams } = new URL(req.url || '');

  const postSlug = searchParams.get('postSlug');

  try {
    const comments = await prisma.comment.findMany({
      where: {
        ...(postSlug && { postSlug }),
      },
      include: { user: true },
    });

    return new NextResponse(JSON.stringify(comments));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong!' })
    );
  }
};

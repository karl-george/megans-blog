import prisma from '@/utils/connect';
import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';

export const GET = async (req: NextApiRequest, { params }) => {
  const { slug } = params;

  try {
    const post = await prisma.post.findUnique({
      where: {
        slug,
      },
      include: { user: true },
    });

    return new NextResponse(JSON.stringify(post));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong!' })
    );
  }
};

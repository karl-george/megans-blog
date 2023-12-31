import Comments from '@/components/Comments';
import { fetchSinglePost } from '@/utils/fetchSinglePost';
import { Post } from '@prisma/client';
import Image from 'next/image';

export const revalidate = 0;

interface pageProps {
  params: { slug: string };
}

async function page({ params }: pageProps) {
  const { slug } = params;
  const post: Post = await fetchSinglePost(slug);

  return (
    <div className='my-12 container flex flex-col justify-center items-center text-primary'>
      <div className='mb-8'>{post.catSlug.toUpperCase()}</div>
      <div className='text-6xl mb-12'>{post.title}</div>
      <div>
        {post.img && (
          <Image
            src={`${post.img}.jpg`}
            width={800}
            height={300}
            alt={post.title}
            className='mb-12'
          />
        )}
      </div>
      <div
        className='max-w-6xl text-lg mb-28'
        dangerouslySetInnerHTML={{ __html: post.desc }}
      />
      <Comments postSlug={slug} />
    </div>
  );
}

export default page;

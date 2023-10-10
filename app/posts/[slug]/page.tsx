import Comments from '@/components/Comments';
import { fetchSinglePost } from '@/utils/fetchSinglePost';
import { Post } from '@prisma/client';
import Image from 'next/image';

interface pageProps {}

async function page({ params }: pageProps) {
  const { slug } = params;
  const post: Post = await fetchSinglePost(slug);

  return (
    <div className='my-12 container flex flex-col justify-center items-center space-y-12 text-primary'>
      <div className='-mb-6'>{post.catSlug.toUpperCase()}</div>
      <div className='text-6xl'>{post.title}</div>
      <div>
        {post.img && (
          <Image src={post.img} width={300} height={300} alt={post.title} />
        )}
      </div>
      <div
        className='max-w-6xl'
        dangerouslySetInnerHTML={{ __html: post.desc }}
      />
      <Comments postSlug={slug} />
    </div>
  );
}

export default page;

import Comments from '@/components/Comments';
import { fetchSinglePost } from '@/utils/fetchSinglePost';
import { Post } from '@prisma/client';
import Image from 'next/image';

interface pageProps {}

async function page({ params }: pageProps) {
  const { slug } = params;
  const post: Post = await fetchSinglePost(slug);

  return (
    <div>
      {post.title}
      {post.desc}
      {post?.user?.name}
      <Image src={post.user.image} width={200} height={200} alt={post.title} />
      <Comments postSlug={slug} />
    </div>
  );
}

export default page;

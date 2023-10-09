import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@prisma/client';

interface BlogCardProps {
  post: Post;
}

function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/posts/${post.slug}`} className='w-[400px]'>
      <div className='h-[500px] w-[400px] relative'>
        {post.img && (
          <Image
            src={post.img}
            alt='blog poster'
            fill
            className='border-[10px] border-secondary object-cover'
          />
        )}
      </div>
      <div className='bg-secondary text-primary space-y-4 text-center py-4'>
        <p className='text-sm text-[#8F8F8F] '>{post.catSlug.toUpperCase()}</p>
        <h3 className='text-3xl'>{post.title}</h3>
        <p className='text-sm text-[#8F8F8F]'>Date</p>
      </div>
    </Link>
  );
}

export default BlogCard;

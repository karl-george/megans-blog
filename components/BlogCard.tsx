import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@prisma/client';
import { formatDateString } from '@/utils/formatDateString';

export const revalidate = 0;

interface BlogCardProps {
  post: Post;
}

function BlogCard({ post }: BlogCardProps) {
  return (
    <div className='flex flex-col items-center justify-center text-center justify-items-stretch'>
      <Link href={`/posts/${post.slug}`}>
        {/* Image */}
        <div>
          {post.img && (
            <Image
              src={`${post.img}_thumb.jpg`}
              alt='blog poster'
              width={400}
              height={550}
              className='border-[10px] border-secondary'
            />
          )}
        </div>
        <div className='bg-secondary text-primary space-y-4 text-center py-4 px-2 max-w-[400px]'>
          <p className='text-sm text-[#8F8F8F] '>
            {post.catSlug.toUpperCase()}
          </p>
          <h3 className='text-3xl'>{post.title}</h3>
          <p className='text-sm text-[#8F8F8F]'>
            {formatDateString(post.createdAt)}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default BlogCard;

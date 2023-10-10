import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@prisma/client';

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
              src={post.img}
              alt='blog poster'
              width={400}
              height={550}
              className='border-[10px] border-secondary'
            />
          )}
        </div>
        <div className='bg-secondary text-primary space-y-4 text-center py-4'>
          <p className='text-sm text-[#8F8F8F] '>
            {post.catSlug.toUpperCase()}
          </p>
          <h3 className='text-3xl'>{post.title}</h3>
          <p className='text-sm text-[#8F8F8F]'>Date</p>
        </div>
      </Link>
    </div>
  );
}

export default BlogCard;

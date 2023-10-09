import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@prisma/client';

interface BlogCardProps {
  post: Post;
}

function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/posts/${post.slug}`} className=''>
      <div>
        {post.img && (
          <Image
            src={post.img}
            alt='blog poster'
            width={400}
            height={540}
            className='border-[10px] border-secondary object-cover'
          />
        )}
      </div>
      <div className='bg-secondary text-primary'>
        <p className='text-sm text-[#8F8F8F] '>{post.catSlug.toUpperCase()}</p>
        <h3 className='text-3xl'>{post.title}</h3>
        <p className='text-sm text-[#8F8F8F]'>Date</p>
      </div>
    </Link>
  );
}

export default BlogCard;

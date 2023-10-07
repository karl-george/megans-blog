import Link from 'next/link';
import { Post } from '@prisma/client';

interface BlogCardProps {
  post: Post;
}

function BlogCard({ post }: BlogCardProps) {
  return (
    <div>
      <Link href={`/posts/${post.slug}`}>{post.title}</Link>
    </div>
  );
}

export default BlogCard;

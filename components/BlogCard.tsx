import { Post } from '@prisma/client';
import Link from 'next/link';

interface BlogCardProps {
  post: Post;
}

function BlogCard({ post }: BlogCardProps) {
  return (
    <div>
      <Link href={`/posts/${post.slug}`} key={post.id}>
        {post.title}
      </Link>
    </div>
  );
}

export default BlogCard;

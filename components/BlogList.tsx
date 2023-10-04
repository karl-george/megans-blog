import { fetchPosts } from '@/utils/fetchPosts';
import { Post } from '@prisma/client';
import Pagination from './Pagination';

interface BlogListProps {
  page: number;
  cat?: string;
}

async function BlogList({ page, cat }: BlogListProps) {
  const { posts, count }: { posts: Post[]; count: number } = await fetchPosts(
    page,
    cat || ''
  );

  const POST_PER_PAGE = 2;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div>
      {posts?.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
      <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev} />
    </div>
  );
}

export default BlogList;

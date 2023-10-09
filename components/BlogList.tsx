import { Post } from '@prisma/client';
import { fetchPosts } from '@/utils/fetchPosts';
import Pagination from './Pagination';
import BlogCard from './BlogCard';

interface BlogListProps {
  page: number;
  cat?: string;
}

async function BlogList({ page, cat }: BlogListProps) {
  const { posts, count }: { posts: Post[]; count: number } = await fetchPosts(
    page,
    cat || ''
  );

  const POST_PER_PAGE = 6;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className='container my-24'>
      <h2 className='allura text-5xl md:text-7xl text-primary mb-8 text-center'>
        My latest thoughts
      </h2>
      <div className=''>
        {posts?.map((post) => (
          <BlogCard post={post} key={post.id} />
        ))}
      </div>
      {/* <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev} /> */}
    </div>
  );
}

export default BlogList;

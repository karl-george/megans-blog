import BlogList from '@/components/BlogList';
import CategoryList from '@/components/CategoryList';

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;

  return (
    <main className='text-center'>
      <CategoryList />
      <BlogList page={page} />
    </main>
  );
}

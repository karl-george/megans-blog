import BlogList from '@/components/BlogList';
import CategoryList from '@/components/CategoryList';
import Header from '@/components/Header';

export const revalidate = 0;

export default function Home({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const page = parseInt(searchParams.page) || 1;

  return (
    <main>
      <Header />
      <div className='container space-y-24'>
        <CategoryList />
        <BlogList page={page} />
      </div>
    </main>
  );
}

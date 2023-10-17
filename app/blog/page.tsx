import BlogList from '@/components/BlogList';
import CategoryList from '@/components/CategoryList';
import Header from '@/components/Header';

interface pageProps {
  searchParams: {
    page: string;
    cat?: string;
  };
}

function page({ searchParams }: pageProps) {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  console.log(searchParams);

  return (
    <div>
      <Header />
      <div className='space-y-24 container'>
        <CategoryList />
        <BlogList page={page} cat={cat} />
      </div>
    </div>
  );
}

export default page;

import BlogList from '@/components/BlogList';

interface pageProps {}

function page({ searchParams }: pageProps) {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <div>
      <h2>{cat} Section</h2>
      <BlogList page={page} cat={cat} />
    </div>
  );
}

export default page;

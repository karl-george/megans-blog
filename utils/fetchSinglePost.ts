export const fetchSinglePost = async (slug: string) => {
  const res = await fetch(`${process.env.BASE_URL}/api/posts//${slug}`);

  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }

  return res.json();
};

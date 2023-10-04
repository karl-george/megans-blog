export const fetchPosts = async (page: number, cat: string) => {
  const res = await fetch(
    `${process.env.BASE_URL}/api/posts?page=${page}&cat=${cat || ''}`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }

  return res.json();
};

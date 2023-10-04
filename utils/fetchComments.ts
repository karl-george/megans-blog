export const fetchComments = async (postSlug: string) => {
  const res = await fetch(
    `${process.env.BASE_URL}/api/comments?postSlug=${postSlug}`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch categories');
  }

  return res.json();
};

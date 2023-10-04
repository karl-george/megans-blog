export const fetchCategories = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/categories`);

  if (!res.ok) {
    throw new Error('Failed to fetch categories');
  }

  return res.json();
};

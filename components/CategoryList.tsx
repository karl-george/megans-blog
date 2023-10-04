import { fetchCategories } from '@/utils/fetchCategories';
import { Category } from '@prisma/client';
import Link from 'next/link';

interface CategoryListProps {}

async function CategoryList({}: CategoryListProps) {
  const categories: Category[] = await fetchCategories();

  return (
    <div>
      {categories?.map((category) => (
        <Link href={`/blog?cat=${category.slug}`} key={category.id}>
          {category.title}
        </Link>
      ))}
    </div>
  );
}

export default CategoryList;

import { fetchCategories } from '@/utils/fetchCategories';
import { Category } from '@prisma/client';

interface CategoryListProps {}

async function CategoryList({}: CategoryListProps) {
  const categories: Category[] = await fetchCategories();

  return (
    <div>
      {categories?.map((category) => (
        <div key={category.id}>{category.title}</div>
      ))}
    </div>
  );
}

export default CategoryList;

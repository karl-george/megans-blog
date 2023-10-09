import { Category } from '@prisma/client';
import { fetchCategories } from '@/utils/fetchCategories';
import CategoryCard from './CategoryCard';

interface CategoryListProps {}

async function CategoryList({}: CategoryListProps) {
  const categories: Category[] = await fetchCategories();

  return (
    <div className='mt-24'>
      <h2 className='allura text-5xl md:text-7xl text-primary mb-8 text-center'>
        Browse the Categories
      </h2>
      <div className='flex flex-col lg:flex-row gap-x-4 gap-y-8 justify-between'>
        {categories?.map((category) => (
          <CategoryCard category={category} key={category.id} />
        ))}
      </div>
    </div>
  );
}

export default CategoryList;

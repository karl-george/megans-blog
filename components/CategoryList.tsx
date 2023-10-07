import { Category } from '@prisma/client';
import { fetchCategories } from '@/utils/fetchCategories';
import CategoryCard from './CategoryCard';

interface CategoryListProps {}

async function CategoryList({}: CategoryListProps) {
  const categories: Category[] = await fetchCategories();

  return (
    <div className='container m-16 mx-auto'>
      <h2 className='allura text-5xl md:text-7xl text-primary mb-12 text-center'>
        Browse the Categories
      </h2>
      <div className='flex flex-col md:flex-row justify-between items-center'>
        {categories?.map((category) => (
          <CategoryCard category={category} key={category.id} />
        ))}
      </div>
    </div>
  );
}

export default CategoryList;

import Link from 'next/link';
import { Category } from '@prisma/client';

interface CategoryCardProps {
  category: Category;
}

function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div>
      <Link href={`/blog?cat=${category.slug}`}>{category.title}</Link>
    </div>
  );
}

export default CategoryCard;

import Link from 'next/link';
import { Category } from '@prisma/client';
import Image from 'next/image';

interface CategoryCardProps {
  category: Category;
}

function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/blog?cat=${category.slug}`}>
      <div className='flex flex-col items-center relative'>
        {category.img && (
          <Image
            src={category.img}
            alt='food-image'
            width={400}
            height={300}
            className='border-[10px] border-secondary'
          />
        )}
        <h3 className='absolute bottom-0 text-2xl uppercase bg-secondary text-primary py-2 px-6'>
          {category.title}
        </h3>
      </div>
    </Link>
  );
}

export default CategoryCard;

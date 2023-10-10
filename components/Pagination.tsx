'use client';

import { useRouter } from 'next/navigation';

interface PaginationProps {
  page: number;
  hasPrev: boolean;
  hasNext: boolean;
}

function Pagination({ page, hasPrev, hasNext }: PaginationProps) {
  const router = useRouter();

  return (
    <div className='my-16 flex flex-row justify-between max-w-lg mx-auto'>
      <button
        onClick={() => router.push(`?page=${page - 1}`)}
        disabled={!hasPrev}
        className='py-4 px-8 bg-secondary text-primary cursor-pointer disabled:cursor-not-allowed disabled:bg-secondary/50'
      >
        Previous
      </button>
      <button
        onClick={() => router.push(`?page=${page + 1}`)}
        disabled={!hasNext}
        className='py-4 px-8 bg-secondary text-primary cursor-pointer disabled:cursor-not-allowed disabled:bg-secondary/50'
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;

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
    <div>
      <button
        onClick={() => router.push(`?page=${page - 1}`)}
        disabled={!hasPrev}
      >
        Previous
      </button>
      <button
        onClick={() => router.push(`?page=${page + 1}`)}
        disabled={!hasNext}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;

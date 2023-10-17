'use client';

import { formatDateString } from '@/utils/formatDateString';
import { Comment } from '@prisma/client';
import Image from 'next/image';

interface CommentProps {
  comment: Comment;
}

function CommentCard({ comment }: CommentProps) {
  return (
    <div className='max-w-[800px] mx-auto mt-24'>
      <div className='flex gap-4'>
        <div>
          <Image
            src={comment.user.image}
            width={50}
            height={50}
            alt='user-image'
            className='rounded-full'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <p className='font-bold'>{comment.user.name}</p>
          <p className='text-sm'>{formatDateString(comment.createdAt)}</p>
          <p className='text-lg'>{comment.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default CommentCard;

'use client';

import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { Textarea } from './ui/textarea';

interface CommentFieldProps {
  postSlug: string;
}

function CommentField({ postSlug }: CommentFieldProps) {
  const { status } = useSession();
  const [desc, setDesc] = useState('');

  const handleSubmit = async () => {
    await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ desc, postSlug }),
    });
  };

  return (
    <div className='max-w-[800px] mx-auto'>
      {status === 'authenticated' ? (
        <div className='flex flex-col w-full'>
          <Textarea
            placeholder='Write a comment...'
            className='p-5'
            onChange={(e) => setDesc(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className='py-4 px-8 bg-secondary text-primary cursor-pointer w-fit mt-4 self-end'
          >
            Submit
          </button>
        </div>
      ) : (
        <p>Please login to post a comment</p>
      )}
    </div>
  );
}

export default CommentField;

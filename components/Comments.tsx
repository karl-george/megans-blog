'use client';

import { useSession } from 'next-auth/react';
import { useState } from 'react';
import useSWR from 'swr';
import CommentCard from './CommentCard';
import { Textarea } from './ui/textarea';
import { User } from '@prisma/client';

interface CommentsProps {
  postSlug: string;
}

interface Comment {
  id: string;
  createdAt: Date;
  desc: string;
  userEmail: string;
  postSlug: string;
  user: User;
}

const fetcher = async (url: string) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};

function Comments({ postSlug }: CommentsProps) {
  const { status } = useSession();
  const [desc, setDesc] = useState('');

  //!TODO: Update this url when deployed
  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  if (status === 'loading') {
    return <p className='text-center mt-6'>Loading...</p>;
  }

  if (data?.length < 0) {
    return <p>No comments here yet</p>;
  }

  const handleSubmit = async () => {
    await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ desc, postSlug }),
    });
    mutate();

    setDesc('');
  };

  return (
    <div className='w-full'>
      <h3 className='text-primary text-4xl mb-12 text-center'>Comments</h3>
      <div className='max-w-[800px] mx-auto'>
        {status === 'authenticated' ? (
          <div className='flex flex-col w-full'>
            <Textarea
              placeholder='Write a comment...'
              className='p-5'
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
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
      {isLoading
        ? 'Loading'
        : data?.map((comment: Comment) => (
            <CommentCard comment={comment} key={comment.id} />
          ))}
    </div>
  );
}

export default Comments;

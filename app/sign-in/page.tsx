'use client';

import { signIn, signOut } from 'next-auth/react';

interface pageProps {}

function page({}: pageProps) {
  return (
    <div className='flex flex-col justify-center items-center h-[81vh] gap-8'>
      <h2 className='text-2xl text-primary'>Sign in with Google</h2>
      <button
        onClick={() => signIn('google', { callbackUrl: '/' })}
        className='py-4 px-8 bg-secondary text-primary cursor-pointer'
      >
        Sign In
      </button>
    </div>
  );
}

export default page;

'use client';

import { signIn, signOut } from 'next-auth/react';

interface pageProps {}

function page({}: pageProps) {
  return (
    <div>
      <button onClick={() => signIn('google', { callbackUrl: '/' })}>
        Sign In
      </button>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
}

export default page;

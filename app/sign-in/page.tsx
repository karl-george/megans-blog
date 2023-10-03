'use client';

import { signIn, useSession, signOut } from 'next-auth/react';

interface pageProps {}

function page({}: pageProps) {
  const { data, status } = useSession();

  console.log(data, status);

  return (
    <div>
      <button onClick={() => signIn('google')}>Sign In</button>
      {/* TODO: Push the user to homepage when signed in */}
      <button onClick={() => signOut}>Sign Out</button>
    </div>
  );
}

export default page;

'use client';

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import MobileMenu from './MobileMenu';

interface AuthLinksProps {}

function AuthLinks({}: AuthLinksProps) {
  const { status } = useSession();

  return (
    <>
      {status === 'unauthenticated' ? (
        <Link href='/sign-in' className='max-lg:hidden lg:block'>
          Login
        </Link>
      ) : (
        <div
          className='max-lg:hidden lg:block cursor-pointer'
          onClick={() => signOut()}
        >
          Logout
        </div>
      )}
      <MobileMenu status={status} />
    </>
  );
}

export default AuthLinks;

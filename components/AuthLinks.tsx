'use client';

import { useSession } from 'next-auth/react';
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
        <Link href='/profile' className='max-lg:hidden lg:block'>
          Profile
        </Link>
      )}
      <MobileMenu status={status} />
    </>
  );
}

export default AuthLinks;

'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

interface NavbarProps {}

//! TODO: Refactor the client side away from navbar

function Navbar({}: NavbarProps) {
  const { status } = useSession();

  return (
    <div>
      <Link href='/'>Home - </Link>
      {status}
      <div onClick={() => signIn('google')}> - Sign-In</div>
      <div onClick={() => signOut()}> - Sign-Out</div>
    </div>
  );
}

export default Navbar;

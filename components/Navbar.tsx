'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';

interface NavbarProps {}

//! TODO: Refactor the client side away from navbar

function Navbar({}: NavbarProps) {
  const { status } = useSession();

  return (
    <div>
      <Link href='/'>Home - </Link>
      {status}
      <Link href='/sign-in'> - Sign-In</Link>
    </div>
  );
}

export default Navbar;

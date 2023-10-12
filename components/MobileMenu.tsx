import Link from 'next/link';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import { signOut } from 'next-auth/react';

interface MobileMenuProps {
  status: string;
}

function MobileMenu({ status }: MobileMenuProps) {
  return (
    <div className='lg:hidden'>
      <Sheet>
        <SheetTrigger>
          <Menu className='lg:hidden' size={26} />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className='allura text-[36px] text-center mt-4'>
              Megan
            </SheetTitle>
          </SheetHeader>
          <ul className='flex flex-col text-center gap-y-8 mt-12'>
            <li>
              <Link href='/blog?cat=travel'>Travel</Link>
            </li>
            <li>
              <Link href='/blog?cat=food'>Food</Link>
            </li>
            <li>
              <Link href='/blog?cat=tech'>Tech</Link>
            </li>
            <li>
              <Link href='/about'>About</Link>
            </li>
            <li>
              <Link href='/contact'>Contact</Link>
            </li>
            <li>
              {status === 'unauthenticated' ? (
                <Link href='/sign-in'>Login</Link>
              ) : (
                <div className='cursor-pointer' onClick={() => signOut()}>
                  Logout
                </div>
              )}
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileMenu;

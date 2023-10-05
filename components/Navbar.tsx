import Link from 'next/link';
import AuthLinks from './AuthLinks';

interface NavbarProps {}

function Navbar({}: NavbarProps) {
  return (
    <nav className='container py-8'>
      <ul className='flex items-center justify-between   text-xl'>
        <li>
          <Link href='/blog?cat=travel' className='max-lg:hidden lg:block'>
            Travel
          </Link>
        </li>
        <li>
          <Link href='/blog?cat=food' className='max-lg:hidden lg:block'>
            Food
          </Link>
        </li>
        <li>
          <Link href='/blog?cat=tech' className='max-lg:hidden lg:block'>
            Tech
          </Link>
        </li>
        <li>
          <Link href='/' className='text-[64px] allura'>
            Megan
          </Link>
        </li>
        <li>
          <Link href='/about' className='max-lg:hidden lg:block'>
            About
          </Link>
        </li>
        <li>
          <Link href='/contact' className='max-lg:hidden lg:block'>
            Contact
          </Link>
        </li>
        <li>
          <AuthLinks />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

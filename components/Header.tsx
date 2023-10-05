import Image from 'next/image';

interface HeaderProps {}

function Header({}: HeaderProps) {
  return (
    <div>
      <div className='bg-secondary'>
        <div className='container py-8'>
          <div className='relative flex flex-col-reverse justify-center items-center space-y-4'>
            <Image
              src='/hero-img.png'
              alt='hero-img'
              width={620}
              height={530}
              className='object-cover'
            />
            <div className='absolute text-center'>
              <div className=''>
                <h2 className='text-primary hero-text text-[40px] allura bg-white py-1 mb-4 px-4 mx-12'>
                  Hi, I'm Megan
                </h2>
              </div>
              <div className=''>
                <h2 className='text-primary hero-text text-[40px] allura bg-white py-1 px-4'>
                  Welcome to my blog
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

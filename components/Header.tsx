import Image from 'next/image';

interface HeaderProps {}

function Header({}: HeaderProps) {
  return (
    <div>
      <div className='bg-secondary'>
        <div className='container py-8'>
          <div className='relative flex flex-col-reverse justify-center items-center space-y-4 lg:items-start'>
            <Image
              src='/hero-img.png'
              alt='hero-img'
              width={820}
              height={530}
              className='object-cover lg:self-end'
            />
            <div className='absolute text-center'>
              <div className=' bg-white py-1 mb-4 lg:mb-8 px-4 mx-12'>
                <h2 className='text-primary hero-text text-[40px] md:text-[60px] lg:text-8xl allura'>
                  Hi, I'm Megan
                </h2>
              </div>
              <div className=' bg-white py-1 px-4 lg:ml-24 lg:px-12'>
                <h2 className='text-primary hero-text text-[40px] md:text-[60px] lg:text-8xl allura '>
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

// TODO!
// Try making out div flex and only setting text to middle
// through itemscenter
// Then set text to self start and image to self end
// Then try playing with the left %s on text

export default Header;

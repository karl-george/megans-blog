import Image from 'next/image';

interface pageProps {}

function page({}: pageProps) {
  return (
    <div className='container flex flex-col text-primary h-[77vh] text-center mt-14'>
      <h1 className='text-5xl mb-14'>About Me</h1>
      <div className='mx-auto'>
        <Image src='/me.jpg' alt='Me' width={550} height={500} className='' />
      </div>
      <p className='mt-12 max-w-4xl mx-auto text-left'>
        <b>Welcome</b> to a digital realm where the world is a never-ending
        buffet of adventure, flavors, and innovation. I'm Megan, and I'm
        thrilled to be your guide through the thrilling landscapes of travel,
        the tantalizing world of food, and the ever-evolving realm of
        technology.
        <br></br>
        <br></br>
        I'm a dreamer, an adventurer, and a storyteller. When I'm not
        jet-setting around the globe or indulging in culinary delights, you'll
        find me immersed in the ever-changing world of technology. My passion
        for these three worlds led me to create this blog, where I can share my
        experiences, insights, and discoveries with you. Join me on this
        exciting journey as we explore, taste, and discover the incredible
        tapestry of our world. Let's embark on a digital adventure together,
        connecting through travel, savoring the diverse flavors of food, and
        embracing the ever-advancing technology that shapes our lives. Thank you
        for being a part of my world, and I can't wait to be a part of yours.
        Together, we'll make every day an adventure worth savoring. Welcome to
        my world of travel, food, and technology. Let's explore!
      </p>
    </div>
  );
}

export default page;

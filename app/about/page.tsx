interface pageProps {}

function page({}: pageProps) {
  return (
    <div className='container flex flex-col text-primary h-[77vh] text-center mt-14'>
      <h1 className='text-5xl mb-14'>About Me</h1>
    </div>
  );
}

export default page;

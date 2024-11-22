const Home = () => {
  return (
    <div className='flex min-h-screen font-sister '>
      <div className=' hidden md:w-2/6 md:flex justify-end items-center'>
        <img
          src='./assets/ilustraciones/computer.png'
          alt='pc'
          className='object-cover transform animate-zoom-in'
        />
      </div>
      <div className=' w-screen md:w-4/5 flex justify-center bg-amarilloblanco '>
        <div className=' w-5/6 h-5/6 flex justify-center ml-10 bg-amarillo rounded-2xl md:rounded-t-none shadow-lg  '>
          <div className='w-5/6 h-5/6 ml-8 mt-5 bg-amarilloscuro rounded-2xl text-center flex flex-col items-center justify-center p-3 gap-8 shadow-lg transition-transform duration-300 hover:rotate-12 hover:transition-all hover:duration-500'>
            <h1 className='xl:text-5xl text-4xl'>Hago programación web.</h1>
            <h2 className='xl:text-4xl text-3xl'>Transformo ideas en código</h2>
            <p className='xl:text-2xl text-xl xl:w-2/3'>
              Adoro hacer cosas divertidas e interactivas.
            </p>
            <p className='xl:text-4xl text-3xl m-4'>
              ¡Te doy la bienvenida a mi mundo digital!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

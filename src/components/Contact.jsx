const Contact = () => {
  return (
    <div className='flex min-h-screen justify-center pt-20 md:justify-start md:pl-20 bg-rosablanco mb-20 md:mb-0 pb-5'>
      {/* Ventana externa */}
      <div className=' relative md:h-[300px] w-[85%] min-h-[400px] p-1 bg-rosaclaro rounded-lg shadow-lg'>
        {/* Barra superior de la ventana externa */}
        <div className='flex items-center justify-between p-2 bg-rosaoscuro rounded-lg border-2 border-black'>
          <h2 className='text-3xl md:text-5xl font-bold text-white ml-3 bg-rosa rounded-xl w-full mr-3 pl-5 font-sister'>
            CONTACTO
          </h2>
          <div className='flex space-x-1'>
            <div className='w-4 h-4 bg-red-500 rounded-full border-2 border-black'></div>
            <div className='w-4 h-4 bg-yellow-500 rounded-full border-2 border-black'></div>
            <div className='w-4 h-4 bg-green-500 rounded-full border-2 border-black'></div>
          </div>
        </div>
        {/* Ventana intermedia */}
        <div className='relative w-[85%] md:mx-44 mt-6 p-4 ml-8 bg-rosa rounded-lg shadow-md md:h-[250px] pb-10'>
          {/* Barra superior de la ventana intermedia */}
          <div className='flex items-center justify-between p-2 bg-rosaoscuro rounded-lg border-2 border-black'>
            <h2 className='text-white font-bold text-lg w-full pl-5 rounded-lg bg-rosa'>
              I
            </h2>
            <div className='flex space-x-1'>
              <div className='w-3 h-3 bg-red-500 rounded-full border-2 border-black'></div>
              <div className='w-3 h-3 bg-yellow-500 rounded-full border-2 border-black'></div>
              <div className='w-3 h-3 bg-green-500 rounded-full border-2 border-black'></div>
            </div>
          </div>

          {/* Ventana interna */}
          <div className='w-[90%] md:w-[350px] mt-6 p-4 bg-amarilloclaro rounded-lg shadow-md text-gray-800 text-lg ml-10 md:ml-32 lg:ml-80 xl:ml-[600px] md:h-[400px]'>
            {/* Barra superior de la ventana interna */}
            <div className='flex items-center justify-between p-2 bg-amarilloscuro rounded-lg border-2 border-black'>
              <h2 className='text-white font-retro w-full pl-5 rounded-lg bg-amarillo mr-3'>
                loading...
              </h2>

              <div className='flex space-x-1'>
                <div className='w-3 h-3 bg-red-500 rounded-full border-2 border-black'></div>
                <div className='w-3 h-3 bg-yellow-500 rounded-full border-2 border-black'></div>
                <div className='w-3 h-3 bg-green-500 rounded-full border-2 border-black'></div>
              </div>
            </div>

            {/* Contenido del contacto */}
            <div className='p-4 pt-6'>
              <p className='font-sister text-rosaoscuro text-xl md:text-2xl mb-5'>
                Siempre estoy dispuesta a charlar
              </p>
              <p className='font-sister mb-7 text-base md:text-lg'>
                <a
                  href='mailto:amandagc@outlook.es'
                  className='text-rosaoscuro hover:underline hover:text-xl'
                >
                  Envíame {''}
                </a>
                un correo electrónico a amandagc@outlook.es
              </p>

              <div className='flex items-start mt-4 space-x-3'>
                {/* Iconos en vertical */}
                <div className='flex flex-col space-y-3 mt-6'>
                  <a
                    href='https://www.linkedin.com/in/amanda-gonz%C3%A1lez-cotrina/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img
                      src='./assets/iconos/linkedin.png'
                      alt='LinkedIn'
                      className='h-6 min-w-11 transition-transform duration-200 hover:scale-125'
                    />
                  </a>
                  <a
                    href='https://github.com/Amanda-Gonzalez-Cotrina'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img
                      src='./assets/iconos/github.png'
                      alt='gitHub'
                      className='h-6 ml-2.5 transition-transform duration-200 hover:scale-125'
                    />
                  </a>
                </div>

                {/* Texto al lado de los iconos */}
                <span className='font-sister mt-7'>
                  O búscame en las redes sociales.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

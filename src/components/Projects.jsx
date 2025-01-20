import { useState } from 'react';

const Proyectos = () => {
  const [showAll, setShowAll] = useState(false);

  const proyectos = [
    {
      color: 'lilablanco',
      color2: 'lilaoscuro',
      top: '0',
      left: '10%',
      z: 10,
      nombre: 'Visualizador de Pokémon',
      enlace:
        'https://github.com/Amanda-Gonzalez-Cotrina/Visualizador_Pokemon01',
      imagen: './assets/ilustraciones/pokemon.png',
      deploy: 'https://aperezbanks.github.io/Visualizador_Pokemon01/',
    },
    {
      color: 'amarilloclaro',
      color2: 'amarilloscuro',
      top: '100px',
      left: '35%',
      z: 20,
      nombre: 'Web de Hackathones',
      enlace: 'https://github.com/Amanda-Gonzalez-Cotrina/HAB_PFB_HACKATHONES',
      imagen: './assets/ilustraciones/Hack-a-ton.png',
      deploy: 'https://hackathonamanda.netlify.app/',
    },
    {
      color: 'rosablanco',
      color2: 'rosa',
      top: '300px',
      left: '20%',
      z: 15,
      nombre: '👉 Portfolio 👈',
      enlace: 'https://github.com/Amanda-Gonzalez-Cotrina/Portfolio',
      imagen: './assets/ilustraciones/portfolio.png',
      deploy: 'https://amandie.netlify.app/',
    },
    {
      color: 'lilaclaro',
      color2: 'morado',
      top: '200px',
      left: '55%',
      z: 25,
      nombre: 'Próximamente...',
      enlace: 'https://enlace4.com',
      imagen: './assets/ilustraciones/futuro.jpg',
    },
    {
      color: 'amarilloblanco',
      color2: 'amarillo',
      top: '400px',
      left: '40%',
      z: 5,
      nombre: 'Próximamente...',
      enlace: 'https://enlace5.com',
      imagen: './assets/ilustraciones/futuro.jpg',
    },
    {
      color: 'rosa',
      color2: 'rosaoscuro',
      top: '50px',
      left: '75%',
      z: 30,
      nombre: 'Próximamente...',
      enlace: 'https://enlace6.com',
      imagen: './assets/ilustraciones/futuro.jpg',
    },
    {
      color: 'rosablanco',
      color2: 'rosa',
      top: '350px',
      left: '65%',
      z: 10,
      nombre: 'Próximamente...',
      enlace: 'https://enlace7.com',
      imagen: './assets/ilustraciones/futuro.jpg',
    },
  ];

  return (
    <div className='min-h-screen bg-verde flex flex-col items-center py-10 relative'>
      <h1 className='text-5xl text-center m-8 mb-14 font-sister'>PROYECTOS</h1>
      <img src='/public/assets/tec.png' alt='' />
      <div className='relative w-full h-auto'>
        {/* Diseño desordenado para pantallas xl y superiores */}
        <div className='hidden xl:block relative w-full h-[700px] '>
          {proyectos.map((card, index) => (
            <a
              key={index}
              href={card.deploy}
              target='_blank'
              rel='noopener noreferrer'
              className={`absolute w-60 h-72 bg-${card.color} border-2 border-black rounded-lg shadow-lg transition-transform duration-200 hover:scale-105 hover:shadow-lg hover:shadow-rosa`}
              style={{
                top: card.top,
                left: card.left,
                zIndex: card.z,
              }}
            >
              <div
                className={`absolute top-0 left-0 w-full bg-${card.color2} p-2 flex rounded-t-lg border-b-2 border-black`}
              >
                <div className='flex space-x-2'>
                  <div className='w-3 h-3 bg-red-500 rounded-full border border-black'></div>
                  <div className='w-3 h-3 bg-yellow-500 rounded-full border border-black'></div>
                  <div className='w-3 h-3 bg-green-500 rounded-full border border-black'></div>
                </div>
              </div>
              <div className='flex flex-col items-center justify-between h-64  mt-7 p-4'>
                <a
                  href={card.imagenEnlace}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    src={card.imagen}
                    alt={card.nombre}
                    className='w-52 h-24 mb-4 rounded-md border border-negro shadow-inner'
                  />
                </a>

                <h2 className='text-2xl text-center font-sister'>
                  {card.nombre}
                </h2>
                <a href={card.enlace} target='_blank'>
                  <img
                    src='./assets/iconos/github.png'
                    alt='GitHub'
                    className='h-10 min-w-10 m-2 transition-transform duration-200 hover:scale-110 '
                  />
                </a>
              </div>
            </a>
          ))}
        </div>

        {/* Diseño de filas para pantallas menores a xl */}
        <div className='block xl:hidden'>
          {/* Diseño para pantallas hasta sm: 3 proyectos en columna */}
          <div className='block sm:hidden'>
            <div
              className={`grid gap-10 grid-cols-1 ${
                showAll ? 'sm:grid-cols-3' : ''
              }`}
            >
              {proyectos
                .slice(0, showAll ? proyectos.length : 3)
                .map((card, index) => (
                  <a
                    key={index}
                    href={card.deploy}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`w-60 h-72 mx-auto bg-${card.color} border-2 border-black rounded-lg shadow-lg transition-transform duration-200 hover:scale-105 hover:shadow-lg hover:shadow-rosa`}
                  >
                    <div
                      className={`w-full bg-${card.color2} p-2 flex justify-end rounded-t-lg border-b-2 border-black`}
                    >
                      <div className='flex space-x-2'>
                        <div className='w-3 h-3 bg-red-500 rounded-full border border-black'></div>
                        <div className='w-3 h-3 bg-yellow-500 rounded-full border border-black'></div>
                        <div className='w-3 h-3 bg-green-500 rounded-full border border-black'></div>
                      </div>
                    </div>
                    <div className='flex flex-col items-center p-4 h-64 justify-between'>
                      <a
                        href={card.imagenEnlace}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <img
                          src={card.imagen}
                          alt={card.nombre}
                          className='w-52 h-24 mb-4 rounded-md border border-negro shadow-inner'
                        />
                      </a>
                      <h2 className='text-2xl text-center font-sister'>
                        {card.nombre}
                      </h2>
                      <a href={card.enlace} target='_blank'>
                        <img
                          src='./assets/iconos/github.png'
                          alt='GitHub'
                          className='h-10 min-w-10 m-2 transition-transform duration-200 hover:scale-110'
                        />
                      </a>
                    </div>
                  </a>
                ))}
            </div>
            <button
              onClick={() => setShowAll(!showAll)}
              className='block mx-auto mt-14 px-6 py-2 bg-black text-white font-retro text-xl rounded-lg hover:bg-gray-800'
            >
              {showAll ? 'Ver menos' : 'Ver más'}
            </button>
          </div>

          {/* Diseño para pantallas de sm a lg: 2 filas de 2 proyectos */}
          <div className='hidden sm:block lg:hidden'>
            <div
              className={`grid gap-14 sm:grid-cols-2 ${
                showAll ? 'md:grid-cols-2' : ''
              }`}
            >
              {proyectos
                .slice(0, showAll ? proyectos.length : 4)
                .map((card, index) => (
                  <a
                    key={index}
                    href={card.deploy}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`w-60 h-72 mx-auto bg-${card.color} border-2 border-black rounded-lg shadow-lg transition-transform duration-200 hover:scale-105 hover:shadow-lg hover:shadow-rosa`}
                  >
                    <div
                      className={`w-full bg-${card.color2} p-2 flex justify-end rounded-t-lg border-b-2 border-black`}
                    >
                      <div className='flex space-x-2'>
                        <div className='w-3 h-3 bg-red-500 rounded-full border border-black'></div>
                        <div className='w-3 h-3 bg-yellow-500 rounded-full border border-black'></div>
                        <div className='w-3 h-3 bg-green-500 rounded-full border border-black'></div>
                      </div>
                    </div>
                    <div className='flex flex-col items-center p-4 h-64 justify-between'>
                      <a
                        href={card.imagenEnlace}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <img
                          src={card.imagen}
                          alt={card.nombre}
                          className='w-52 h-24 mb-4 rounded-md border border-negro shadow-inner'
                        />
                      </a>
                      <h2 className='text-2xl font-sister text-center'>
                        {card.nombre}
                      </h2>
                      <a href={card.enlace} target='_blank'>
                        <img
                          src='./assets/iconos/github.png'
                          alt='GitHub'
                          className='h-10 min-w-10 m-2 transition-transform duration-200 hover:scale-110'
                        />
                      </a>
                    </div>
                  </a>
                ))}
            </div>
            <button
              onClick={() => setShowAll(!showAll)}
              className='block mx-auto mt-14 px-6 py-2 bg-black text-white font-retro text-xl rounded-lg hover:bg-gray-800'
            >
              {showAll ? 'Ver menos' : 'Ver más'}
            </button>
          </div>

          {/* Diseño para pantallas de lg a xl: 2 filas de 3 proyectos */}
          <div className='hidden lg:block xl:hidden'>
            <div
              className={`grid gap-14 lg:grid-cols-3 ${
                showAll ? 'xl:grid-cols-3' : ''
              }`}
            >
              {proyectos
                .slice(0, showAll ? proyectos.length : 6)
                .map((card, index) => (
                  <a
                    key={index}
                    href={card.deploy}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`w-60 h-72 mx-auto bg-${card.color} border-2 border-black rounded-lg shadow-lg transition-transform duration-200 hover:scale-105 hover:shadow-lg hover:shadow-rosa`}
                  >
                    <div
                      className={`w-full bg-${card.color2} p-2 flex justify-end rounded-t-lg border-b-2 border-black`}
                    >
                      <div className='flex space-x-2'>
                        <div className='w-3 h-3 bg-red-500 rounded-full border border-black'></div>
                        <div className='w-3 h-3 bg-yellow-500 rounded-full border border-black'></div>
                        <div className='w-3 h-3 bg-green-500 rounded-full border border-black'></div>
                      </div>
                    </div>
                    <div className='flex flex-col items-center p-4 h-64 justify-between'>
                      <a
                        href={card.imagenEnlace}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <img
                          src={card.imagen}
                          alt={card.nombre}
                          className='w-52 h-24 mb-4 rounded-md border border-negro shadow-inner'
                        />
                      </a>
                      <h2 className='text-2xl font-sister text-center'>
                        {card.nombre}
                      </h2>
                      <a href={card.enlace} target='_blank'>
                        <img
                          src='./assets/iconos/github.png'
                          alt='GitHub'
                          className='h-10 min-w-10 m-2 transition-transform duration-200 hover:scale-110'
                        />
                      </a>
                    </div>
                  </a>
                ))}
            </div>
            <button
              onClick={() => setShowAll(!showAll)}
              className='block mx-auto mt-14 px-6 py-2 bg-black text-white text-xl font-retro rounded-lg hover:bg-gray-800'
            >
              {showAll ? 'Ver menos' : 'Ver más'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proyectos;

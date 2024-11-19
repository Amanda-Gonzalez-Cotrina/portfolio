import PropTypes from 'prop-types'; // Importamos PropTypes

const Navbar = ({ onLinkClick }) => {
  return (
    <div className=' flex '>
      <a
        className='w-screen md:w-2/6 bg-amarilloblanco md:bg-transparent'
        href='#home'
        onClick={(e) => onLinkClick(e, 'home')}
      >
        <img
          className=' h-14 m-10 transition-transform duration-300 ease-in-out hover:scale-110'
          src='/Logo/logo2.png'
          alt='Logo'
        />
      </a>

      {/* Barra de navegación en la parte superior para pantallas grandes */}

      <nav className=' hidden md:flex md:w-4/5 md:justify-center bg-amarilloblanco '>
        <div className='  w-5/6 h-24 flex items-center justify-center mt-11 ml-10 bg-amarillo rounded-t-2xl'>
          <ul className='flex gap-10 font-sister text-lg'>
            <li className='flex min-w-28 p-5 h-8 items-center justify-center hover:bg-lilablanco hover:text-blanco hover:rounded-3xl hover:shadow-md active:shadow-inner active:bg-lilaclaro'>
              <a href='#about' onClick={(e) => onLinkClick(e, 'about')}>
                Sobre mí
              </a>
            </li>
            <li className='flex w-auto p-5 h-8 items-center justify-center hover:bg-lilablanco hover:text-blanco hover:rounded-3xl hover:shadow-md active:shadow-inner active:bg-lilaclaro'>
              <a href='#projects' onClick={(e) => onLinkClick(e, 'projects')}>
                Proyectos
              </a>
            </li>
            <li className='flex w-auto p-5 h-8 items-center justify-center hover:bg-lilablanco hover:text-blanco hover:rounded-3xl hover:shadow-md active:shadow-inner active:bg-lilaclaro'>
              <a href='#contact' onClick={(e) => onLinkClick(e, 'contact')}>
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Barra de navegación fija en la parte inferior para pantallas pequeñas */}
      <nav className='md:hidden w-screen p-5 border-t-2  flex justify-center fixed bottom-0 z-10 bg-amarilloblanco'>
        <ul className='flex gap-10 font-sister text-lg'>
          <li className='flex w-auto p-5 h-10 items-center justify-center hover:underline transition-transform duration-200 hover:scale-110'>
            <a
              className='flex flex-col items-center'
              href='#about'
              onClick={(e) => onLinkClick(e, 'about')}
            >
              <img
                src='./assets/iconos/corazon.png'
                alt='Sobre mí'
                className='h-5 w-5'
              />
              Sobre mí
            </a>
          </li>
          <li className='flex w-auto p-5 h-10 items-center justify-center hover:underline transition-transform duration-200 hover:scale-110'>
            <a
              className='flex flex-col items-center'
              href='#projects'
              onClick={(e) => onLinkClick(e, 'projects')}
            >
              <img
                src='./assets/iconos/lapiz.png'
                alt='proyectos'
                className='h-7 w-7'
              />
              Proyectos
            </a>
          </li>
          <li className='flex w-auto p-5 h-10 items-center justify-center hover:underline transition-transform duration-200 hover:scale-110'>
            <a
              className='flex flex-col items-center'
              href='#contact'
              onClick={(e) => onLinkClick(e, 'contact')}
            >
              <img
                src='./assets/iconos/mensaje.png'
                alt='contacto'
                className='h-7 w-7'
              />
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

// Validación de props
Navbar.propTypes = {
  onLinkClick: PropTypes.func.isRequired, // Validamos que onLinkClick sea una función
};

export default Navbar;

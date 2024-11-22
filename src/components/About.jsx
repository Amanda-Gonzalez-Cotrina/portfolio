const About = () => {
  return (
    <div className='flex min-h-screen bg-lilablanco'>
      {/* Ventana externa */}
      <div className='relative m-10 lg:w-[1000px] min-h-[600px] pb-10 p-1 bg-lilaclaro rounded-lg shadow-lg'>
        {/* Barra superior de la ventana externa */}
        <div className='flex items-center justify-between p-2 bg-morado rounded-lg border-2 border-negro'>
          <h2 className='text-2xl lg:text-4xl font-sister text-white ml-3 bg-lilablanco rounded-xl w-full mr-3 pl-5 '>
            Sobre mí
          </h2>
          <div className='flex space-x-1'>
            <div className='w-4 h-4 bg-red-500 rounded-full border-2 border-negro'></div>
            <div className='w-4 h-4 bg-yellow-500 rounded-full border-2 border-negro'></div>
            <div className='w-4 h-4 bg-green-500 rounded-full border-2 border-negro'></div>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row items-center lg:items-start'>
          {/* Imagen circular con animaciones de hover */}
          <div className='group lg:absolute lg:-right-16 xl:-right-64 2xl:-right-96 lg:top-10 w-72 h-72 lg:w-[500px] lg:h-[500px] bg-teal-300 rounded-full overflow-hidden mt-4 lg:mt-0 border-4 border-morado transition-all duration-300 ease-in-out transform hover:scale-110 hover:border-rosa hover:border-8 hover:rotate-3 relative'>
            <img
              src='/assets/perfil.png'
              alt='Imagen de perfil'
              className='object-cover w-full h-full'
            />
            {/* Botón que aparece solo cuando hover */}
            <a
              href='#contact' // Enlace de anclaje que lleva a la sección con id="sobre-mi"
              className='absolute bottom-4 left-1/2 transform -translate-x-1/2 py-2 px-4 bg-morado text-white rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out hover:bg-rosa hover:border-lilaoscuro hover:border-2 hover:shadow-xl hover:scale-105 font-retro'
            >
              Contacto
            </a>
          </div>

          {/* Ventana interna */}
          <div className='relative lg:w-[600px] xl:w-[800px] w-full p-1 bg-lilaoscuro rounded-lg shadow-md mt-8 ml-8 text-white text-lg lg:text-xl font-sister'>
            {/* Barra superior de la ventana interna */}
            <div className='flex items-center justify-between p-2 bg-verde rounded-lg border-2 border-negro'>
              <h2 className='bg-lilaclaro text-blanco font-sister text-xl w-full mr-3 pl-5 rounded-lg'>
                Amanda González Cotrina
              </h2>
              <div className='flex space-x-1'>
                <div className='w-3 h-3 bg-red-500 rounded-full border-2 border-negro'></div>
                <div className='w-3 h-3 bg-yellow-500 rounded-full border-2 border-negro'></div>
                <div className='w-3 h-3 bg-green-500 rounded-full border-2 border-negro'></div>
              </div>
            </div>

            {/* Contenido del texto */}
            <p id='sobre-mi' className='leading-relaxed p-4 pt-8'>
              👋 ¡Hola, soy Amanda! 🤗
            </p>
            <p className='p-4'>
              Nueva programadora web con un enfoque especial en el desarrollo
              front-end. He completado un bootcamp de programación full stack
              donde he podido adquirir habilidades en tecnologías como HTML,
              CSS, JavaScript y frameworks como React y Node.js.
            </p>
            <p className='p-4'>
              Me atrae crear interfaces intuitivas y atractivas que mejoren la
              experiencia del usuario.
            </p>
            <p className='p-4'>
              Mi huella personal es mi capacidad para combinar un pensamiento
              analítico con un enfoque creativo. Transformo ideas en
              aplicaciones visualmente impactantes, asegurándome de que sean
              accesibles y funcionales en todos los dispositivos. Además, tengo
              experiencia trabajando en equipo utilizando herramientas como
              notion, slack y figma, entre otras, y aplicando metodologías
              ágiles como SCRUM, lo que me permite colaborar de manera efectiva
              en proyectos multifuncionales.
            </p>
            <p className='p-4'>
              Disfruto transformando ideas en aplicaciones visualmente
              impactantes, asegurándome de que sean accesibles y funcionales en
              todos los dispositivos.{' '}
            </p>
            <p className='p-4'>
              Comprometida con el aprendizaje continuo, y familiarizada con un
              enfoque de trabajo altamente organizado, siempre busco nuevas
              oportunidades para expandir mis conocimientos y habilidades.
            </p>
            <p className='p-4 pb-8'>
              ¡¡¡Estoy emocionada por la posibilidad de contribuir a proyectos
              innovadores que hagan una diferencia!!!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

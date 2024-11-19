const About = () => {
  return (
    <div className='flex  min-h-screen bg-lilablanco'>
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
          {/* Imagen circular */}
          <div className='lg:absolute lg:-right-16 xl:-right-64 2xl:-right-96 lg:top-10 w-72 h-72 lg:w-[500px] lg:h-[500px] bg-teal-300 rounded-full overflow-hidden mt-4 lg:mt-0 border-4 border-morado'>
            <img
              src='/assets/perfil.png'
              alt='Imagen de perfil'
              className='object-cover w-full h-full'
            />
          </div>

          {/* Ventana interna */}
          <div className='relative lg:w-[600px] xl:w-[800px] w-full  p-1 bg-lilaoscuro rounded-lg shadow-md mt-8 ml-8  text-white text-lg lg:text-xl font-sister'>
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
            <p className='leading-relaxed p-4 pt-8'>
              Soy programadora web con un enfoque especial en el desarrollo
              front-end.
            </p>
            <p className='p-4'>
              Tras completar un bootcamp de programación, he adquirido
              habilidades en tecnologías como HTML, CSS, JavaScript y frameworks
              como React y Node.js.{' '}
            </p>
            <p className='p-4'>
              Me apasiona crear interfaces intuitivas y atractivas que mejoren
              la experiencia del usuario. Me diferencia mi capacidad para
              combinar un pensamiento analítico con un enfoque creativo.{' '}
            </p>
            <p className='p-4'>
              Disfruto transformando ideas en aplicaciones visualmente
              impactantes, asegurándome de que sean accesibles y funcionales en
              todos los dispositivos.{' '}
            </p>
            <p className='p-4'>
              Comprometida con el aprendizaje continuo, siempre busco nuevas
              oportunidades para expandir mis conocimientos y habilidades.{' '}
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

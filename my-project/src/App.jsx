import './App.css'

function App() {
  return (
    <div className='w-full h-screen bg-gradient-to-b from-orange-500 to-amber-900'>
      <div className='px-20'>
        <div className='w-full p-5 flex gap-10 flex-row justify-between mb-20'>
          <div>
            <span className='font-bold text-4xl text-white'>Un furro programador</span>
          </div>
          <div className='flex items-center text-white'>
            <div className='flex gap-2 font-light'>
              <a className='w-24 text-center p-2'>Inicio</a>
              <a className='w-24 text-center p-2'>Sobre Mí</a>
              <a className='w-24 text-center p-2'>Proyectos</a>
              <a className='w-24 text-center p-2'>Blog</a>
              <a className='w-24 text-center p-2'>Contacto</a>
            </div>
          </div>
        </div>
        <div className='w-full h-auto border border-violet-600 rounded-3xl m-auto py-8 px-8 gap-5 flex flex-col'>
          <p className='uppercase text-gray-300 text-sm font-medium text-center'>blogpost</p>
          <article className='text-gray-300 text-left'>
            <h1 className='text-center text-4xl mb-5'>
              Potenciando tus Proyectos React con la Elegancia de Tailwind CSS
            </h1>
            <p>
              Cuando se trata de desarrollar aplicaciones web con React, la elección de las herramientas adecuadas puede marcar una gran diferencia en la eficiencia y la estética de tu proyecto. Una combinación que ha estado ganando popularidad y demostrando su valía es la sinergia entre React y Tailwind CSS. En este post, exploraremos cómo esta poderosa combinación puede llevar tus proyectos al siguiente nivel.
            </p>
            <br />
            <h2>
              Un Encuentro Armonioso de Potencia y Agilidad
            </h2>
            <p>
              React, conocido por su enfoque en la creación de interfaces de usuario dinámicas y componentes reutilizables, se fusiona perfectamente con Tailwind CSS, un framework de diseño utilitario que facilita la construcción de diseños consistentes y atractivos. Tailwind CSS aborda el diseño de manera modular, permitiéndote aplicar estilos a través de clases predefinidas, lo que se alinea maravillosamente con la filosofía de componentes de React.
            </p>
            <br />
            <h2>
              Ventajas de Combinar React y Tailwind
            </h2>
            <ol>
              <li>
                Productividad Aumentada: La combinación de React y Tailwind acelera el proceso de desarrollo al proporcionar una manera sencilla de aplicar estilos y diseñar componentes. En lugar de escribir CSS personalizado para cada componente, puedes aprovechar las clases de Tailwind para lograr un estilo coherente y atractivo sin perder tiempo.
              </li>
              <li>
                Diseño Consistente: Con Tailwind CSS, puedes lograr un diseño consistente y profesional en todo tu proyecto. Las clases utilitarias de Tailwind se ajustan a un sistema coherente de diseño, lo que facilita la creación de interfaces pulidas y agradables a la vista.
              </li>
              <li>
                Flexibilidad Total: A pesar de su enfoque utilitario, Tailwind CSS no limita tu creatividad. Puedes personalizar y extender las clases para adaptarlas a las necesidades específicas de tu proyecto. Además, la modularidad de React te permite combinar componentes de manera flexible y organizar tu aplicación de manera eficiente.
              </li>
              <li>
                Rendimiento Optimizado: Tailwind CSS se centra en generar estilos optimizados y livianos, lo que contribuye a un mejor rendimiento de la aplicación. Al eliminar el exceso de CSS no utilizado, tu aplicación puede cargar más rápido y brindar una experiencia más fluida a los usuarios.
              </li>
            </ol>

            <h2>
              Comienza tu Viaje con React y Tailwind
            </h2>
            <p>
              La colaboración entre React y Tailwind CSS representa un dúo imbatible para desarrolladores que buscan agilidad, estilo y eficiencia. Al elegir esta combinación, puedes enfocarte en lo que realmente importa: la creación de aplicaciones web excepcionales y cautivadoras.
            </p>
            <p>
              En resumen, la sinergia entre React y Tailwind CSS es una elección inteligente para cualquier proyecto que busque un desarrollo rápido, un diseño impactante y una experiencia de usuario de primer nivel. Ya sea que estés construyendo una aplicación web personal o un proyecto empresarial, esta combinación te llevará a grandes alturas sin los dolores de cabeza tradicionales del diseño y el estilo.
            </p>
            <p>
              ¡Así que adelante, comienza tu viaje con React y Tailwind, y descubre cómo esta fusión puede transformar tus proyectos en obras maestras modernas y funcionales!
            </p>
            <p>Hola suscribete y dale like a este post main</p>
          </article>
        </div>
      </div>
      <footer className='w-full h-12 flex flex-row justify-between px-20 py-4 font-medium text-white bg-slate-950'>
        <div>
          <p>Hecho para el curso de Platzi</p>
        </div>
        <div>
          <p>Hecho por Freddy con 💜</p>
        </div>
      </footer>
    </div>


  )
}

export default App

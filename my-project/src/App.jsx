import './App.css'

function App() {
  return (
    <div className='w-full h-screen px-20 bg-gradient-to-b from-violet-950 to-indigo-700'>
      <div className='w-full p-5 flex gap-10 flex-row justify-between mb-20'>
        <div>
          <span className='font-bold text-4xl text-white'>Freddy Puoy</span>
        </div>
        <div className='flex items-center text-white'>
          <ul className='flex flex-row gap-5 font-light'>
            <li>Inicio</li>
            <li>Sobre Mi</li>
            <li>Proyectos</li>
            <li>Blog</li>
            <li>Contacto</li>
          </ul>
        </div>
      </div>
      <div className='w-full h-96 border border-violet-600 rounded-3xl m-auto py-8 px-8 gap-5 flex flex-col'>
        <p className='uppercase text-gray-300 text-sm font-medium text-center'>blogpost</p>
        <h1 className="text-6xl center font-medium text-white text-center">
          Este es un titulo atractivo del post
        </h1>
        <p className='text-white font-light text-xl'>Este es un parrafo de inicio donde voy a escribir algo que seguramente te va a encantar</p>
      </div>
    </div>


  )
}

export default App

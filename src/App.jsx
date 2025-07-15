import logo from '../src/assets/logo.webp';  // Ruta del logo

export const App = () => {
  return (
    <>
    <div className='flex items-center font-bold gap-60 text-white'>
        { /* Logo */}
        <div className='w-36'>
            <img src={logo} alt="Descripción del logo" />
        </div>

        { /* Navbar */}
        <div>
            <nav>
                <ul className='flex gap-10 text-base'>
                    <li>
                        <a href="#" className="inline-block transform hover:scale-110 hover:text-green-500 transition-all duration-200">
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a href="#" className="inline-block transform hover:scale-110 hover:text-green-500 transition-all duration-200">
                            Sobre mi
                        </a>
                    </li>
                    <li>
                        <a href="#" className="inline-block transform hover:scale-110 hover:text-green-500 transition-all duration-200">
                            Proyectos
                        </a>
                    </li>
                    <li>
                        <a href="#" className="inline-block transform hover:scale-110 hover:text-green-500 transition-all duration-200">
                            Habilidades
                        </a>
                    </li>
                    <li>
                        <a href="#" className="inline-block transform hover:scale-110 hover:text-green-500 transition-all duration-200">
                            Experiencia
                        </a>
                    </li>
                    <li>
                        <a href="#" className="inline-block transform hover:scale-110 hover:text-green-500 transition-all duration-200">
                            Contacto
                        </a>
                    </li>
                </ul>
            </nav>
        </div>

        { /* Boton de descarga cv */}
       <div className='flex gap-3 items-center border-2 px-12 py-3 rounded-3xl cursor-pointer hover:bg-green-500 transition-all duration-300'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
                <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
            </svg>
            <button>                
                Descargar CV
            </button>
        </div>
    </div>
    </>
  )
}

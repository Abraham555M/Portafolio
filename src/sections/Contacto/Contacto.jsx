import React from 'react'

export const Contacto = () => {
  return (
    <section id="contacto" className="p-6 text-white border md:p-20">
      <div className="max-w-[1200px] mx-auto">
        {/* Título */}
        <div className="py-3 space-y-10 text-center">
          <h1 className="text-3xl font-bold md:text-5xl">Contact</h1>
        </div> 

        { /* Nombre, Email, Mensaje */}

        <div>
          <form action="">
            <div>
              <label htmlFor="">Nombre</label>
              <input className='border' type="text" />
            </div>


          </form>
        </div>
        
      </div> 
    </section>
    )
}

import React from 'react'

const navbar = () => {
  return (
    <div>
            {/* Navbar */}
      <header className="w-full bg-white shadow-sm px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold">
            EL
          </div>
          <div>
            <h1 className="font-semibold">Ecomedica Lab</h1>
            <p className="text-xs text-gray-500 -mt-1">Panel de Administración</p>
          </div>
        </div>

        <nav className="flex items-center gap-4">
          <a href="#" className="px-4 py-1 text-sm hover:text-blue-600">Calendario</a>
          <a href="#" className="px-4 py-1 text-sm hover:text-blue-600">Doctores</a>
          <button className="px-4 py-1 bg-gray-100 rounded hover:bg-gray-200 text-sm">
            Cerrar Sesión
          </button>
        </nav>
      </header>
    </div>
  )
}

export default navbar

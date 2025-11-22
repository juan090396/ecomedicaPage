import React from 'react'

const calendary = () => {
  return (
    <div className="bg-white shadow-sm rounded-lg p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-lg">Calendario de Citas</h2>

            <div className="flex items-center gap-2">
              <button className="px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700">
                + Nueva Cita
              </button>
            </div>
          </div>

          {/* Controles del mes */}
          <div className="flex items-center justify-between mb-4 px-2">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200">
              &lt;
            </button>

            <h3 className="font-semibold text-gray-600">Noviembre 2025</h3>

            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200">
              &gt;
            </button>
          </div>

          {/* Días de la semana */}
          <div className="grid grid-cols-7 text-center text-sm text-gray-600 font-medium mb-2">
            <div>Dom</div>
            <div>Lun</div>
            <div>Mar</div>
            <div>Mié</div>
            <div>Jue</div>
            <div>Vie</div>
            <div>Sáb</div>
          </div>

          {/* Calendario vacío (maquetación) */}
          <div className="grid grid-cols-7 border border-gray-200">

            {Array.from({ length: 35 }).map((_, i) => (
              <div
                key={i}
                className="h-32 border border-gray-200 p-2 text-xs text-gray-700 relative"
              >
                <span className="text-gray-500 text-xs">{i + 1}</span>

                {/* Ejemplo de evento (solo maquetación) */}
                {i === 18 && (
                  <div className="absolute bottom-2 left-1 right-1 bg-green-500 text-white text-xs px-2 py-1 rounded">
                    María García — 10:00
                  </div>
                )}

                {i === 18 && (
                  <div className="absolute bottom-10 left-1 right-1 bg-yellow-500 text-white text-xs px-2 py-1 rounded">
                    Carlos López — 11:30
                  </div>
                )}
              </div>
            ))}

          </div>
    </div>
  )
}

export default calendary
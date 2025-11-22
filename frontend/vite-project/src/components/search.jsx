import React from 'react'

const search = () => {
  return (
    <div className="bg-white shadow-sm rounded-lg p-5 mb-6">
          <label className="block font-medium mb-2 text-sm">Buscar Citas</label>

          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Buscar por paciente, doctor o fecha (YYYY-MM-DD)..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <select className="border border-gray-300 bg-white text-sm rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500">
              <option>Todos los doctores</option>
            </select>

            <select className="border border-gray-300 bg-white text-sm rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500">
              <option>Todos los estados</option>
            </select>
          </div>
    </div>
  )
}

export default search
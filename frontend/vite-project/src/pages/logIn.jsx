import React, { useState } from "react";

// TODO: agregar funciones reales de inicio de sesión más adelante


export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: conectar con backend para validar credenciales
    console.log("Intentando iniciar sesión...", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 p-4">
      <div className="bg-white w-full max-w-md shadow-xl rounded-2xl p-10 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
            {/* TODO: reemplazar con logo real */}
            <span>⚕️</span>
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-1">Ecomedica Lab</h1>
        <p className="text-gray-500 mb-8">Panel de Administración</p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Correo Electrónico
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="admin@ecomedialab.com"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-all"
          >
            Iniciar Sesión
          </button>
        </form>

        {/* Texto inferior */}
        <p className="text-gray-500 text-xs mt-6">
          Credenciales de prueba:
        </p>
        <p className="text-gray-400 text-xs">admin@ecomedialab.com / admin123</p>
      </div>
    </div>
  );
}

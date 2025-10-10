import React from 'react'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/x.svg'
import { Mail, MapPin, Phone } from "lucide-react"

const siteFooter = () => {
  return (
    
      <footer className="bg-blue-900 text-white py-12 px-20">
        <div className="container px-4 md:px-6">

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

          <div>
            <h3 className="text-xl font-bold mb-4">Ecomedica Lab</h3>
            <p className="text-blue-100 mb-4">Ofreciendo atención médica de calidad para toda la familia.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-100 hover:text-white">
                <img src={facebook} alt="facebook"  className="h-5 w-5 object-contain" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-blue-100 hover:text-white">
                <img src={twitter} alt="facebook"  className="h-5 w-5 object-contain" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://www.instagram.com/ecomedica.ve?igsh=NDl3bnRwenB0ZGJ6" target="_blank" className="text-blue-100 hover:text-white">
                <img src={instagram} alt="facebook"   className="h-5 w-5 object-contain" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <div className="space-y-3 mr-4">
              <div className="flex items-start space-x-3">
                <a href="https://maps.app.goo.gl/krU9Pz7a3saU5Lfu9?g_st=ipc" target="_blank">
                    <MapPin className="h-5 w-5 mt-0.5 text-blue-300" />
                </a>
                
                <p className="text-blue-100">Urb. Cumaná Segunda, Av armando Zuloaga Blanco, Cumana, Estado Sucre</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-300" />
                <p className="text-blue-100">(123) 456-7890</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-300" />
                <p className="text-blue-100">info@ecomedalab.com</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Horarios</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-blue-100">Lunes - Viernes:</span>
                <span className="text-white">8:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-100">Sábado:</span>
                <span className="text-white">9:00 AM - 2:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-100">Domingo:</span>
                <span className="text-white">Cerrado</span>
              </div>
              <div className="mt-4 pt-4 border-t border-blue-800">
                <p className="text-blue-100">
                  Para emergencias fuera de horario, llame a nuestra línea de emergencia: (123) 456-7890
                </p>
              </div>
            </div>
          </div>
        
        </div>

        <div className="mt-8 pt-8 border-t border-blue-800 text-center">
          <p className="text-blue-100">© {new Date().getFullYear()} Ecomedica Lab. Todos los derechos reservados.</p>
        </div>

      </div>

      </footer>
    
  )
}

export default siteFooter

"use client"
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { FaInstagram, FaTiktok, FaWhatsapp, FaPaw } from 'react-icons/fa'

export default function HomePageComponent() {
  const [usuario, setUsuario] = useState(null)

  useEffect(() => {
    const user = localStorage.getItem('usuario')
    if (user) setUsuario(JSON.parse(user))
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-yellow-50 text-center">
      {/* Navegación */}
      <nav className="w-full bg-green-700 text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <FaPaw className="text-pink-300" /> TransMasc
          </h1>
          <div className="space-x-6">
            <Link href="/" className="hover:underline">Inicio</Link>
            <Link href="/servicios" className="hover:underline">Servicios</Link>
            <Link href="/contacto" className="hover:underline">Contacto</Link>
          </div>
        </div>
      </nav>

      {/* Contenido principal */}
      <main className="p-6 flex flex-col items-center justify-center">
        <header className="mb-10 mt-12">
          <h2 className="text-5xl font-extrabold text-green-700 flex items-center gap-3">
            <FaPaw className="text-pink-500" /> TransMasc PetCare
          </h2>
          <p className="text-lg mt-2 text-green-600">Cuidamos a tus mascotas como si fueran nuestras 🐶🐱</p>
          {usuario && (
            <p className="mt-4 text-md text-green-800">
              Bienvenido/a <strong>{usuario.nombre}</strong>
            </p>
          )}
        </header>

        <section className="max-w-xl text-green-800 mb-12">
          <h2 className="text-2xl font-semibold mb-3">Sobre nosotros</h2>
          <p>
            Somos un grupo de cuidadores/as apasionados por los animales. 
            Ofrecemos paseos, cuidado a domicilio y transporte especial por distancia.
            Esta app simula nuestros servicios para mostrar cómo sería una experiencia real
            de petcare con todo el amor 💚.
          </p>
        </section>

        <section className="flex gap-6 text-3xl text-green-700 mb-10">
          <a href="https://wa.me/541112345678" target="_blank" rel="noopener noreferrer" className="hover:text-green-500" title="WhatsApp">
            <FaWhatsapp />
          </a>
          <a href="https://www.instagram.com/tu_instagram/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500" title="Instagram">
            <FaInstagram />
          </a>
          <a href="https://www.tiktok.com/@tu_usuario" target="_blank" rel="noopener noreferrer" className="hover:text-black" title="TikTok">
            <FaTiktok />
          </a>
        </section>
      </main>
    </div>
  )
}

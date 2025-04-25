"use client"
import { useEffect, useState } from 'react'

export default function HomePageComponent() {
  const [usuario, setUsuario] = useState(null)

  useEffect(() => {
    const user = localStorage.getItem('usuario')
    if (user) setUsuario(JSON.parse(user))
  }, [])

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-green-100">
      <h1 className="text-4xl font-bold text-green-700">¡Bienvenido/a al mundo de las mascotas! 🐶🐱</h1>
      {usuario && (
        <p className="mt-4 text-lg text-green-800">
          Cuidador/a: <strong>{usuario.nombre}</strong>
        </p>
      )}
    </div>
  )
}

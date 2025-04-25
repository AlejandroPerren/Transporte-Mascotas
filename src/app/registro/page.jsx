'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FaPaw } from 'react-icons/fa'

export default function Register() {
  const router = useRouter()
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    password: ''
  })

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    console.log('Registrado:', form)
    router.push('/ingreso')
  }

  return (
    <div className="flex h-screen items-center justify-center bg-yellow-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md border-4 border-pink-200"
      >
        <div className="flex justify-center mb-4 text-pink-500 text-4xl">
          <FaPaw />
        </div>
        <h2 className="text-3xl font-bold text-center text-pink-500 mb-6 font-[Comic Sans MS]">Crear cuenta</h2>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre de humano 🧍"
          value={form.nombre}
          onChange={handleChange}
          className="w-full p-3 mb-4 border rounded-xl border-pink-300 placeholder:text-pink-400"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Correo del cuidador 🐾"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 mb-4 border rounded-xl border-pink-300 placeholder:text-pink-400"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña secreta 🐶"
          value={form.password}
          onChange={handleChange}
          className="w-full p-3 mb-6 border rounded-xl border-pink-300 placeholder:text-pink-400"
          required
        />
        <button
          type="submit"
          className="w-full bg-pink-400 hover:bg-pink-500 text-white font-bold p-3 rounded-xl"
        >
          ¡Registrar!
        </button>
      </form>
    </div>
  )
}

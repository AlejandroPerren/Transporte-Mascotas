'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FaPaw } from 'react-icons/fa'

export default function Login() {
  const router = useRouter()
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const fakeUser = {
      nombre: 'Cuidador/a de mascotas',
      email: form.email,
      token: 'token-mascota-fake'
    }
    localStorage.setItem('usuario', JSON.stringify(fakeUser))
    router.push('/')
  }

  return (
    <div className="flex h-screen items-center justify-center bg-pink-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md border-4 border-yellow-200"
      >
        <div className="flex justify-center mb-4 text-yellow-500 text-4xl">
          <FaPaw />
        </div>
        <h2 className="text-3xl font-bold text-center text-yellow-500 mb-6 font-[Comic Sans MS]">Iniciar sesión</h2>
        <input
          type="email"
          name="email"
          placeholder="Correo 🐱"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 mb-4 border rounded-xl border-yellow-300 placeholder:text-yellow-500"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña 🐾"
          value={form.password}
          onChange={handleChange}
          className="w-full p-3 mb-6 border rounded-xl border-yellow-300 placeholder:text-yellow-500"
          required
        />
        <button
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-bold p-3 rounded-xl"
        >
          ¡Entrar al mundo peludo!
        </button>
      </form>
    </div>
  )
}

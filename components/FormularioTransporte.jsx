'use client'
import { useState, useEffect } from 'react'
import { FaPaw, FaTrash } from 'react-icons/fa'

export default function FormularioTransporte() {
  const [usuario, setUsuario] = useState(null)
  const [form, setForm] = useState({
    nombreMascota: '',
    tipoMascota: '',
    tamanoMascota: '',
    pesoMascota: '',
    direccionOrigen: '',
    direccionDestino: '',
  })
  const [imagen, setImagen] = useState(null)
  const [precio, setPrecio] = useState(null)

  useEffect(() => {
    const user = localStorage.getItem('usuario')
    if (user) setUsuario(JSON.parse(user))
  }, [])

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleImagen = e => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagen(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const borrarImagen = () => {
    setImagen(null)
  }

  const calcularPrecio = () => {
    const base = 1000
    const factorTamaño = form.tamanoMascota === 'grande' ? 1.5 : form.tamanoMascota === 'mediano' ? 1.2 : 1
    const factorPeso = parseFloat(form.pesoMascota || 1) * 20
    const precioFinal = Math.round(base * factorTamaño + factorPeso)
    setPrecio(precioFinal)
  }

  return (
    <div className="bg-white shadow-xl rounded-3xl p-8 border-4 border-green-200">
      <h2 className="text-3xl font-bold text-green-700 flex items-center gap-2 mb-6">
        <FaPaw className="text-pink-400" /> Servicio de Transporte Pet
      </h2>

      {usuario && (
        <p className="text-green-800 mb-4">Solicitado por: <strong>{usuario.nombre}</strong></p>
      )}

      <div className="grid gap-4">
        <input
          name="nombreMascota"
          placeholder="Nombre de la mascota 🐶"
          value={form.nombreMascota}
          onChange={handleChange}
          className="border p-3 rounded-xl border-green-300"
        />
        <input
          name="tipoMascota"
          placeholder="Tipo (perro, gato...) 🐾"
          value={form.tipoMascota}
          onChange={handleChange}
          className="border p-3 rounded-xl border-green-300"
        />
        <select
          name="tamanoMascota"
          value={form.tamanoMascota}
          onChange={handleChange}
          className="border p-3 rounded-xl border-green-300"
        >
          <option value="">Tamaño</option>
          <option value="pequeno">Pequeño</option>
          <option value="mediano">Mediano</option>
          <option value="grande">Grande</option>
        </select>
        <input
          type="number"
          name="pesoMascota"
          placeholder="Peso aproximado en kg 🐕"
          value={form.pesoMascota}
          onChange={handleChange}
          className="border p-3 rounded-xl border-green-300"
        />
        <input
          name="direccionOrigen"
          placeholder="Dirección de recogida 🚗"
          value={form.direccionOrigen}
          onChange={handleChange}
          className="border p-3 rounded-xl border-green-300"
        />
        <input
          name="direccionDestino"
          placeholder="Dirección de destino 📍"
          value={form.direccionDestino}
          onChange={handleChange}
          className="border p-3 rounded-xl border-green-300"
        />
      </div>

      <div className="mt-6">
        <label className="block mb-2 text-green-700 font-semibold">Foto de tu mascota (opcional):</label>
        {!imagen ? (
          <input
            type="file"
            accept="image/*"
            onChange={handleImagen}
            className="mb-4"
          />
        ) : (
          <div className="relative">
            <img src={imagen} alt="preview" className="rounded-xl max-h-60 border border-green-300" />
            <button onClick={borrarImagen} className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 shadow-lg hover:bg-red-600">
              <FaTrash />
            </button>
          </div>
        )}
      </div>

      <button
        onClick={calcularPrecio}
        className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white font-bold p-3 rounded-xl"
      >
        Calcular precio estimado 💰
      </button>

      {precio !== null && (
        <div className="mt-4 text-green-800 text-xl font-semibold">
          Precio estimado: <span className="text-green-900">${precio}</span>
        </div>
      )}
    </div>
  )
}

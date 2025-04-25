"use client";
import { useState } from "react";
import { FaEnvelope, FaPaw } from "react-icons/fa";

import Link from 'next/link'

export default function ContactoPage() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simula envío
    console.log("Formulario enviado:", form);
    setEnviado(true);
    setForm({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-yellow-50 text-center">
      <nav className="w-full bg-green-700 text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <FaPaw className="text-pink-300" /> TransMasc
          </h1>
          <div className="space-x-6">
            <Link href="/" className="hover:underline">
              Inicio
            </Link>
            <Link href="/servicios" className="hover:underline">
              Servicios
            </Link>
            <Link href="/contacto" className="hover:underline">
              Contacto
            </Link>
          </div>
        </div>
      </nav>
      <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold text-green-700 mb-4 flex items-center gap-2">
          <FaEnvelope className="text-pink-400" /> Contacto
        </h1>
        <p className="mb-8 text-green-700 text-center max-w-md">
          ¿Tenés alguna consulta sobre nuestros servicios de cuidado o
          transporte para mascotas? ¡Escribinos! 🐶🐾
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-2xl p-6 w-full max-w-md space-y-4"
        >
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            placeholder="Tu nombre"
            required
            className="w-full px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Tu correo electrónico"
            required
            className="w-full px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <textarea
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
            placeholder="Escribí tu mensaje..."
            required
            className="w-full px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 resize-none h-32"
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Enviar mensaje
          </button>
        </form>

        {enviado && (
          <p className="mt-4 text-green-700 font-medium">
            🐾 ¡Gracias por tu mensaje! Te responderemos pronto.
          </p>
        )}
      </div>
    </div>
  );
}

"use client"
import React from "react";
import FormularioTransporte from "../../../components/FormularioTransporte";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaInstagram, FaTiktok, FaWhatsapp, FaPaw } from "react-icons/fa";

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-yellow-50 text-center">
      {/* Navegación */}
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
      <FormularioTransporte />
    </div>
  );
};

export default page;

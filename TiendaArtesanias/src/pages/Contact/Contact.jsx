"use client"

import { useState } from "react"
import { Phone, Mail, Instagram, Twitter, MapPin } from "lucide-react"
import { Link } from "react-router-dom"


export default function ArtesaniasContact() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    consulta: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-[#ffe8ba]">
      {/* Navigation */}
      <header className="border-b border-[#1d1b20]/10">
        <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
          <Link href="/" className="text-3xl font-bold text-[#000000]">Artesanias</Link>
          <nav className="flex items-center space-x-2 md:space-x-4">
            <Link href="/inicio" className="px-4 py-2 rounded-full bg-[#ffd787] text-[#000000] hover:bg-[#ffd787]/90">Inicio</Link>
            <Link href="/productos" className="px-4 py-2 rounded-full bg-[#ffd787] text-[#000000] hover:bg-[#ffd787]/90">Productos</Link>
            <Link href="/sobre-nosotros" className="px-4 py-2 rounded-full bg-[#ffd787] text-[#000000] hover:bg-[#ffd787]/90">Sobre nosotros</Link>
            <Link href="/contacto" className="px-4 py-2 rounded-full border border-[#000000] text-[#000000] hover:bg-[#ffd787]/10">Contacto</Link>
            <div className="relative ml-2">
              <input
                type="text"
                placeholder="Buscador"
                className="px-4 py-2 rounded-full bg-white border border-[#1d1b20]/10 w-full md:w-64"
              />
            </div>
          </nav>
        </div>
      </header>

      {/* Contact Info */}
      <section className="py-16 bg-[#ffe8ba]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-10 text-[#000000]">Contactanos</h1>
          <div className="flex flex-col items-center space-y-6 max-w-md mx-auto">
            <div className="flex items-center space-x-3">
              <Phone className="w-6 h-6 text-[#000000]" />
              <span className="text-xl text-[#000000]">+11 51220207</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-6 h-6 text-[#000000]" />
              <span className="text-xl text-[#000000]">artesanias@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Instagram className="w-6 h-6 text-[#000000]" />
              <span className="text-xl text-[#000000]">@artesanias_ok</span>
            </div>
            <div className="flex items-center space-x-3">
              <Twitter className="w-6 h-6 text-[#000000]" />
              <span className="text-xl text-[#000000]">@artesanias_ok</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-6 h-6 text-[#000000]" />
              <span className="text-xl text-[#000000]">A.v Roca y A.v Escalada</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-8 bg-[#ffe8ba]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg">
            <p className="text-[#000000] mb-6">Envianos un Mail con tu pregunta :)</p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="nombre"
                placeholder="Nombre*"
                required
                value={formData.nombre}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded bg-[#e6d8f9] text-[#000000] placeholder-[#000000]/70"
              />
              <input
                type="text"
                name="apellido"
                placeholder="Apellido*"
                required
                value={formData.apellido}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded bg-[#e6d8f9] text-[#000000] placeholder-[#000000]/70"
              />
              <input
                type="email"
                name="email"
                placeholder="Email*"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded bg-[#e6d8f9] text-[#000000] placeholder-[#000000]/70"
              />
              <textarea
                name="consulta"
                placeholder="Consulta/Pregunta*"
                required
                rows="6"
                value={formData.consulta}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded bg-[#e6d8f9] text-[#000000] placeholder-[#000000]/70"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#e6d8f9] text-[#000000] rounded hover:bg-[#e6d8f9]/90 flex items-center"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-[#ffe8ba] border-t border-[#1d1b20]/10">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center space-x-6">
            <Link href="#" className="flex items-center space-x-2">
              <Instagram className="w-6 h-6 text-[#000000]" />
              <span className="text-[#000000]">Instagram</span>
            </Link>
            <span className="text-[#000000]">-</span>
            <Link href="#" className="flex items-center space-x-2">
              <Mail className="w-6 h-6 text-[#000000]" />
              <span className="text-[#000000]">Mail</span>
            </Link>
            <span className="text-[#000000]">-</span>
            <Link href="#" className="flex items-center space-x-2">
              <Phone className="w-6 h-6 text-[#000000]" />
              <span className="text-[#000000]">Whatsapp</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

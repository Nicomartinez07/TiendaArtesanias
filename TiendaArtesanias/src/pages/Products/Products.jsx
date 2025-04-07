"use client"

import { Link } from "react-router-dom"
import { Instagram, Mail, Phone } from "lucide-react"

export default function Productos() {
  const productos = Array(4).fill({
    nombre: "Producto 1",
    precio: "1000$",
    descripcion:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.",
    imagen:
      "https://img.freepik.com/foto-gratis/pulsera-colorida-cuentas-sobre-superficie-madera_123827-21655.jpg",
  })

  const secciones = [
    { titulo: "Productos Más vistos", productos },
    { titulo: "Productos Más Vendidos", productos },
  ]

  return (
    <div className="min-h-screen bg-[#ffe8ba] text-[#000000] font-sans">
      {/* Header */}
      <header className="border-b border-[#1d1b20]/10">
        <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
          <Link href="/" className="text-3xl font-bold text-[#000000]">Artesanias</Link>
          <nav className="flex items-center space-x-2 md:space-x-4">
            <Link href="/inicio" className="px-4 py-2 rounded-full bg-[#ffd787] text-[#000000] hover:bg-[#ffd787]/90">Inicio</Link>
            <Link href="/productos" className="px-4 py-2 rounded-full bg-[#ffd787] font-bold text-[#000000]">Productos</Link>
            <Link href="/sobre-nosotros" className="px-4 py-2 rounded-full bg-[#ffd787] text-[#000000]">Sobre nosotros</Link>
            <Link href="/contacto" className="px-4 py-2 rounded-full bg-[#ffd787] text-[#000000]">Contacto</Link>
            <input
              type="text"
              placeholder="Buscador"
              className="px-4 py-2 rounded-full bg-white border border-[#1d1b20]/10 w-32 md:w-52"
            />
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="py-8 px-4 space-y-12">
        {secciones.map((section, idx) => (
          <section key={idx}>
            <h2 className="text-2xl font-bold mb-4">{section.titulo}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {section.productos.map((producto, index) => (
                <div key={index} className="bg-[#e9d2f4] p-4 rounded-lg">
                  <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    className="w-full h-40 object-cover rounded"
                  />
                  <h3 className="mt-4 font-bold text-lg">{producto.nombre}</h3>
                  <p className="font-bold text-md">{producto.precio}</p>
                  <p className="text-sm mt-1">{producto.descripcion}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* Footer */}
      <footer className="py-6 bg-[#ffe8ba] border-t border-[#1d1b20]/10 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center space-x-6">
            <Link href="#" className="flex items-center space-x-2">
              <Instagram className="w-5 h-5 text-[#000000]" />
              <span className="text-[#000000]">Instagram</span>
            </Link>
            <span className="text-[#000000]">-</span>
            <Link href="#" className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-[#000000]" />
              <span className="text-[#000000]">Mail</span>
            </Link>
            <span className="text-[#000000]">-</span>
            <Link href="#" className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-[#000000]" />
              <span className="text-[#000000]">Whatsapp</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

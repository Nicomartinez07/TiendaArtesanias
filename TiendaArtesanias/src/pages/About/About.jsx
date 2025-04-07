"use client"

import { Link } from "react-router-dom"

import { Instagram, Mail, Phone } from "lucide-react"

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[#ffe8ba] text-[#000000] font-sans">
      {/* Header */}
      <header className="border-b border-[#1d1b20]/10">
        <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
          <Link href="/" className="text-3xl font-bold text-[#000000]">Artesanias</Link>
          <nav className="flex items-center space-x-2 md:space-x-4">
            <Link href="/inicio" className="px-4 py-2 rounded-full bg-[#ffd787] text-[#000000] hover:bg-[#ffd787]/90">Inicio</Link>
            <Link href="/productos" className="px-4 py-2 rounded-full bg-[#ffd787] text-[#000000] hover:bg-[#ffd787]/90">Productos</Link>
            <Link href="/sobre-nosotros" className="px-4 py-2 rounded-full bg-[#ffd787] text-[#000000] font-bold">Sobre nosotros</Link>
            <Link href="/contacto" className="px-4 py-2 rounded-full bg-[#ffd787] text-[#000000] hover:bg-[#ffd787]/90">Contacto</Link>
            <input
              type="text"
              placeholder="Buscador"
              className="px-4 py-2 rounded-full bg-white border border-[#1d1b20]/10 w-32 md:w-52"
            />
          </nav>
        </div>
      </header>

      {/* Main Section */}
      <main className="py-12 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Sobre Nosotros</h1>
        <p className="text-[#000000] underline mb-12 max-w-3xl mx-auto">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non...
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {["Calidad", "Manual", "Natural"].map((title, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/The_Starry_Night.jpg/640px-The_Starry_Night.jpg"
                alt="Artesanía"
                className="w-full h-60 object-cover rounded"
              />
              <h2 className="text-xl font-bold mt-4">{title}</h2>
              <p className="mt-2 text-sm text-[#000000]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam...
              </p>
            </div>
          ))}
        </div>
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

import React from "react";
import { Search, Instagram, Mail, Phone } from "lucide-react";

const Home = () => {
  const products = Array(7).fill({
    name: "Producto 1",
    price: "1000$",
    image:
      "",
  });

  const heroImage =
    ""; // Cambia esto por la imagen de la sección central

  return (
    <div className="min-h-screen font-sans bg-[#ffe8ba] text-black">
      {/* Header */}
      <header className="flex flex-col items-center px-6 py-4 border-b border-black/10 md:flex-row md:justify-between">
        <h1 className="text-2xl font-semibold">Artesanias</h1>
        <nav className="flex gap-3 mt-2 md:mt-0">
          {["Inicio", "Productos", "Sobre nosotros", "Contacto"].map((item) => (
            <a
              key={item}
              href="#"
              className="bg-[#ffd787] px-4 py-2 text-sm rounded-full hover:scale-105 transition-transform"
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="relative mt-2 md:mt-0">
          <input
            type="text"
            placeholder="Buscador"
            className="px-4 py-2 rounded-full w-56 bg-white text-sm"
          />
          <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-500" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {[0, 1, 2].map((_, i) => (
          <img
            key={i}
            src={heroImage}
            alt={`Hero ${i}`}
            className={`w-full h-auto rounded-md object-cover ${
              i === 1 ? "border-4 border-blue-500" : ""
            }`}
          />
        ))}
      </section>

      {/* Products */}
      <section className="px-6 py-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-[#e6d8f9] rounded-xl p-2 flex flex-col items-center text-center shadow-md"
            >
              <img
                src={product.image}
                alt={product.name}
                className="rounded-md w-full object-cover"
              />
              <h3 className="text-sm mt-2 font-semibold">{product.name}</h3>
              <p className="font-bold text-sm">{product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-10 py-6 border-t border-black/10 flex justify-center gap-6 text-sm">
        <a href="#" className="flex items-center gap-1">
          <Instagram className="w-4 h-4" />
          Instagram
        </a>
        <span>-</span>
        <a href="#" className="flex items-center gap-1">
          <Mail className="w-4 h-4" />
          Mail
        </a>
        <span>-</span>
        <a href="#" className="flex items-center gap-1">
          <Phone className="w-4 h-4" />
          Whatsapp
        </a>
      </footer>
    </div>
  );
};

export default Home;

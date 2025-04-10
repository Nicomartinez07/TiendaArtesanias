import React, { useState } from "react"
import { Search, Instagram, Mail, Phone } from "lucide-react"
import { Link } from "react-router-dom"
import "./styles/home.css"
import producto1  from "../assets/images/producto1.webp"
import nocheestrellada  from "../assets/images/nocheestrellada.webp"


export default function Home() {
  const heroImages = [
    nocheestrellada,
    nocheestrellada,
    nocheestrellada, // Podés poner más imágenes si querés
  ]
  
  const [current, setCurrent] = useState(0)
  
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % heroImages.length)
  }
  
  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? heroImages.length - 1 : prev - 1
    )
  }

  return (
    <div className="home">
      {/* Header */}
      <header className="header">
        <h1 className="logo">Artesanias</h1>

        <nav className="nav">
          <Link to="/" className="nav-link active indie">Inicio</Link>
          <Link to="/products" className="nav-link indie">Productos</Link>
          <Link to="/about" className="nav-link indie">Sobre nosotros</Link>
          <Link to="/contact" className="nav-link indie">Contacto</Link>
        </nav>

        <div className="search-box">
          <input type="text" placeholder="Buscador" className="search-input" />
          <Search className="search-icon" />
        </div>
      </header>

      {/* Hero Section */}
      {/* Hero Carrusel avanzado */}
      <section className="hero-carousel-3d">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {heroImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Imagen ${index + 1}`}
              className="carousel-img"
            />
          ))}
        </div>

        <button className="carousel-btn left" onClick={prevSlide}>⬅</button>
        <button className="carousel-btn right" onClick={nextSlide}>➡</button>

        <div className="carousel-dots">
          {heroImages.map((_, index) => (
            <span
              key={index}
              className={`dot ${current === index ? "active" : ""}`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </section>




      {/* Products Section */}
      <section className="products">
        {Array.from({ length: 7 }).map((_, index) => (
          <div key={index} className="product-card">
            <div className="product-img-wrapper">
              <img
                src={producto1}
                alt={``}
                className="product-img"
              />
            </div>
            <h3 className="product-title indie">Producto 1</h3>
            <p className="product-price">1000$</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="footer">
        <Link to="#" className="footer-link">
          <Instagram className="footer-icon" />
          <span>Instagram</span>
        </Link>
        <span className="footer-separator">-</span>
        <Link to="#" className="footer-link">
          <Mail className="footer-icon" />
          <span>Mail</span>
        </Link>
        <span className="footer-separator">-</span>
        <Link to="#" className="footer-link">
          <Phone className="footer-icon" />
          <span>Whatsapp</span>
        </Link>
      </footer>
    </div>
  )
}

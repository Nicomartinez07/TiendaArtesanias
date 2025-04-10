import React, { useState } from "react"
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
        {Array.from({ length: 6 }).map((_, index) => (
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
    </div>
  )
}

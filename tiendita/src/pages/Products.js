import React from "react"
import "./styles/products.css"
import { Link } from "react-router-dom"
import { Instagram, Mail, Phone } from "lucide-react"
import producto1  from "../assets/images/producto1.webp"
import producto2  from "../assets/images/producto2.webp"

export default function Products() {
  return (
    <div className="products-container">
      {/* Header */}
      <header className="products-header">
        <div className="header-inner">
          <h1 className="logo">Artesanias</h1>
          <nav className="nav-links">
            <Link to="/" className="indie nav-link">Inicio</Link>
            <Link to="/products" className="indie nav-link active">Productos</Link>
            <Link to="/about" className="indie nav-link">Sobre Nosotros</Link>
            <Link to="/contact" className="indie nav-link">Contacto</Link>
          </nav>
          <div className="search-bar">
            <input type="search" placeholder="Buscador" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Most Viewed Products */}
        <section className="section">
          <h2 className="indie">Productos Más Vistos</h2>
          <div className="product-grid">
            {[1, 2, 3, 4].map((item) => (
              <div key={`viewed-${item}`} className="product-card">
                <div className="product-image">
                  <img
                    src={producto2}
                    alt=""
                    width={250}
                    height={250}
                  />
                </div>
                <h3 className="indie">Producto 1</h3>
                <p className="price">1000$</p>
                <p className="description indie">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                  totam rem
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Most Sold Products */}
        <section className="section">
          <h2 className="indie">Productos Más Vendidos</h2>
          <div className="product-grid">
            {[1, 2, 3, 4].map((item) => (
              <div key={`sold-${item}`} className="product-card">
                <div className="product-image">
                  <img
                    src={producto1}
                    alt=""
                    width={250}
                    height={250}
                  />
                </div>
                <h3 className="indie">Producto 1</h3>
                <p className="price">1000$</p>
                <p className="description indie">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                  totam rem
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <Link href="#"><Instagram size={20} /><span>Instagram</span></Link>
          <span>-</span>
          <Link href="#"><Mail size={20} /><span>Mail</span></Link>
          <span>-</span>
          <Link href="#"><Phone size={20} /><span>Whatsapp</span></Link>
        </div>
      </footer>
    </div>
  )
}

import "./styles/about.css"
import { Instagram, Mail, Phone } from "lucide-react"
import { Link } from "react-router-dom"
import nocheestrellada  from "../assets/images/nocheestrellada.webp"

export default function About() {
  return (
    <div className="about-container">
      {/* Navigation */}
      <header className="about-header">
        <div className="about-nav-wrapper">
          <Link href="/" className="about-logo">Artesanías</Link>
          <nav className="about-nav">
            <Link to="/" className="about-nav-link indie">Inicio</Link>
            <Link to="/products" className="about-nav-link indie">Productos</Link>
            <Link to="/about" className="about-nav-link active indie">Sobre Nosotros</Link>
            <Link to="/contact" className="about-nav-link indie">Contacto</Link>
            <input type="text" placeholder="Buscador" className="about-search" />
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="about-main">
        <section className="about-section">
          <h1 className="about-title indie">Sobre Nosotros</h1>
          <p className="about-description indie">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non.
          </p>
        </section>

        <section className="about-features">
          {["Calidad", "Manual", "Natural"].map((titulo, index) => (
            <div key={index} className="about-feature-card">
              <img
                src={nocheestrellada}
                alt={titulo}
                width={400}
                height={300}
                className="about-feature-img"
              />
              <h2 className="about-feature-title indie">{titulo}</h2>
              <p className="about-feature-description indie">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
              </p>
            </div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="about-footer">
        <div className="about-footer-links">
          <Link href="https://instagram.com" className="about-footer-link">
            <Instagram size={24} />
            <span>Instagram</span>
          </Link>
          <span>-</span>
          <Link href="mailto:info@artesanias.com" className="about-footer-link">
            <Mail size={24} />
            <span>Mail</span>
          </Link>
          <span>-</span>
          <Link href="tel:+1234567890" className="about-footer-link">
            <Phone size={24} />
            <span>Whatsapp</span>
          </Link>
        </div>
      </footer>
    </div>
  )
}

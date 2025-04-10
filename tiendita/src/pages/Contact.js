import { Phone, Mail, Instagram, Twitter, MapPin } from "lucide-react";
import { Link } from "react-router-dom"
import "./styles/contact.css"

export default function Contact() {
  return (
    <div className="contact-container">
      {/* Navigation */}
      <header className="contact-header">
        <div className="contact-header-inner">
          <Link href="/" className="contact-logo">
            Artesanias
          </Link>
          <nav className="contact-nav">
            <Link to="/" className="nav-link indie">Inicio</Link>
            <Link to="/products" className="nav-link indie">Productos</Link>
            <Link to="/about" className="nav-link indie">Sobre nosotros</Link>
            <Link to="/contact" className="nav-link active indie">Contacto</Link>
            <div className="search-container">
              <input type="text" placeholder="Buscador" className="search-input" />
            </div>
          </nav>
        </div>
      </header>

      {/* Contact Info */}
      <section className="contact-info-section">
        <div className="contact-info-inner">
          <h1 className="contact-title ">Contactanos</h1>
          <div className="contact-info">
            <div className="info-item"><Phone /> <span>+11 01234567</span></div>
            <div className="info-item"><Mail /> <span>artesanias@gmail.com</span></div>
            <div className="info-item"><Instagram /> <span>@artesanias_ok</span></div>
            <div className="info-item"><Twitter /> <span>@artesanias_ok</span></div>
            <div className="info-item"><MapPin /> <span>A.v Roca y A.v Escalada</span></div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <div className="form-wrapper">
          <p>Envianos un Mail con tu pregunta :)</p>
          <form className="contact-form">
            <input type="text" placeholder="Nombre*" required />
            <input type="text" placeholder="Apellido*" required />
            <input type="email" placeholder="Email*" required />
            <textarea placeholder="Consulta/Pregunta*" required rows="6"></textarea>
            <button type="submit" className="submit-btn">Enviar</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="contact-footer">
        <div className="footer-links">
          <Link href="#" className="footer-link"><Instagram /> <span>Instagram</span></Link>
          <span>-</span>
          <Link href="#" className="footer-link"><Mail /> <span>Mail</span></Link>
          <span>-</span>
          <Link href="#" className="footer-link"><Phone /> <span>Whatsapp</span></Link>
        </div>
      </footer>
    </div>
  );
}

import { Phone, Mail, Instagram, Twitter, MapPin } from "lucide-react";
import "./styles/contact.css"

export default function Contact() {
  return (
    <div className="contact-container">
      {/* Contact Info */}
      <section className="contact-info-section">
        <div className="contact-info-inner">
          <h1 className="contact-title ">Contactanos</h1>
          <div className="contact-info">
            <div className="info-item"><Phone /> <span>+11 01234567</span></div>
            <div className="info-item"><Mail /> <span>artesanias@gmail.com</span></div>
            <div className="info-item"><Instagram /> <span>@artesanias_ok</span></div>
            <div className="info-item"><Twitter /> <span>@artesanias_ok</span></div>
            <div className="info-item"><MapPin /> <span>Av.Roca y Av.Escalada</span></div>
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
    </div>
  );
}

import React from "react";
import "./footer.css";
import { Phone, Mail, Instagram, Twitter, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer className="contact-footer">
      <div className="footer-links">
        <a href="https://www.instagram.com/" className="footer-link"><Instagram />Instagram</a>
        <span>-</span>
        <a href="mailto:artesanias@gmail.com" className="footer-link"><Mail />Mail</a>
        <span>-</span>
        <a href="https://web.whatsapp.com/" className="footer-link"><Phone /> WhatsApp</a>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} Artesanías por Nico</p>
    </footer>
  );
}

export default Footer;

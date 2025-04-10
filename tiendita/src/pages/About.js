import "./styles/about.css"
import nocheestrellada  from "../assets/images/nocheestrellada.webp"

export default function About() {
  return (
    <div className="about-container">
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
    </div>
  )
}

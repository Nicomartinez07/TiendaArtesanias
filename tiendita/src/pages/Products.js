import React from "react"
import "./styles/products.css"
import producto1  from "../assets/images/producto1.webp"
import producto2  from "../assets/images/producto2.webp"

export default function Products() {
  return (
    <div className="products-container">
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
    </div>
  )
}

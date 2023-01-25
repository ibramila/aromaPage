import React from 'react'
import "./style.scss"
function BestSellers() {

  return (
    <section className='sellers_section'>
      <div className="container">
        <div className="best_sellers">
          <div className="intro">
            <span>Popular Item in the market</span>
            <h1>Best Sellers</h1>
            
            <div style={{ backgroundColor: "#394AEA", width: "20%", height: "1px", border: "1px solid blue" }}></div>

          </div>
          <ul className='cards'>
            
            <li className='card'>
              <img src="https://preview.colorlib.com/theme/aroma/img/product/product1.png" alt="product1" />
              <p>Accessories</p>
              <h6>Room Flash Light</h6>
              <h3>$150.00</h3>
            </li>
            <li className='card'>
              <img src="https://preview.colorlib.com/theme/aroma/img/product/product2.png" alt="product2" />
              <p>Beauty</p>
              <h6>Quartz Belt Watch</h6>
              <h3>$150.00</h3>
            </li>
            <li className='card'>
              <img src="https://preview.colorlib.com/theme/aroma/img/product/product3.png" alt="product3" />
              <p>Decor</p>
              <h6>Women Freshwash</h6>
              <h3>$150.00</h3>
            </li>
            <li className='card'>
              <img src="https://preview.colorlib.com/theme/aroma/img/product/product4.png" alt="product4" />
              <p>Decor</p>
              <h6>Room Flash Light</h6>
              <h3>$150.00</h3>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default BestSellers
import React from 'react'
import "./style.scss"
function HeroSection() {
  return (
    <section className='hero_section' >
      <div className="container">
        <div className="hero_section_wrapper">
          <img src="https://preview.colorlib.com/theme/aroma/img/home/hero-banner.png" alt="heroImage" />
          <div className='hero_section_wrapper_info'>
            <h2>Shop is fun</h2>
            <h1>BROWSE OUR PREMIUM PRODUCT</h1>
            <p>Us which over of signs divide dominion deep fill bring they're meat beho upon own earth without morning over third. Their male dry. They are great appear whose land fly grass.
              Browse Now</p>
            <button>Browse Now</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
import React from 'react'
import "./style.scss"
import img from "../../assets/images/versace.webp"
function HeroSection() {
  return (
    <section >
      <div className="container">

        <div className="hero_section">
          <img src={img} alt="product" />
          <div className='hero_section'>
            <div className='hero_section_right_info'>
              <h2 style={{ color: "black" }}>Shop is fun</h2>
              <h1 style={{ color: "black", fontWeight: "800" }}>BROWSE OUR PREMIUM PRODUCT</h1>
              <p style={{ color: "black" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, totam? Ad, maiores quidem omnis molestias quasi tempora sed veniam sunt odit ut atque natus debitis illo magni repellat consequuntur itaque exercitationem quis enim? Nostrum facere libero, dolore dolorum voluptas tempore?</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
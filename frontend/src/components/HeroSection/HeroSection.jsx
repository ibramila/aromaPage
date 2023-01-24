import React from 'react'
import "./style.scss"
function HeroSection() {
  return (
    <section >
        <div className="hero_section">
          <div className='hero_section_left'>
            {/* <div className='hero_section_left_theme'>
            </div> */}
          </div>
          <div className='hero_section_right'>
            <div className='hero_section_right_info'>
              <h2 style={{ color: "black" }}>Shop is fun</h2>
              <h1 style={{ color: "black", fontWeight: "800" }}>BROWSE OUR PREMIUM PRODUCT</h1>
              <p style={{ color: "black" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, totam? Ad, maiores quidem omnis molestias quasi tempora sed veniam sunt odit ut atque natus debitis illo magni repellat consequuntur itaque exercitationem quis enim? Nostrum facere libero, dolore dolorum voluptas tempore?</p>
            </div>
          </div>
      </div>
    </section>
  )
}

export default HeroSection
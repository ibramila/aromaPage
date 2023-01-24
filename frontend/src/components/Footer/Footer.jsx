import React from 'react'
import { Link } from 'react-router-dom'
import "./style.scss"
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          Copyright ©2023 All rights reserved | This template is made with  by <Link style={{paddingLeft:"10px"}} to="/">Colorlib</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
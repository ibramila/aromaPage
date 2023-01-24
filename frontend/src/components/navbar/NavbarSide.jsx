import React from 'react'
import "./style.scss"
import { NavLink } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai"

function NavbarSide() {
  const activeNavbar = {
    color: "#394aea"
  }
  return (
    <>
      <nav>
        <div className='container'>
          <div className='nav'>
            <h3>Aroma</h3>
            <ul>
              <li>
                <NavLink style={({ isActive }) => (isActive ? activeNavbar : null)} to="/"> Home</NavLink>
              </li>
              <li>
                <NavLink style={({ isActive }) => (isActive ? activeNavbar : null)} to="/shop"> Shop</NavLink>
              </li>
              <li>
                <NavLink style={({ isActive }) => (isActive ? activeNavbar : null)} to="/blog"> Blog</NavLink>
              </li>
              <li>
                <NavLink style={({ isActive }) => (isActive ? activeNavbar : null)} to="/pages"> Pages</NavLink>
              </li>
              <li>
                <NavLink style={({ isActive }) => (isActive ? activeNavbar : null)} to="/contact"> Contact</NavLink>
              </li>
              <li>
                <NavLink style={({ isActive }) => (isActive ? activeNavbar : null)} to="/add"> Add</NavLink>
              </li>
            </ul>
            <div className="store">
              <AiOutlineSearch style={{ fontSize: "25px" }} />
              <NavLink style={({ isActive }) => (isActive ? activeNavbar : null)} to="/wishlist">
                <AiOutlineShoppingCart style={{ fontSize: "25px" }} />
              </NavLink>
              <button>Buy now</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarSide
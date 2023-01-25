import React, { useEffect, useState } from 'react'
import "./style.scss"
import axios from "axios";

function TrendingProducts() {

  const URL = axios.create({
    baseURL: "http://localhost:3050"
  });
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    URL.get('/products').then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <section className='trending_section'>
      <div className="container">
        <div className="trending_section_wrapper">
          <div className="intro">
            <span>Popular Item in the market</span>
            <h1>Best Sellers</h1>
            <div style={{ backgroundColor: "#394AEA", width: "20%", height: "1px", border: "1px solid blue" }}></div>
          </div>
          <ul className='cards'>
            {posts.map((post) => {
              return (
                <li className='card' key={post.id}>
                  <img src={post.image} alt="product1" />
                  <p>{post.category}</p>
                  <h6>{post.name}</h6>
                  <h3>${post.price}</h3>
                </li>
              );
            })}
          </ul>
        </div>
      </div >
    </section >
  )
}

export default TrendingProducts
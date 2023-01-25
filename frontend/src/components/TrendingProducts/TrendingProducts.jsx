import React, { useEffect, useState } from 'react'
import "./style.scss"
import axios from "axios";

function TrendingProducts() {

  const URL = axios.create({
    baseURL: "http://localhost:3050"
  });

  const [posts, setPosts] = useState([]);
  const [sorted, setSorted] = useState({
    sorted: "value", reversed: false
  })
  const [value, setValue] = useState("")

  const sortData = () => {
    setSorted({ sorted: "value", reversed: !sorted.reversed })
    const dataCopy = [...posts]
    dataCopy.sort((a, b) => {
      if (sorted.reversed) {
        return a.value - b.value
      }
      return b.value - a.value
    })
    setPosts(dataCopy)
  }
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  const handleDelete = async (id) => {
    await axios.delete(`http://www.localhost:3050/products/${id}`);
    console.log("data is deleted")
    console.log(id)
  }

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
            <h1>Trending Products</h1>
            <div style={{ backgroundColor: "blue", width: "20%", height: "1px", border: "1px solid blue" }}></div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", flexDirection: "row" }}>
              <div>
                <h5>Sort..</h5>
                <button onClick={sortData} style={{ padding: "5px 10px", border: "none", backgroundColor: "blue", margin: "0 0 20px 0" }}>Sort by Price</button>
              </div>
              <div>
                <h5>Filter...</h5>
                <input onChange={handleChange} type="text" />
              </div>

            </div>
          </div>
          <ul className='cards'>
            {
              posts?.map(({ _id, category, image, name, price }) => (
                <li className='card' key={_id}>
                  <img src={image} alt="product1" />
                  <p>{category}</p>
                  <h6>{name}</h6>
                  <h3>${price}</h3>
                  <button className='delete-btn' onClick={() => handleDelete(_id)}>DELETE</button>
                </li>
              ))
            }
            {posts
              .filter(product => {
                return value.trim().toLowerCase() === "" ? product : product.name.toLowerCase().includes(value.toLowerCase())
              })
              .map((post) => {
                return (
                  <li className='card' key={post.id}>
                    <img src={post.image} alt="product1" />
                    <p>{post.category}</p>
                    <h6>{post.name}</h6>
                    <h3>${post.price}</h3>
                    <button onClick={(_id) => handleDelete(_id)}>delete</button>
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
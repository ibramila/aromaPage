import React from 'react'
import "./style.scss"
import { Link } from "react-router-dom"
function LatestNews() {
  return (
    <section>
      <div className="contianer">
        <div className='latest-wrapper'>
          <div className="container">
            <div className="row">
              <h6>Popular item in the market</h6>
              <h2>Latest News</h2>
              <div className="col-4 card-wrapper ">
                <div class="card" style={{ width: "18rem" }}>
                  <img src="" class="card-img-top" alt="" />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link href="#" class="btn btn-primary">Read More</Link>
                  </div>
                </div>
              </div>
              <div className="col-4 card-wrapper">
                <div class="card" style={{ width: "18rem" }}>
                  <img src="" class="card-img-top" alt="" />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link href="#" class="btn btn-primary">Read More</Link>
                  </div>
                </div>
              </div>
              <div className="col-4 card-wrapper">
                <div class="card" style={{ width: "18rem" }}>
                  <img src="" alt="" />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link href="#" class="btn btn-primary">read More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LatestNews
import React from 'react'
import "./style.scss"

function LatestNews() {
  return (
    <section className='latest_news'>
      <div className="container">
        <div className='news_wrapper'>
          <div className="news_wrapper_intro">
            <span>Popular item in the market</span>
            <h1>Latest News</h1>
            <div style={{ backgroundColor: "#394AEA", width: "20%", height: "1px", border: "1px solid blue" }}></div>
          </div>
          <ul>
            <li>
              <img src="https://preview.colorlib.com/theme/aroma/img/blog/blog1.png" alt="blog1" />
              <div class="comments">
                <span>By Admin</span>
                <span>2 comments</span>
              </div>
              <h5>The Richland Center Shooping News and weekly shooper</h5>
              <p class="card-text">Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</p>
              <button>Read More -{'>'} </button>
            </li>
            <li>
              <img src="https://preview.colorlib.com/theme/aroma/img/blog/blog2.png" alt="blog2" />
              <div class="comments">
                <span>By Admin</span>
                <span>2 comments</span>
              </div>
              <h5>The Shopping News also offers top-quality printing services</h5>
              <p class="card-text">Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</p>
              <button>Read More -{'>'} </button>
            </li>
            <li>
              <img src="https://preview.colorlib.com/theme/aroma/img/blog/blog3.png" alt="blog3" />
              <div class="comments">
                <span>By Admin</span>
                <span>2 comments</span>
              </div>
              <h5>Professional design staff and efficient equipment you’ll find we offer</h5>
              <p class="card-text">Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</p>
              <button>Read More -{'>'} </button>
            </li>
          </ul>
          {/* <div className="col-4 card-wrapper ">
            <div class="card" style={{ width: "18rem" }}>
              
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
          </div>*/}
        </div>
      </div>
    </section >
  )
}

export default LatestNews
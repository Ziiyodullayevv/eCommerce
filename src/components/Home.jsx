import React from 'react';
import './Home.css';
export default function Home() {
  return (
    <>
      <div className='home-1'>
        <div className='home-1-parent'>
          <div className='card'>
            <h3>New Arrival</h3>
            <h1>
              Discover Our <br />
              New Collection
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              <br />
              tellus, luctus nec ullamcorper mattis.
            </p>
            <button>BUY NOW</button>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='home-2'>
          <div className='titl'>
            <h2>Browse The Range</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className='imglar'>
            <div className='imgg'>
              <img src='./img1.svg' alt='' />
              <h3>Dining</h3>
            </div>

            <div className='imgg'>
              <img src='./img2.svg' alt='' />
              <h3>Living</h3>
            </div>

            <div className='imgg'>
              <img src='./img3.svg' alt='' />
              <h3>Bedroom</h3>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='home-3'>
          <h2>Our Products</h2>
          <div className='cardlar-parent'>
            <div className='cardd'>
              <img src='./img4.svg' alt='' />
              <div className='textt'>
                <h3>Syltherine</h3>
                <p>Stylish cafe chair</p>
                <h4>Rp 2.500.000</h4>
              </div>
            </div>
            <div className='cardd'>
              <img src='./img4.svg' alt='' />
              <div className='textt'>
                <h3>Syltherine</h3>
                <p>Stylish cafe chair</p>
                <h4>Rp 2.500.000</h4>
              </div>
            </div>
            <div className='cardd'>
              <img src='./img4.svg' alt='' />
              <div className='textt'>
                <h3>Syltherine</h3>
                <p>Stylish cafe chair</p>
                <h4>Rp 2.500.000</h4>
              </div>
            </div>
            <div className='cardd'>
              <img src='./img4.svg' alt='' />
              <div className='textt'>
                <h3>Syltherine</h3>
                <p>Stylish cafe chair</p>
                <h4>Rp 2.500.000</h4>
              </div>
            </div>
          </div>

          <div className='cardlar-parent'>
            <div className='cardd'>
              <img src='./img4.svg' alt='' />
              <div className='textt'>
                <h3>Syltherine</h3>
                <p>Stylish cafe chair</p>
                <h4>Rp 2.500.000</h4>
              </div>
            </div>
            <div className='cardd'>
              <img src='./img4.svg' alt='' />
              <div className='textt'>
                <h3>Syltherine</h3>
                <p>Stylish cafe chair</p>
                <h4>Rp 2.500.000</h4>
              </div>
            </div>
            <div className='cardd'>
              <img src='./img4.svg' alt='' />
              <div className='textt'>
                <h3>Syltherine</h3>
                <p>Stylish cafe chair</p>
                <h4>Rp 2.500.000</h4>
              </div>
            </div>
            <div className='cardd'>
              <img src='./img4.svg' alt='' />
              <div className='textt'>
                <h3>Syltherine</h3>
                <p>Stylish cafe chair</p>
                <h4>Rp 2.500.000</h4>
              </div>
            </div>
          </div>
          <div className='btnpr'>
            <button>Show more</button>
          </div>
        </div>
      </div>

      <div className='home-4'>
        <div className='parentss'>
          <div className='leftt'>
            <h2>
              50+ Beautiful rooms <br /> inspiration
            </h2>
            <p>
              Our designer already made a lot of beautiful <br /> prototipe of
              rooms that inspire you
            </p>
            <button>Explore More</button>
          </div>
          <div className='rightt'>
            <img src='./img5.svg' alt='' />
          </div>
        </div>
      </div>

      <div className='home-5'>
        <p>Share your setup with</p>
        <h2>#FuniroFurniture</h2>
        <img src='./Share.svg' alt='' />
      </div>
    </>
  );
}

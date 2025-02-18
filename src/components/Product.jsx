import React from 'react';
import './Product.css';

export default function ProductPage() {
  return (
    <div className='wrapper'>
      <main>
        <div className='header'>
          <h1>Product</h1>
        </div>
        <section className='hero'>
          <div className='container'>
            <div className='hero-parent'>
              <div className='hero-left'>
                <img src='/img.svg' alt='img' />
              </div>
              <div className='hero-right'>
                <h2>Asgaard sofa</h2>
                <h3>Rs. 250,000.00</h3>
                <p>
                  Setting the bar as one of the loudest speakers in its class,
                  the <br />
                  Kilburn is a compact, stout-hearted hero with a well-balanced{' '}
                  <br />
                  audio which boasts a clear midrange and extended highs for a{' '}
                  <br /> sound.
                </p>
                <div>
                  <button>Add To Cart</button>
                  <button>+ Compare</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='rew'>
          <div className='container'>
            <div className='rew-parent'>
              <div className='top'>
                <h2>Description</h2>
                <div className='p'>
                  <p>
                    Embodying the raw, wayward spirit of rock ‘n’ roll, the
                    Kilburn portable active stereo speaker takes the
                    unmistakable look and <br />
                    sound of Marshall, unplugs the chords, and takes the show on
                    the road.
                  </p>
                  <p>
                    Weighing in under 7 pounds, the Kilburn is a lightweight
                    piece of vintage styled engineering. Setting the bar as one
                    of the loudest <br />
                    speakers in its class, the Kilburn is a compact,
                    stout-hearted hero with a well-balanced audio which boasts a
                    clear midrange <br />
                    and extended highs for a sound that is both articulate and
                    pronounced. The analogue knobs allow you to fine tune the
                    controls <br />
                    to your personal preferences while the guitar-influenced
                    leather strap enables easy and stylish travel.
                  </p>
                </div>
                <div className='img'>
                  <img src='/img1.png' alt='' />
                  <img src='/img1.png' alt='' />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='card'>
          <div className='container'>
            <h2 className='r'>Related Products</h2>
            <div className='card'>
              <div className='images'>
                <img src='/card.svg' alt='' />
                <img src='/card.svg' alt='' />
                <img src='/card.svg' alt='' />
                <img src='/card.svg' alt='' />
              </div>
              <button>Show More</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

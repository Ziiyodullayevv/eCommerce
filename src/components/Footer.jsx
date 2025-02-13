import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className='container'>
        <div className='footer-parent'>
          <div className='footer-element'>
            <img src='./footer.svg' alt='' />
            <p>
              400 University Drive Suite 200 Coral <br /> Gables, <br /> FL
              33134 USA
            </p>
          </div>

          <div className='footer-element'>
            <h3>Links</h3>
            <Link to={'/'}>Home</Link>
            <Link to={'/shop'}>Shop</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/contact'}>Contact</Link>
          </div>

          <div className='footer-element'>
            <h3>Help</h3>
            <Link to={'/'}>Payment Options</Link>
            <Link to={'/'}>Returns</Link>
            <Link to={'/'}>Privacy Policies</Link>
          </div>

          <div className='footer-element'>
            <h3>Newsletter</h3>

            <div className='input'>
              <input type='text' placeholder='Enter Your Email Address' />
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>

        <div className='footer-end'>
          <p>2023 furino. All rights reverved</p>
        </div>
      </div>
    </footer>
  );
}

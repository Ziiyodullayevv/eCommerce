import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className='main'>
        <div className='not-found'>
          <h4>
            <span>404</span> Not Found
          </h4>
        </div>
      </main>

      <Footer />
    </>
  );
}

import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div className='container'>
        <div className='header-parent'>
          <div className='header-left'>
            <img src='/logo.svg' alt='' />
          </div>
          <div className='header-center'>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/shop'}>Shop</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'/contact'}>Contact</NavLink>
          </div>
          <div className='header-right'>
            <img src='/heart.svg' alt='' />
          </div>
        </div>
      </div>
    </header>
  );
}

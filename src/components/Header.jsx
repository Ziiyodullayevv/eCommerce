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
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              to={'/'}
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              to={'/shop'}
            >
              Shop
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              to={'/about'}
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              to={'/contact'}
            >
              Contact
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              to={'/product'}
            >
              Product
            </NavLink>
          </div>
          <div className='header-right'>
            <img src='/heart.svg' alt='' />
          </div>
        </div>
      </div>
    </header>
  );
}

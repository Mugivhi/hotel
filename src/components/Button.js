import React from 'react';
import './button.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <Link to='Loginpage'>
      <button className='btn'>Login</button>
    </Link>
  );
}
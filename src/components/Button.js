import React from 'react';
import './button.css';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';

export function Button() {
  return (
    <Link to='Loginpage'>
      <button className='btn'>Login</button>
    </Link>
    // <div>
    //     <Button>Login</Button>
    // </div>
  );
}
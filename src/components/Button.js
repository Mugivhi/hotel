import React, {useState}from 'react';
import './button.css';
import { Link } from 'react-router-dom';
import Authentication from './Authentication';
// import styled from 'styled-components';

export function Button() {
  const [buttonlogPopup, setButtonlog]=useState(false);
  return  (
   <>
      <button className='btn' onClick={()=>setButtonlog(true)} >Login</button>
    {/* <Authentication trigger={buttonlogPopup}>
    </Authentication> */}
    </>
  )
}
import React,{useState} from 'react';
import './paymentpop.css';
import { Link } from 'react-router-dom';
function Paymentpopup(props){
  return(props.trigger) ? (
    <div className='out-pay'>
        <div className='inner-pop'>
            <div className='succ'><h2>Success!</h2></div>
            <div className='para'>
                <p>Payment successful</p>
            </div>
        </div>
    </div>
  ):"";
}

export default Paymentpopup
import React, {useState} from 'react';
import './landingpage.css';
import './review.css';


function Review(props){
    
    return(props.trigger) ? (
        <div className='main-review'>
            <div className='popup-inner'>
                <button className='close-btn' onClick={() => props.setTrigger(false)}>close</button>
                {props.children}
            </div>
        </div>
    ):"";
}
export default Review;

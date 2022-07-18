import React, {useState} from 'react';
import './landingpage.css';
import './review.css';
import pic7 from '../assets/room1.jpg';
import Payment from './Payment';

function Review(props){
    const [buttonPopup, setButtonPopup]=useState(false);
    return(props.trigger) ? (
        <div className='main-review'>
            <div className='popup-inner'>
                <button className='close-btn' onClick={() => props.setTrigger(false)}>close</button>
                {props.children}
            <div className='room-rev'>
                <img src={pic7} height={300} width={600}></img>
            </div>
            <div className='more-info'>
            <div className='room-services'>
           <p>breakefast  in bed, by
            8pm in the morning , 
            lunch by 1 pm o'clock
            and dinner  by 7pm  with
            massage anytime per 
            day
            </p>
            </div>
            <div className='review-comp'>
                <p>4 february we are having a couple competition, you can join the competion by just email us your booking reciet which you downloaded fro your profile </p>
            </div>
            </div>
            <div>
            <button onClick={()=>setButtonPopup(true)}>
                explore
            </button>
            <Payment trigger={buttonPopup}>
            </Payment>
            </div>
            </div>
        </div>
    ):"";
}
export default Review;

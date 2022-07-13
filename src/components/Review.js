import React from 'react';
import './landingpage.css';
import './review.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import pic7 from '../assets/room1.jpg'

function Review(){
    return(
        <div className='main'>
            <div className='room-rev'>
                <img src={pic7}></img>
            </div>
            <div className='more-info'>
            <div className='room-services'>
           <p>breakefast  in bed, by
            8pm in the morning , 
            lunch by 1 pm o’clock
            and dinner  by 7pm  with
            massage anytime per 
            day
            </p>
            </div>
            <div className='review-comp'>
                <p>4 february we are having a couple competition, you can join the competion by just email us your booking reciet which you downloaded fro your profile </p>
            </div>
            </div>
        </div>
    )
}
export default Review;

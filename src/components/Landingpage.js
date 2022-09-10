import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './landingpage.css';
import "swiper/css";
import './review.css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Authentication from './Authentication';
import Review from './Review';
import pic1 from '../assets/front.jpg';
import pic2 from '../assets/grden1.jpg';
import pic3 from '../assets/grden2.jfif';
import pic4 from '../assets/grden3.jfif';
import pic5 from '../assets/grden4.jfif';
import pic6 from '../assets/grden5.jpg';
import pic7 from '../assets/room1.jpg';
import pic8 from '../assets/rom2.jpg';
import pic9 from '../assets/room3.jpg';
import pic10 from '../assets/room4.jpg';
import pic11 from '../assets/room5.jpg';
function Landingpage(){
    const [buttonPopup, setButtonPopup]=useState(false);
    const [buttonPopup1, setButtonPopup1]=useState(false);
    const [buttonPopup2, setButtonPopup2]=useState(false);
    const [buttonPopup3, setButtonPopup3]=useState(false);
    return(
        <div className='main'>
            <div className='logo'>
            </div>
            <div className='scroll'>
<Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
        <SwiperSlide><img src={pic1} height={800} width={2000}/></SwiperSlide>
        <SwiperSlide><img src={pic2} height={800} width={2000}/></SwiperSlide>
        <SwiperSlide><img src={pic3} height={800} width={2000}/></SwiperSlide>
        <SwiperSlide><img src={pic4} height={800} width={2000}/></SwiperSlide>
        <SwiperSlide><img src={pic5} height={800} width={2000}/></SwiperSlide>
        <SwiperSlide><img src={pic6} height={800} width={2000}/></SwiperSlide>
</Swiper>
</div>
            <div className='rooms'>
            <div className='luxury'>
                <h3>WE REIMAGINED LUXURY</h3>
            </div>
            <div className='booking'>
                <div className='roominfo'>
                    <img src={pic7} width={400} height={500}/>
                    <div className='text'>
                        <h4>
                            The Luxury rooms at The<br></br> Cullinan on Kalahari
                        </h4>
                        <h4 className='price'>R4500.00</h4>
                        <span></span>
                        <button onClick={()=>setButtonPopup(true)}>
                            explore
                        </button>
                       
        <Review trigger={buttonPopup} setTrigger={setButtonPopup}>
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
                book
            </button>
            {/* <Authentication trigger={buttonPopup}>
            </Authentication> */}
            </div>
        </Review>
                    </div>
                </div>
                <div className='roominfo'>
                    <img src={pic8} width={400} height={500}/>
                    <div className='text'>
                        <h4>
                            The Luxury rooms at The<br></br> Cullinan on Kalahari
                        </h4>
                        <h4 className='price'>R4500.00</h4>
                        <span></span>
                        <button onClick={()=>setButtonPopup1(true)}>
                            explore
                        </button>
                       
        <Review trigger={buttonPopup1} setTrigger={setButtonPopup1}>
            <div className='room-rev'>
                <img src={pic8} height={300} width={600}></img>
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
            <button onClick={()=>setButtonPopup1(true)}>
                book
            </button>
            {/* <Authentication trigger={buttonPopup}>
            </Authentication> */}
            </div>
        </Review>
                    </div>
                </div>
                <div className='roominfo'>
                    <img src={pic9} width={400} height={500}/>
                    <div className='text'>
                        <h4>
                            The Luxury rooms at The<br></br> Cullinan on Kalahari
                        </h4>
                        <h4 className='price'>R4500.00</h4>
                        <span></span>
                        <button onClick={()=>setButtonPopup2(true)}>
                            explore
                        </button>
                       
        <Review trigger={buttonPopup2} setTrigger={setButtonPopup2}>
            <div className='room-rev'>
            <img src={pic9} width={600} height={300}/>
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
            <button onClick={()=>setButtonPopup2(true)}>
                book
            </button>
            {/* <Authentication trigger={buttonPopup}>
            </Authentication> */}
            </div>
        </Review>
                    </div>
                </div>
                <div className='roominfo'>
                    <img src={pic11} width={400} height={500}/>
                    <div className='text'>
                        <h4>
                            The Luxury rooms at The<br></br> Cullinan on Kalahari
                        </h4>
                        <h4 className='price'>R4500.00</h4>
                        <span></span>
                        <button onClick={()=>setButtonPopup3(true)}>
                            explore
                        </button>
                       
        <Review trigger={buttonPopup3} setTrigger={setButtonPopup3}>
            <div className='room-rev'>
            <img src={pic11} width={600} height={300}/>
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
            <button onClick={()=>setButtonPopup3(true)}>
                book
            </button>
            <Authentication trigger={buttonPopup3}  setTrigger={setButtonPopup3}>
            </Authentication>
            </div>
        </Review>
                    </div>
                </div>
                {/* <div className='roominfo'>
                    <img src={pic8} width={400} height={500}/>
                    <div className='text'>
                        <h4>
                            The Luxury rooms at The<br></br> Cullinan on Kalahari
                        </h4>
                        <h4 className='price'>R4500.00</h4>
                        <span></span>
                        <button onClick={()=>setButtonPopup(true)}>
                            explore
                        </button>
                       
                        <Review trigger={buttonPopup}>
                        </Review>
                    </div>
                </div> */}
                {/* <div className='roominfo'>
                    <img src={pic9} width={400} height={500}/>
                    <div className='text'>
                        <h4>
                            The Luxury rooms at The<br></br> Cullinan on Kalahari
                        </h4>
                        <h4 className='price'>R4500.00</h4>
                        <span></span>
                        <button onClick={()=>setButtonPopup(true)}>
                            explore
                        </button>
                        <Review trigger={buttonPopup}>
                        </Review>
                    </div>
                </div> */}
                {/* <div className='roominfo'>
                    <img src={pic10} width={400} height={500}/>
                    <div className='text'>
                        <h4>
                            The Luxury rooms at The<br></br> Cullinan on Kalahari
                        </h4>
                        <h4 className='price'>R4500.00</h4>
                        <span></span>
                        <button onClick={()=>setButtonPopup(true)}>
                            explore
                        </button>
                        <Review trigger={buttonPopup}>
                        </Review>
                    </div>    
                </div> */}
            </div>
            </div>
            <div className='specials'>
                <div className='hotel-special'>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                     incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
                </div>
                <div className='hotel-competition'>
                <p>4 february we are having a couple competition, you can join the competion by just email us your booking reciet which you downloaded fro your profile </p>
                </div>
            </div>
            <div className='footer'>
                <div className='media'>
                    <div className='footer-logo'>
                    </div>
                    <div className='footer-media'>
                        <FacebookIcon className='facebook'/>
                        <TwitterIcon className='twiter'/>
                        <InstagramIcon className='instagram'/>
                        <LinkedInIcon className='linkedin'/>
                    </div>
                </div>
                <div className='footer-about'>
                    <h3>About</h3>
                    <p>Kalahari WaterFront offers a conference facility in the most amazing sitting of peace
                       and tranquility making this the newest and most sought-after functions venue in the region.</p>
                </div>
                <div className='footer-contact'>
                    <h3>Contact</h3>
                    <p>Kalahari Waterfront Nandoni<br></br> 
                        Venda, Thohoyandou<br></br>
                        Budeli<br></br>
                        Phone. +27 15 963 1529<br></br>
                        Cell: +27 76 971 9525/ +27 63 347 2275<br></br>
                        Whatsapp: +27 79 531 0708<br></br>
                        Mail. info@kalahariwaterfront.co.za</p>
                </div>
                <div className='footer-location'>
                    <h3>Location</h3>
                    <div className="mapouter">
                        <div className="gmap_canvas">
                          <iframe width="200" height="200" id="gmap_canvas"
                               src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                               frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                          </iframe>
                        <a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon/"></a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Landingpage;
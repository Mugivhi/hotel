import './aboutus.css';
import './landingpage.css';
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import pic1 from '../assets/front.jpg';
import pic2 from '../assets/grden1.jpg';
import pic3 from '../assets/grden2.jfif';
import pic4 from '../assets/grden3.jfif';
import pic5 from '../assets/grden4.jfif';
import pic6 from '../assets/grden5.jpg';

function Aboutus(){
    return(
        <div className='main'>
            <div className='logo'>
            </div>
            <div className='aboutkalahari'>
                <h2>About Kalahari water front hotel</h2>
            </div>
            <div className='scroller'>
                <>
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
        className="mySwiper"
      >
        <SwiperSlide><img src={pic1} height={800} width={2000}/></SwiperSlide>
        <SwiperSlide><img src={pic2} height={800} width={2000}/></SwiperSlide>
        <SwiperSlide><img src={pic3} height={800} width={2000}/></SwiperSlide>
        <SwiperSlide><img src={pic4} height={800} width={2000}/></SwiperSlide>
        <SwiperSlide><img src={pic5} height={800} width={2000}/></SwiperSlide>
        <SwiperSlide><img src={pic6} height={800} width={2000}/></SwiperSlide>
      </Swiper>
      </>
            </div>
            <div className='topnav'>
                <div className='home'>
                    <h4>Home</h4>
                </div>
                <div className='about'>
                    <h4>About</h4>
                </div>
                <div className='profile'>
                    <h4>profile</h4>
                </div>
                <div className='contact'>
                    <h4>contact</h4>
                </div>
                <div className='login'>
                    <h4>Login</h4>
                </div>
            </div>
           
            <div className='paragraph'>
            <h1>HOTEL & RESTAURANT  - KALAHARI WATERFRONT</h1>
          Once you’ve experience our services you will always be compelled to return and we will
           always be willing to serve you. Our courteous staff is here to ensure that your stay 
           with us is memorable and exciting. Remember just pay one affordable cover charge and 
           enjoy exclusive access to all of our facilities.
            Located on the Nandoni Budeli area, just 10 minutes away from the Thohoyandou Thavhani Mall, the Kalahari Waterfront Hotel and Resort with Fun Park provides a relaxing and tranquil atmosphere for family getaways as well as corporate retreats and group excursions. Nestled on 12 acres of prime real-estate, the Resort offers an entry cover charge which provides patrons full access to a wide array of fun activities which would leave a lasting impression and a craving for a return for more fun and frolic in the sun. We are opened to the public from 0900hrs to 1800hrs daily, inclusive of Sundays and holidays.
            Kalahari WaterFront offers a conference facility in the most
             amazing sitting of peace and tranquility making this the newest and most 
             sought-after functions venue in the region. We cater for Weddings, special  
             initiatives for groups and corporate meetings.We will consult and assist in the
              planning of your wedding or function and package to meet your required need.Whether 
              you visit Kalahari for business or pleasure it is always perfectly suited to cater to every need.
               We can cater for any Wedding, functions, events or themed party.
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
                               frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                          </iframe>
                        <a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon/"></a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Aboutus;
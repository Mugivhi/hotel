import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import './landingpage.css';
import './profile.css';
import pic1 from '../assets/usersimage.jfif';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import pic7 from '../assets/room1.jpg'


function Profilepage(){
    return(
        <div className='main'>
             <div className='logo'>
            </div>
            {/* <div className='topnav'>
                <div className='home'>
                    <Link to='./'  className='nav-links'><h3>home</h3></Link>
                </div>
                <div className='about'>
                    <Link to='./Aboutus'  className='nav-links'><h3>About</h3></Link>
                </div>
                <div className='profile'>
                    <Link to='./Profilepage'  className='nav-links'><h3>Profile</h3></Link>
                </div>
                <div className='contact'>
                    <Link to='./Contactus'  className='nav-links'><h3>Contactus</h3></Link>
                </div>
                <div className='top-login-btn'>
                    <Link to='./Loginpage'  className='nav-links'><h3>Login</h3></Link>
                </div>
            </div> */}
            <div className='holder-profile'>
            <div className='personal-details'>
                <div className='user-image'>
                    <img src={pic1}/>
                </div>
                <div className='user-info'>
                    <h3>welcome</h3>
                    <h3>name</h3>
                    <h3>Surname</h3>
                    <h3>contact</h3>
                    <h3>email</h3>
                </div>
            </div>
            <div className='personal-bookings'>
            <div className='bookings-text'>
                <h2>Your bookings</h2>
            </div>
            <div className='booking-view'>
                <div className='roompic'>
                    <img src={pic7} height={400} width={300}/>
                </div>
                <div className='roominfo'>
                    <div className='text'>
                        <h4>
                            The Luxury rooms at The<br></br> Cullinan on Kalahari
                        </h4>
                        <h4 className='price'>R4500.00</h4>
                        <span></span>
                        <div className='dates'>
                            <p>mm/dd/year to mm/dd/year</p>
                        </div>
                        <div className='buttons'>
                            <button className='download'>
                                download
                            </button>
                            <button className='cancel'>
                                cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='booking-view'>
                <div className='roompic'>
                    <img src={pic7} height={400} width={300}/>
                </div>
                <div className='roominfo'>
                    <div className='text'>
                        <h4>
                            The Luxury rooms at The<br></br> Cullinan on Kalahari
                        </h4>
                        <h4 className='price'>R4500.00</h4>
                        <span></span>
                        <div className='dates'>
                            <p>mm/dd/year to mm/dd/year</p>
                        </div>
                        <div className='buttons'>
                            <button className='download'>
                                download
                            </button>
                            <button className='cancel'>
                                cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='booking-view'>
                <div className='roompic'>
                    <img src={pic7} height={400} width={300}/>
                </div>
                <div className='roominfo'>
                    <div className='text'>
                        <h4>
                            The Luxury rooms at The<br></br> Cullinan on Kalahari
                        </h4>
                        <h4 className='price'>R4500.00</h4>
                        <span></span>
                        <div className='dates'>
                            <p>mm/dd/year to mm/dd/year</p>
                        </div>
                        <div className='buttons'>
                            <button className='download'>
                                download
                            </button>
                            <button className='cancel'>
                                cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
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
export default Profilepage;
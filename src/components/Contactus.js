import './contactus.css';
import './landingpage.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';


function Contactus(){
    return(
        <div className='main'>
            <div className='logo'>
            </div>
            <div className='contactus'>
                <h2>contact kalahari water front hotel</h2>
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
            <div className='main-contact'>
                <div className='contact-form'>
                    <form className='cont-form'  action="https://formspree.io/f/xoqrdlkz"
                                method="post">
                        <div>
                            <label>name</label><br></br>
                            <input type='text'></input>
                        </div>
                        <div>
                            <label>phone</label><br></br>
                            <input type='text'></input>
                        </div>
                        <div>
                            <label>email addres</label><br></br>
                            <input type='text'></input>
                        </div>
                        <div>
                            <label>number of guests</label><br></br>
                            <input type='text'></input>
                        </div>
                        <div>
                            <label>arrival date</label><br></br>
                            <input type='text'></input>
                        </div>
                        <div>
                            <label>description</label><br></br>
                            <textarea></textarea>
                        </div>
                        <div>
                            <button className='submit-contact'>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <div className='contact-details'>
                    <div className='logo-contact'>
                    </div>
                    <div className='email-kalahari'>
                    E-MAIL<br></br>
                    24/7 Reservation via Email<br></br>
                    M. info@kalahariwaterfront.co.za<br></br>
                    (Reception Service Desk)<br></br>
                    </div>
                    <div className='phone-kalahari'>
                        PHONE & FAX<br></br>
                        24/7 Reservation via Phone or Email<br></br>
                        Phone: +27 15 963 1529<br></br>
                        Cell: +27 76 971 9525 / +27 63 347 2275<br></br>
                        Whatsapp: +27 79 531 0708<br></br>
                        Fax: 086 514 2563<br></br>
                    </div>
                    <div className='address-kalahari'>
                    ADDRESS<br></br>
                    Kalahari Waterfront<br></br>
                    Plot 116, Nandoni<br></br>
                    Budeli<br></br>
                    GPS Coordinates Latitude: -22,9736 Longitude 30,5783<br></br>
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
export default Contactus;

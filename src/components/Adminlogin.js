
import {Link} from 'react-router-dom';
import React, { useState } from 'react';


function Adminlogin(){
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return(
        <div className='welcome'>
            <div className="login-register-container">
                <input placeholder='adim specific code'></input>
                <div className='buttons-login'>
            <Link
                  to='/Admusers'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Login
            </Link>
                </div>
            </div>
        </div>
    )
}
export default Adminlogin;
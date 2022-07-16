import './register.css';
import React, {useRef} from 'react';
import { Link } from 'react-router-dom';

function Register(){
    const emailref = useRef()
    const passwordREf = useRef()
    return(
        <div className='main-page-register'>
            <div className='loginpage-register'>
               <div className='header-register'>
                <h3>
                    Register
                </h3>
               </div>
               <div className='form-register'>
                <form>
                    <div className='form-input'>
                        <div>
                        <input type='text' placeholder='enter your name' />
                        
                        </div>
                        <div>
                        <input type='text' placeholder='enter your surname'/>
                        </div>
                        <div>
                        <input type='text' placeholder='enter  your id'/>
                        </div>
                        <div>
                        <input type='email' placeholder='enter your email ' ref={emailref}/>
                        </div>
                        <div>
                        <input type='file' placeholder='Add your image'/>
                        </div>
                        <div>
                        <input type='phone' placeholder='enter your contact'/>
                        </div>
                        <div>
                        <input type='password' placeholder='enter your  password' ref={passwordREf}/>
                        </div>
                        <div className='buttons-login-register'>
                                 <Link to='Loginpage'>
                                 <button className='btn'>Login</button>
                                 </Link>
                            <button className='btn'>Login</button>
                        </div>
                    </div>
                </form>
               </div>
            </div>
        </div>
    )
}
export default Register;
import './register.css';


function Register(){
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
                        <input type='text' placeholder='enter your name'>

                        </input>
                        </div>
                        <div>
                        <input type='text' placeholder='enter your surname'>

                        </input>
                        </div>
                        <div>
                        <input type='text' placeholder='enter  your id'>

                        </input>
                        </div>
                        <div>
                        <input type='email' placeholder='enter your email '>

                        </input>
                        </div>
                        <div>
                        <input type='file' placeholder='Add your image'>

                        </input>
                        </div>
                        <div>
                        <input type='phone' placeholder='enter your contact'>

                        </input>
                        </div>
                        <div>
                        <input type='password' placeholder='enter your  password'>

                        </input>
                        </div>
                        <div className='buttons-login-register'>
                        <button>Sign-up</button>
                        <button>Login</button>
                        </div>
                    </div>
                </form>
               </div>
            </div>
        </div>
    )
}
export default Register;
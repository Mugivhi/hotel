import './login.css';
import {Link} from 'react-router-dom';
function Loginpage(){
    return(
        <div className='main-page'>
            <div className='loginpage'>
                <div className='header'>
                <div className='header-login'>
                   <a href='./Adminlogin' ><h2>Login</h2></a>
                </div>
                <div className='header-admin'>
                    <h2>Login as Admin</h2>
                </div>
                </div>
                <div className='form-login'>
                <form>
                    <div>
                        <input placeholder='entert your username or email'></input>
                    </div>
                    <div>
                        <input placeholder='password'></input>
                    </div>
                    <div className='buttons-login'>
                        <button>Login</button>
                        <Link to='Register'>
                            <button className='btn'>Sign-up</button>
                         </Link>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}
export default Loginpage;
import './login.css';
function Loginpage(){
    return(
        <div className='main-page'>
            <div className='loginpage'>
                <div className='header'>
                <div className='header-login'>
                    <h2>Login</h2>
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
                        <button>Sign-up</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}
export default Loginpage;
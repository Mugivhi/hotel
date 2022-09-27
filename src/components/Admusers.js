import './admusers.css';
import pic1 from '../assets/usersimage.jfif';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Admusers(){
    const navigate=useNavigate();
    const navigateTo=()=>{
        navigate('/')
    }
    return(
        <div className='the-admin'>
        <div className='conatainer'>
            <div className='adm-topnav'>
                <div className='logo'>
                </div>
                <div className='adm-btn'>
                    <button onClick={navigateTo}>Logout</button>
                </div>
                <div className='main-admin'>
                    <div className='side-menu'>
                        <div className='users'>
                            <button className='users-btn'>users</button>
                        </div>
                        <div className='rooms'>
                        <button className='users-btn'>rooms</button>
                        </div>
                        <div className='bookings'>
                        <button className='users-btn'>bookings</button>
                        </div>
                    </div>
                    <div className='data'>
                        <div className='headings'>
                            <span className='image'>image</span>
                            <span className='username'>username</span>
                            <span className='surname'>surname</span>
                            <span className='email'>email</span>
                            <span className='phone'>phone no</span>
                            <span className='passw'>password</span>
                            <span>user id</span>
                            <span> Action</span>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
         <div className='user-detail-adm'>
            <div className='info'>
         <span><img src={pic1}/></span>
         <span>hlgn</span>
         <span>teslar</span>
         <span>te@gmail.</span>
         <span>0127855</span>
         <span>Bc@58</span>
         <span>125892</span>
         <span>
            <button>
                delete
            </button>
         </span>
         </div>
     </div>
     </div>
    )
}
export default Admusers;
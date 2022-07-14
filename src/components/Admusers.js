import './admusers.css';
import pic1 from '../assets/usersimage.jfif';

function Admusers(){
    return(
        <div>
        <div className='conatainer'>
            <div className='adm-topnav'>
                <div className='logo'>
                </div>
                <div className='adm-btn'>
                    <button>Logout</button>
                </div>
                <div className='main-admin'>
                    <div className='side-menu'>
                        <div className='users'>
                            <h3>Users</h3>
                        </div>
                        <div className='rooms'>
                            <h3>Rooms</h3>
                        </div>
                        <div className='bookings'>
                            <h3>Bookings</h3>
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
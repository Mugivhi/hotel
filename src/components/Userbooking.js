import './userbooking.css';
import {useNavigate} from 'react-router-dom'

function Userbooking(){
    const navigate = useNavigate()
    const navigateToPayment=()=>{
        navigate('/payment')
    }
    return(
        <div className='userbookings'>
            <div className='boking-user'>
                <form>
                    <div className='ubooking-inputs'>
                        <div>
                            <label>Arrival date</label>
                            <br/>
                            <input type='date'/>
                        </div>
                        <div>
                            <label>Depart date</label>
                            <br/>
                            <input type='date'/>
                        </div>
                        <div>
                            <label>no of guests</label>
                            <br/>
                            <input type='number'/>
                        </div>
                        <div>
                            <label>Adults</label>
                            <br/>
                            <input type='number'/>
                        </div>
                        <div>
                            <label>children</label>
                            <br/>
                            <input type='number'/>
                        </div>
                        <div>
                            <label>pets</label>
                            <br/>
                            <input type='number'/>
                        </div>
                        <div className='proceed-btn'>
                            <button onClick={navigateToPayment}>proceed</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Userbooking;
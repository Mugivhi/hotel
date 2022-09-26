import React,{useState} from 'react';
import './payment.css';
import {useNavigate} from 'react-router-dom'
function Payment(){
    const navigate=useNavigate()
    // const [buttonPopup, setButtonPopup]=useState(false);
    const Paymentpopup=()=>{
        navigate('/Paymentpopup')
    }
    return(
        <div className='main-payment'>
            <div className='form-payment'>
                <form>
                    <div className='form-pay-input'>
                    <div>
                        <input placeholder='email'/>
                    </div>
                    <div>
                        <input placeholder='card number'/>
                    </div>
                    <div className='two-imp'>
                        <input placeholder='MM/YY'/>
                        <input placeholder='CVC'/>
                    </div>
                    <div>
                        <input placeholder='name of the card'/>
                    </div>
                    <div>
                        <input placeholder='country or region'/>
                    </div>
                    <div className='pay-button'>
                        <button onClick={Paymentpopup} >pay</button>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Payment;
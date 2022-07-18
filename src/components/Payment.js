import React,{useState} from 'react';
import './payment.css';
import Paymentpopup from './Paymentpopup';
function Payment(props){
    const [buttonPopup, setButtonPopup]=useState(false);
    return(props.trigger) ? (
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
                        <button  onClick={()=>setButtonPopup(true)}>pay</button>
                        <Paymentpopup trigger={buttonPopup} setTrigger={setButtonPopup}>
                        </Paymentpopup>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    ):"";
}
export default Payment;
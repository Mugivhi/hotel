import './payment.css';

function Payment(){
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
                        <button>pay</button>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Payment;
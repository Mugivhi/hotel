import './userbooking.css';

function Userbooking(){
    return(
        <div className='userbookings'>
            <div className='boking-user'>
                <form>
                    <div className='ubooking-inputs'>
                        <div>
                            <label>Arrival date</label>
                            <br/>
                            <input/>
                        </div>
                        <div>
                            <label>Depart date</label>
                            <br/>
                            <input/>
                        </div>
                        <div>
                            <label>no of guests</label>
                            <br/>
                            <input/>
                        </div>
                        <div>
                            <label>Adults</label>
                            <br/>
                            <input/>
                        </div>
                        <div>
                            <label>children</label>
                            <br/>
                            <input/>
                        </div>
                        <div>
                            <label>pets</label>
                            <br/>
                            <input/>
                        </div>
                        <div className='proceed-btn'>
                            <button>proceed</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Userbooking;
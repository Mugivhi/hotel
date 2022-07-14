import './adminadd.css'

function Adminadd(){
    return(
        <div className='adminadd'>
        <div className='add-admin'>
            <form>
                <div className='Aadd'>
                    <div>
                        <label>Room name</label>
                        <br/>
                        <input/>
                    </div>
                    <div>
                        <label>Room type</label>
                        <br/>
                        <input/>
                    </div>
                    <div>
                        <label>Room  price</label>
                        <br/>
                        <input/>
                    </div>
                    <div>
                        <label>Room image</label>
                        <br/>
                        <input/>
                    </div>
                    <div>
                        <label>Special if available</label>
                        <br/>
                        <input/>
                    </div>
                    <div>
                        <label>number of accomodation</label>
                        <br/>
                        <input/>
                    </div>
                    <div>
                        <label>Room number</label>
                        <br/>
                        <input/>
                    </div>
                    <div className='done-btn'>
                        <button>Done</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    )
}
export default Adminadd;

import React,{useState} from 'react';
// import firebase from 'firebase';
import {firebase} from '../firebase';
import '../components/adminadd.css'
const Adminadd=()=>{
    const [room,setRoom] = useState({name:'' , number:'',type:'', price:'',image:'',special:'',space:''});
    const db = firebase.firestore();
    const handleChange = (event)=>{
        event.preventDefault();
        const {name,value} = event.target;
        setRoom((prev)=>{
            return{...prev,[name]:value};
        });
    }
    const addDoc = (event)=>{
        event.preventDefault();
        db.collection('rooms').add({
            name:room.name,
            number:room.number,
            roomType:room.type,
            roomPrice:room.price,
            rooomImg:room.image,
            special:room.special,
            space:room.space
        })
        .then((docRef)=>{
            const docId = docRef.id;
            console.log(docId)
        }).catch((err)=>{
            console.log('Error'+err.message)
        });
    };
    return(
        <div className='adminadd'>
        <div className='add-admin'>
            <form onSubmit={addDoc}>
                <div className='Aadd'>
                    <div>
                        <label>Room name</label>
                        <br/>
                        <input type='text'
                        name='name'
                        value={room.name}
                        onChange={handleChange} 
                        />
                    </div>
                    <div>
                        <label>Room type</label>
                        <br/>
                        <input type='text'
                        name='type'
                        value={room.type}
                        onChange={handleChange} 
                        />
                    </div>
                    <div>
                        <label>Room  price</label>
                        <br/>
                        <input type='text'
                        name='price'
                        value={room.price}
                        onChange={handleChange} 
                        />
                    </div>
                    <div>
                        <label>Room image</label>
                        <br/>
                        <input type='text'
                        name='image'
                        value={room.image}
                        onChange={handleChange} 
                        />
                    </div>
                    <div>
                        <label>Special if available</label>
                        <br/>
                        <input type='text'
                        name='special'
                        value={room.special}
                        onChange={handleChange} 
                        />
                    </div>
                    <div>
                        <label>number of accomodation</label>
                        <br/>
                        <input type='number'
                        name='space'
                        value={room.space}
                        onChange={handleChange} 
                        />
                    </div>
                    <div>
                        <label>Room number</label>
                        <br/>
                        <input type='number'
                        name='number'
                        value={room.number} 
                        onChange={handleChange}
                        />
                    </div>
                    <div>
                        <button>done</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    )
}
export default Adminadd;
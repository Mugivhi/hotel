import React, { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  createUserWithEmailAndPassword
} from "firebase/auth";
import { uid } from "uid";
import { auth,db } from "../firebase.js";
import {set,ref,onValue,remove,} from "firebase/database"
import { useNavigate } from "react-router-dom";
import './authentication.css'
// import "./welcome.css";
// import TodoSVG from '../assets/todo-svg.svg'

export default function Authentication(props) {
  var letters=/^[A-Za-z]+$/;
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var pwd = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
  const [name,setName]=useState("");
  const [surname,setSurname]=useState("");
  const [identity,setId]=useState("");
  const [image,setImg]=useState("");
  const [contact,setContact]=useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [registerInformation, setRegisterInformation] = useState({
    name:"",
    surname:"",
    identity:"",
    image:"",
    contact:"",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: ""
  });

  const navigate = useNavigate();

  useEffect(() => {
    onValue(ref(db,`/${auth.currentUser.uid}`),(snapshot)=>{
      setRegisterInformation([]);
    }
      )
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/Payment");
      }
    });
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/Payment");
      })
      .catch((err) => alert(err.message));
  };

  const handleRegister = () => {
   if(registerInformation.name===""){
    alert("name field is empty")
   }
   else if(!letters.test(name)){
    alert('name field requires only alphabets')
   }
   else if(registerInformation.surname===""){
    alert("surname field can't be empty")
   }
   else if(!letters.test(surname)){
    alert("surname field requires only alphabets")
   }
   else if(registerInformation.identity===""){
    alert("identity field can't be empty")
   }
   else if(registerInformation.contact===""){
    alert("contact field cant't be empty")
   }
   else if(registerInformation.contact.length<10||registerInformation.contact.length>10){
    alert('contact must be 10 in length')
   }
   else if(registerInformation.image===""){
    alert('image is requred')
   }
   else if(!filter.test(email)){
    alert("incorrect email format")
   }
   else if(!pwd.test(password)){
    alert("Upper case, Lower case, Special character and Numeric letter are required in Password filed")
   }
    else if (registerInformation.email !== registerInformation.confirmEmail) {
      alert("different emails");
      return;
    } else if (
      registerInformation.password !== registerInformation.confirmPassword
    ) {
      alert("different passwords");
      return;
    }
    createUserWithEmailAndPassword(
      auth,
      registerInformation.name,
      registerInformation.surname,
      registerInformation.identity,
      registerInformation.image,
      registerInformation.contact,
      registerInformation.email,
      registerInformation.password
    )
      .then(() => {
        navigate("/Payment");
      })
      .catch((err) => alert(err.message));
      const uidd=uid();
      set(ref(db,`/${auth.currentUser.uid}/${uidd}`),{
        name:name,
        identity:identity,
        contact:contact,
        image:image,
        email:email,
        password:password
      })
  };

  return(props.trigger) ?  (
    <div className="welcome">
      <div className="login-register-container">
        {isRegistering ? (
          <>
            <input className="email"
            type="text"
            placeholder="name"
            value={registerInformation.name}
            onChange={(e)=>
            setName({
              ...registerInformation,
              name: e.target.value
            })
          }
            />
             <input className="email"
            type="text"
            placeholder="surname"
            value={registerInformation.surname}
            onChange={(e)=>
            setSurname({
              ...registerInformation,
              surname: e.target.value
            })
          }
            />
              <input className="email"
            type="text"
            placeholder="id no"
            value={registerInformation.identity}
            onChange={(e)=>
            setId({
              ...registerInformation,
              identity: e.target.value
            })
          }
            />
             <input className="email"
            type="file"
            placeholder="image"
            value={registerInformation.image}
            onChange={(e)=>
            setImg({
              ...registerInformation,
              image: e.target.value
            })
          }
            />
            <input className="email"
            type="text"
            placeholder="phone number"
            value={registerInformation.contact}
            onChange={(e)=>
            setContact({
              ...registerInformation,
              contact: e.target.value
            })
          }
            />
            <input className="email"
              type="email"
              placeholder="Email"
              value={registerInformation.email}
              onChange={(e) =>
                setRegisterInformation({
                  ...registerInformation,
                  email: e.target.value
                })
              }
            />
            <input className="email"
              type="email"
              placeholder="Confirm Email"
              value={registerInformation.confirmEmail}
              onChange={(e) =>
                setRegisterInformation({
                  ...registerInformation,
                  confirmEmail: e.target.value
                })
              }
            />
            <input className="password"
              type="password"
              placeholder="Password"
              value={registerInformation.password}
              onChange={(e) =>
                setRegisterInformation({
                  ...registerInformation,
                  password: e.target.value
                })
              }
            />
            <input className="password"
              type="password"
              placeholder="Confirm Password"
              value={registerInformation.confirmPassword}
              onChange={(e) =>
                setRegisterInformation({
                  ...registerInformation,
                  confirmPassword: e.target.value
                })
              }
            />
            <button className="sign-in-register-button" onClick={handleRegister}>Register</button>
            <button className="create-account-button" onClick={() => setIsRegistering(false)}>Go back</button>
          </>
        ) : (
          <>
            <input className="email"
             type="email" 
             placeholder="Email" 
             onChange={handleEmailChange} 
             value={email} />
            <input className="password"
              type="password"
              onChange={handlePasswordChange}
              value={password}
              placeholder="Password"
            />
            <button className="sign-in-register-button" onClick={handleSignIn}>
              Sign In
            </button>
            <button
              className="create-account-button"
              onClick={() => setIsRegistering(true)}
            >
              Register
            </button>
          </>
        )}
      </div>
    </div>
  ):"";
}



// import React, { useState, useEffect } from "react";
// import {
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   createUserWithEmailAndPassword
// } from "firebase/auth";
// import {auth} from '../firebase';
// import { useNavigate } from "react-router-dom";
// import './login.css';
// import './register.css'
// // import TodoSVG from '../assets/todo-svg.svg'

// export default function Authentication(props) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isRegistering, setIsRegistering] = useState(false);
//   const [registerInformation, setRegisterInformation] = useState({
//     email: "",
//     confirmEmail: "",
//     password: "",
//     confirmPassword: ""
//   });

//   const navigate = useNavigate();
//     useEffect(() => {
//     auth.onAuthStateChanged((user) => {
//       if (user) {
//         navigate("/Payment");
//       }
//     });
//   }, []);

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSignIn = () => {
//     signInWithEmailAndPassword(auth, email, password)
//       .then(() => {
//         navigate("/Payment");
//       })
//       .catch((err) => alert(err.message));
//   };

//   const handleRegister = () => {
//     if (registerInformation.email !== registerInformation.confirmEmail) {
//       alert("Please confirm that email are the same");
//       return;
//     } else if (
//       registerInformation.password !== registerInformation.confirmPassword
//     ) {
//       alert("Please confirm that password are the same");
//       return;
//     }
//     createUserWithEmailAndPassword(
//       auth,
//       registerInformation.email,
//       registerInformation.password
//     )
//       .then(() => {
//         navigate("/Payment");
//       })
//       .catch((err) => alert(err.message));
//   };

//   return (props.trigger) ? (
//     <div className="welcome">
//       <div className="login-register-container">
//         {isRegistering ? (
//           <>
//           <div className='main-page-register'>
//             <div className='loginpage-register'>
//                <div className='header-register'>
//                 <h3>
//                     Register
//                 </h3>
//                </div>
//                <div className='form-register'>
//                 <form>
//                     <div className='form-input'>
//                         {/* <div>
//                         <input type='text' placeholder='enter your name' value={registerInformation.name} onChange={(e) =>setRegisterInformation({...registerInformation,name: e.target.value})}/>
//                         </div> */}
//                         {/* <div>
//                         <input type='text' placeholder='enter your surname' value={registerInformation.surname} onChange={(e) =>setRegisterInformation({...registerInformation,surname: e.target.value})}/>
//                         </div> */}
//                         <div>
//                         <input type='email' placeholder='email' value={registerInformation.email}   onChange={(e) =>setRegisterInformation({...registerInformation,email: e.target.value})}/>
//                         </div>
//                         <div>
//                         <input type='email' placeholder='confirm email'value={registerInformation.confirmEmail} onChange={(e) =>setRegisterInformation({...registerInformation,confirmEmail: e.target.value})}/>
//                         </div>
//                         {/* <div>
//                         <input type='file' placeholder='Add your image'value={registerInformation.image} onChange={(e) =>setRegisterInformation({...registerInformation,image: e.target.value})}/>
//                         </div> */}
//                          <div>
//                         <input type="password" placeholder="Password" value={registerInformation.password} onChange={(e) =>setRegisterInformation({...registerInformation,password: e.target.value})}/>
//                         </div>
//                         <div>
//                         <input type='password' placeholder='confirm password' value={registerInformation.confirmPassword} onChange={(e) =>setRegisterInformation({...registerInformation,confirmPassword: e.target.value})}/>
//                         </div>
//                         <div className='buttons-login-register'>
//                         <button className="sign-in-register-button" onClick={handleRegister}>Register</button>
//                         <button className="create-account-button" onClick={() => setIsRegistering(false)}>Go back</button>
//                         </div>
//                     </div>
//                 </form>
//                </div>
//             </div>
//         </div>
//           </>
//         ) : (
//           <>
//           <div className='main-page'>
//             <div className='loginpage'>
//                 <div className='header'>
//                 <div className='header-login'>
//                    <h2>Login</h2>
//                 </div>
//                 <div className='header-admin'>
//                     <h2>Login as Admin</h2>
//                 </div>
//                 </div>
//                 <div className='form-login'>
//                 <form>
//                     <div>
//                         <input type="email" placeholder='entert your username or email' onChange={handleEmailChange}  value={email}/>
//                     </div>
//                     <div>
//                         <input type='password' placeholder='password' onChange={handlePasswordChange} value={password}/>
//                     </div>
//                     <div className='buttons-login'>
//                       <button className="sign-in-register-button" onClick={handleSignIn}>Login</button>
//                       <button  className="create-account-button"  onClick={() => setIsRegistering(true)}>Sign-up</button>
//                     </div>
//                 </form>
//                 </div>
//             </div>
//         </div>
//           </>
//         )}
//       </div>
//     </div>
//   ) : "";
// }
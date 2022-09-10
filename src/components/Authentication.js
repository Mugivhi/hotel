import React, { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  createUserWithEmailAndPassword
} from "firebase/auth";
import { auth,createUserDocument } from "../firebase.js";
import { useNavigate } from "react-router-dom";
import "./authentication.css";
// import TodoSVG from '../assets/todo-svg.svg'

export default function Authentication(props) {
  const [email, setEmail] = useState("");
  const[image,setImg]=useState('');
  const[phone, setPhone]=useState('');
  const[name, setName]=useState('');
  const[surname, setSurname]=useState('');
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [registerInformation, setRegisterInformation] = useState({
    name:'',
    surname:'',
    image:image,
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: ""
  });

  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // navigate("/Landingpage");
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
    if (registerInformation.email !== registerInformation.confirmEmail) {
      alert("Please confirm that email are the same");
      return;
    }
    else if(registerInformation.name==''){
      alert("name field can't be empty" )
    }
    else if (registerInformation.surname==''){
      alert("surname can't be empty")
    }
    else if (registerInformation.image==''){
      alert('please add your image')
    }
     else if (
      registerInformation.password !== registerInformation.confirmPassword
    ) {
      alert("Please confirm that password are the same");
      return;
    }
      createUserWithEmailAndPassword(
      auth,
      registerInformation.email,
      registerInformation.name,
      registerInformation.surname,
      registerInformation.password,
      registerInformation.image
    )
      .then(() => {
        navigate("/Payment");
      })
      .catch((err) => alert(err.message));
  };

//  createUserDocument(user,{displayName});
  
  return  (
    <div className="welcome">
      <div className="login-register-container">
        {isRegistering ? (
          <>
          <input
              type="text"
              placeholder="Name"
              value={registerInformation.name}
              onChange={(e) =>
                setRegisterInformation({
                  ...registerInformation,
                  name: e.target.value
                })
              }
            />
            <input
              type="text"
              placeholder="surname"
              value={registerInformation.surname}
              onChange={(e) =>
                setRegisterInformation({
                  ...registerInformation,
                  surname: e.target.value
                })
              }
            />
            <input
              type="number"
              placeholder="phone number"
              value={registerInformation.contact}
              onChange={(e) =>
                setRegisterInformation({
                  ...registerInformation,
                  contact: e.target.value
                })
              }
            />
            <input
              type="file"
              placeholder="upload picture"
              value={registerInformation.image}
              onChange={(e) =>
                setRegisterInformation({
                  ...registerInformation,
                  image: e.target.value
                })
              }
            />
            <input
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
            <input
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
            <input
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
            <input
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
            <button className="create-account-button" onClick={() => setIsRegistering(false)}>sign-in</button>
          </>
        ) : (
          <>
            <input type="email" placeholder="Email" onChange={handleEmailChange} value={email} />
            <input
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
              sign-up
            </button>
          </>
        )}
      </div>
    </div>
  )
}



// import React, { useState, useEffect } from "react";
// import {
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   createUserWithEmailAndPassword
// } from "firebase/auth";
// import {auth} from '../firebase';
// import { useNavigate } from "react-router-dom";
// import '../components/authentication.css';
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
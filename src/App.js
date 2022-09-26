import React from 'react';
import './App.css';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import Landingpage from './components/Landingpage';
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus';
import Profilepage from './components/Profilepage';
import Navbar from './components/Navbar';
import Payment from './components/Payment';
import Userbooking from './components/Userbooking';
import Adminadd from './components/Adminadd';
import Admusers from './components/Admusers';
import Adminlogin from './components/Adminlogin';
import Authentication from './components/Authentication';
import Paymentpopup from './components/Paymentpopup';

function App() {
  return (
    // <div className="main">
    //   <Sidebar />
    //   <div className="container">
    //     <h1 className="title">My React App</h1>
    //     <p className="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    //     <button className="btn">Explore now</button>
    //   </div>
    // </div>
   
    <BrowserRouter>
     {/* <Landingpage/>
     <Adminadd/>
     <Admusers/>
     <Aboutus/> 
     <Contactus/>
     <Profilepage/> */}
        <Navbar/>
        <Routes>
        <Route path="/" exact element={<Landingpage/>}/></Routes>
        <Routes>
        <Route path="/Aboutus"  element={<Aboutus/>}/></Routes>
        <Routes>
        <Route path="/contactus" element={<Contactus/>}/></Routes>
        <Routes>
        <Route path="/profilepage"  element={<Profilepage/>}/></Routes>
        <Routes>
          <Route path='/Payment' element={<Payment/>}/></Routes>
          <Routes>
            <Route path='/Userbooking' element={<Userbooking/>}/>
          </Routes>
          <Routes>
            <Route path='/Authentication' element={<Authentication/>}/>
          </Routes>
          <Routes>
            <Route path='/Adminadd' element={<Adminadd/>}/>
          </Routes>
          <Routes>
            <Route path='/Admusers' element={<Admusers/>}/>
          </Routes>
          <Routes>
            <Route path='/Adminlogin' element={<Adminlogin/>}/>
          </Routes>
          <Routes>
            <Route path='/Paymentpopup' element={<Paymentpopup/>}/>
          </Routes>
    </BrowserRouter>
  );
}

export default App;
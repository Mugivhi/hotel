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

function App() {
  return (
   
    <BrowserRouter>
     {/* <Landingpage/> 
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
          <Route path='Payment' element={<Payment/>}/></Routes>
          <Routes>
            <Route path='Userbooking' element={<Userbooking/>}/>
          </Routes>
    </BrowserRouter>
  );
}

export default App;
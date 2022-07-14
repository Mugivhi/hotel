import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Landingpage from './components/Landingpage';
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus';
import Profilepage from './components/Profilepage';
import Review from './components/Review';
import Loginpage from './components/Loginpage';
import Register from './components/Register';
import Payment from './components/Payment';
import Userbooking from './components/Userbooking';
import Adminadd from './components/Adminadd';
import Admusers from './components/Admusers';
function App() {
  return (
    <Router>
        <Routes>
        <Route path='/' exact element={<Landingpage/>}/></Routes>
        <Routes>
        <Route path='/aboutus'  element={<Aboutus/>}/></Routes>
        <Routes>
        <Route path='/conatactus' element={<Contactus/>}/></Routes>
        <Routes>
        <Route path='/profilepage'  element={<Profilepage/>}/></Routes>
        <Routes>
        <Route path='/login'  element={<Loginpage/>}/>
        </Routes>
    </Router>
  );
}

export default App;

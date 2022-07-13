import React from 'react';
import './App.css';
import Landingpage from './components/Landingpage';
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus';
import Profilepage from './components/Profilepage';
import Review from './components/Review';
import Loginpage from './components/Loginpage';
function App() {
  return (
    <div className="App">
      <Loginpage/>
      {/* <Review/>
      <Contactus/>
      <Profilepage/>
      <Aboutus/>
     <Landingpage/> */}
    </div>
  );
}

export default App;

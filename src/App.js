import './App.css';
import Landingpage from './components/Landingpage';
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus';
function App() {
  return (
    <div className="App">
      <Contactus/>
      <Aboutus/>
     <Landingpage/>
    </div>
  );
}

export default App;

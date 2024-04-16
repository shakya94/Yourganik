
import './App.css';
import websiteb from './Images/websiteb.png';
import mobile from './Images/mobile.png';


function App() {
  return (
    <div className="App">
       {/* For mobile view */}
       <img src={mobile} alt="Mobile Image" className="mobile-image" />
            
            {/* For desktop view */}
            <img src={websiteb} alt="Desktop Image" className="desktop-image" />
    </div>
  );
}

export default App;

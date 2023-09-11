import logo from './logo.svg';
import './index.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Use from './components/use';
import Effect from './components/use';
import Create from './components/create';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
     <Home/>
      </div>
      <Effect/>
      <Create/>
    </div>
  
  
  );
}

export default App;

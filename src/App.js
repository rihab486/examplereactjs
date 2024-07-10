import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';


function App() {
  const link = "https://legacy.reactjs.org/docs/getting-started.html";
  return (
    <div className="App">
      <Navbar />
      <div className="content">
           <Home />
        <p>{link}</p>
      </div>
    </div>
  );
}

export default App;

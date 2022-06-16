import './App.css';
import Navbar from "./components/Navbar.js";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/pages/Home.js";
import Services from "./components/pages/Services.js";
import Products from "./components/pages/Products.js";
import SignUp from "./components/pages/SignUp.js";
import Footer from "./components/Footer.js";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/signUP" element={<SignUp/>} />
        </Routes>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;

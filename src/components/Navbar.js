import React, {useState , useEffect} from "react";
import {Link} from "react-router-dom";
import Button from "./Button.js";
import "./Navbar.css";
import Cards from "./Cards.js";


function Navbar(){

    const [click, setClick] =useState(false);

    function handleClick(){
           setClick(!click);}
    //const handlClick = () => setClick(!click);
    
    const closeMobileMenu = () => setClick(false);

    const [button, setButton] = useState(true);

    function showButton(){
        if(window.innerWidth <= 960){
            setButton(false);
        } else {setButton(true);setClick(false);}
    }

    useEffect(() => {showButton()},[]);


    window.addEventListener('resize', showButton);
return (<div>
          <>    
          <nav className="navbar">
              <div className="navbar-container">
                  <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                      TRVL <i className='fab fa-typo3'/>
                  </Link>
                  <div className="menu-icon" onClick={handleClick}>
                      <i className={click? "fas fa-times" : "fas fa-bars"}/>
                  </div>
                  <ul className={click? "nav-menu-active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                         
                        <li className="nav-item">
                            <Link to="/services" className='nav-links' onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/products" className='nav-links' onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>

                        

                    
                  </ul>
                  <Link to="/signup">{button && <Button buttonStyle='btn--outline' value="SignUp" butonSize="btn--medium"></Button>}</Link>
                  
              </div>
          </nav> 
         
          </>  
                 
     </div>) 
}

export default Navbar;
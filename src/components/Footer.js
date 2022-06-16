import React from "react";
import Button from "./Button.js";
import "./Footer.css";
import {Link} from "react-router-dom";

export default function Footer(){
        return (
            <div className="footer-container">
                <section className="footer-subscription">
                    <p className="footer-subscription-heading">
                        Join the Adventure News Letter to recieve our best vacation deals.
                    </p>
                    <p className="footer-subscription-text">
                        You can Unsubscribe anytime!
                    </p>

                    <form>
                        <input className="footer-input" type="email" name="email" placeholder="Your email">
                        </input>
                        <Button buttonStyle="btn--primary" buttonSize="btn--medium" value="SignUp"></Button>
                    </form>
                </section>
                <div className="footer-links">
                    <div className="footer-link-wrapper">
                        <div className="footer-link-items">
                            <h2>About Us</h2>
                            <Link to="/signup">How it works?</Link>
                            <Link to="/services">Services</Link>
                            <Link to="/products">Products</Link>
                            <Link to="/">What you doin</Link>
                        </div>
                        <div className="footer-link-items">
                            <h2>Contacts</h2>
                            <Link to="/signup">How it works?</Link>
                            <Link to="/services">Services</Link>
                            <Link to="/products">Products</Link>
                            <Link to="/">What you doin</Link>
                        </div>
                        <div className="footer-link-items">
                            <h2>Get In Touch</h2>
                            <Link to="/signup">How it works?</Link>
                            <Link to="/services">Services</Link>
                            <Link to="/products">Products</Link>
                            <Link to="/">What you doin</Link>
                        </div>
                        <div className="footer-link-items">
                            <h2>Past Work</h2>
                            <Link to="/signup">How it works?</Link>
                            <Link to="/services">Services</Link>
                            <Link to="/products">Products</Link>
                            <Link to="/">What you doin</Link>
                        </div>
                    </div>
                </div>
                <section className="social-media">
                    <div className="social-media-wrap">
                        <div className="footer-logo">
                            <Link className="social-logo" to="/">
                                TRVL <i className="fab fa-typo3"/>
                            </Link>
                        </div>
                        <small className="website-rights">TRVL <i className="fas fa-copyright" /> 2022</small>
                        <div className="social-icons">
                            <Link to="/" className="social-icon-link-facebook" target="_blank">
                                <i className="fab fa-facebook"></i>
                            </Link>
                            <Link to="/" className="social-icon-link-twitter" target="_blank">
                                <i className="fab fa-twitter"></i>
                            </Link>
                            <Link to="/" className="social-icon-link-instagram" target="_blank">
                                <i className="fab fa-instagram"></i>
                            </Link>
                            <Link to="/" className="social-icon-link-youtube" target="_blank">
                                <i className="fab fa-youtube"></i>
                            </Link>
                            <Link to="/" className="social-icon-link-linkedin" target="_blank">
                                <i className="fab fa-linkedin"></i>
                            </Link>
                            <Link to="/" className="social-icon-link-vimeo" target="_blank">
                                <i className="fab fa-vimeo"></i>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        )
}
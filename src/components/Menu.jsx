import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../components/css/Menu.css";

const Menu = () => {
    const [open, setOpen] = useState(false);

    // 🚫 Disable body scroll when menu open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [open]);

    return (
        <header className="menu-container">
            {/* <div className="logo">MyLogo</div> */}
            <img
                src="https://monzcreativeschool.com/assets/images/logo/monz-creative-school.png"
                alt="Logo"
                className="logo img-fluid"
                style={{ maxHeight: "60px" }}
            />

            {/* Desktop Menu */}
            <nav className="desktop-menu">
                <NavLink to="/" end className="link">Home</NavLink>
                <NavLink to="/about" className="link">About</NavLink>
                <NavLink to="/placement" className="link">Placement</NavLink>
                <NavLink to="/work" className="link">Work</NavLink>
                <NavLink to="/contact" className="link">Contact</NavLink>
                <NavLink to="/careers" className="link">Careers</NavLink>
            </nav>

            {/* Hamburger */}
            <div className={`hamburger ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* Mobile Menu */}
            <nav className={`mobile-menu ${open ? "mobile-open" : ""}`}>
                <div className="mobile-menu-inner">
                    <NavLink to="/" end className="mobile-link" onClick={() => setOpen(false)}>Home</NavLink>
                    <NavLink to="/about" className="mobile-link" onClick={() => setOpen(false)}>About</NavLink>
                    <NavLink to="/placement" className="mobile-link" onClick={() => setOpen(false)}>Placement</NavLink>
                    <NavLink to="/work" className="mobile-link" onClick={() => setOpen(false)}>Work</NavLink>
                    <NavLink to="/contact" className="mobile-link" onClick={() => setOpen(false)}>Contact</NavLink>
                    <NavLink to="/careers" className="mobile-link" onClick={() => setOpen(false)}>Careers</NavLink>

                    {/* Address & Social Icons */}
                    <div className="mobile-address">
                        <h4>Corporate Office</h4>
                        <p>
                            Pumo Technovation,<br />
                            No. 456, Trichy Road,<br />
                            Ramanathapuram,<br />
                            Coimbatore – 641045.<br />
                            Tamil Nadu, India.
                        </p>

                        <a href="tel:+919876543210" className="mobile-contact-line">
                            📞 +91 98765 43210
                        </a>
                        <a href="mailto:info@pumo.com" className="mobile-contact-line">
                            ✉ info@pumo.com
                        </a>

                        <div className="mobile-social">
                            <a href="https://instagram.com" target="_blank">
                                <svg height="22" width="22" viewBox="0 0 24 24">
                                    <path fill="#d90000" d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm5 5c2.2 0 4 1.8 4 4s-1.8 4-4 4a4 4 0 110-8zm5.2-.8a1.2 1.2 0 110-2.4 1.2 1.2 0 010 2.4z" />
                                </svg>
                            </a>
                            <a href="https://facebook.com" target="_blank">
                                <svg height="22" width="22" viewBox="0 0 24 24">
                                    <path fill="#d90000" d="M22 12a10 10 0 10-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.2.2 2.2.2v2.4H15c-1.2 0-1.6.8-1.6 1.6V12H17l-.5 3h-2v7A10 10 0 0022 12z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Menu;

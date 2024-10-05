import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import images from "../../constants/images";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false); // State to track scroll

  const handleClick = () => setClick(!click);
  const close = () => setClick(false);

  // Effect to handle scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`Navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container flex navbar-content">
        <div className="brand-and-toggler flex">
          <Link to="/" alt="" className="navbar-brand text-upper fw-7 fs-22 flex">
            <img
              src="https://res.cloudinary.com/dcir5216l/image/upload/v1727875351/Rangwardhan_Logo_qu3htj.png"
              alt="ranga"
              className="ranga-logo"
            />
            <h3 className="navhead" style={{ fontFamily: "Gotu" }}>
              रंगवर्धन
            </h3>
          </Link>
          <div className="navbar-links">
            <Link to="/" className="nav-link" onClick={close}>
              Home
            </Link>
            <Link to="/about" className="nav-link" onClick={close}>
              About
            </Link>
            <Link to="/events" className="nav-link" onClick={close}>
              Events
            </Link>
            <Link to="/gallery" className="nav-link" onClick={close}>
              Gallery
            </Link>
            <Link to="/natyavardhan" className="nav-link" onClick={close}>
              Natyavardhan
            </Link>
          </div>
          <button type="button" className="navbar-show-btn" onClick={handleClick}>
            <FaBars size={26} />
          </button>
        </div>

        <div className={`navbar-collapse flex flex-center ${click ? "show-navbar" : ""}`}>
          <button type="button" className="navbar-hide-btn" onClick={close}>
            <FaTimes size={32} />
          </button>

          <ul className="navbar-nav text-upper fw-6 ls-1 fs-2 text-center">
            <li className="nav-item">
              <img src={images.Rangwardhan_logo} className="navbar-image vert-move" alt="" />
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={() => close()}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" onClick={() => close()}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/events" className="nav-link" onClick={close}>
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/team" className="nav-link" onClick={close}>
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/gallery" className="nav-link" onClick={close}>
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sponsors" className="nav-link" onClick={close}>
                Sponsors
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/natyavardhan" className="nav-link" onClick={close}>
                Natyavardhan
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

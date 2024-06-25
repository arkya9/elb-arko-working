import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import WbLogoSvg from "./WbLogoSvg";
import { FaUser } from "react-icons/fa6";
import { IoChevronDown } from "react-icons/io5";
import useTheme from "../../../contexts/theme";

const WbTopnav = () => {
  const { ThemeMode, darkTheme, lightTheme } = useTheme();
  const chengeBtn = (e) => {
    const btnstatus = e.currentTarget.checked;
    if (btnstatus) darkTheme();
    else lightTheme();
  };
  const [hover, setHover] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const chevronStyle = {
    transition: "transform 0.3s ease-in-out",
    transform: hover ? "rotate(180deg)" : "rotate(0deg)",
  };

  return (
    <header className={`header-primary ${isSticky ? "sticky" : ""}`}>
      <div className="container">
        <nav className="navbar navbar-expand-xl justify-content-between headertop">
          <WbLogoSvg />
          <form>
            <div className="hero-form-wrapper bg-white d-flex position-relative">
              <div>
                <select className="form-select shadow-none">
                  <option value="0">All Categories</option>
                  <option value="1">Animation</option>
                  <option value="2">Web Design</option>
                  <option value="3">Graphics</option>
                </select>
              </div>
              <div>
                <input
                  type="text"
                  className="form-control shadow-none"
                  placeholder="Search for any service..."
                />
                <button className="hero-form-btn position-absolute">
                  <svg
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
                      stroke="#F2F2F2"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18 17L14 13"
                      stroke="#F2F2F2"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Search
                </button>
              </div>
            </div>
          </form>
          <div className="navbar-right d-flex align-items-center gap-4">
            <div className="user_location">
              <i className="fa-solid fa-location-dot"></i>
              <h6 className="fw-bold">Location</h6>
            </div>
            <div className="align-items-center d-none d-lg-flex">
              <a href="signin.html" className="w-btn-secondary-lg">
                <FaUser size={14} style={{ borderRadius: "50%" }} />
                Login
              </a>
            </div>
            <button
              className="navbar-toggler d-block d-xl-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span></span>
            </button>
            <div className="form-check form-switch">
              <input
                type="checkbox"
                className="form-check-input"
                id="themeSwitch"
                onChange={chengeBtn}
                checked={ThemeMode === "dark"}
              />
             
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default WbTopnav;

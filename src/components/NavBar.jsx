import React from "react";
import { Link, Element } from "react-scroll";
import logo from "../assets/icons/logo.png";
import { WiDayLightning } from "react-icons/wi";
import { WiNightAltLightning } from "react-icons/wi";
import { ThemeContext } from "../App";
import { useContext } from "react";

const handleNavLinkClick = () => {
  const nav = document.querySelector(".navbar-collapse");
  if (nav && nav.classList.contains("show")) {
    const bsCollapse = new window.bootstrap.Collapse(nav, { toggle: false });
    bsCollapse.hide();
  }
};

const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <nav
        className="custom-gradient navbar navbar-expand-lg fixed-top "
        data-bs-theme={theme}
      >
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to="heroBanner"
            onClick={handleNavLinkClick}
            spy={true}
            smooth={true}
            duration={500}
          >
            <img
              src={logo}
              alt="Logo"
              width="62"
              height="56"
              className="d-inline-block align-text-center fs-1"
            />

            <b> KAVISHREE</b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="heroBanner"
                  onClick={handleNavLinkClick}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="Aboutme"
                  onClick={handleNavLinkClick}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  About Me
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  style={{ textdecoration: "none", color: "inherit" }}
                  role="button"
                  onClick={handleNavLinkClick}
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Skill Sets
                </Link>
                <ul className="dropdown-menu" data-bs-theme="default">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="Badges"
                      onClick={handleNavLinkClick}
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      Badges
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="Projects"
                      onClick={handleNavLinkClick}
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      Projects
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="SoftSkills"
                  onClick={handleNavLinkClick}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Soft Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="Contact"
                  onClick={handleNavLinkClick}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <button
            className="btn btn-dark weather-icon rounded-circle "
            onClick={toggleTheme}
            style={{
              width: "50px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bottom: "20px",
              right: "20px",
              zIndex: "1000",
            }}
          >
            {theme === "dark" ? (
              <WiDayLightning className="big-icon" />
            ) : (
              <WiNightAltLightning className="big-icon" />
            )}
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

import { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Menu = () => {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#wgpt-3">What is GHT3?</a>
      </p>
      <p>
        <a href="#possibility">Open AI</a>
      </p>
      <p>
        <a href="#features">Case Studies</a>
      </p>
      <p>
        <a href="#blog">Library</a>
      </p>
    </>
  );
};

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" width="62.56" height="16.02" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        )}

        {toggleMenu && (
          <div className="gpt3__navbar_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
              <div className="gpt3__navbar-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

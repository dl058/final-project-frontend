import { useState } from "react";
import "./Header.css";
import { signInWithGoogle, signOutOfGoogle } from "../firebaseConfig";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Header = () => {
  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="header">
      <Link to={"/"} className="logo-container">
        <img src={logo} alt="unPlan'd Adventure Logo" className="logo" />
        <h1>
          {" "}
          u<span className="highlighted">nP</span>lan'd Adventure{" "}
        </h1>
      </Link>
      {isOpen ? (
        <ul className="dropdown">
          <li>
            <Link to="/">
              <i className="fa-solid fa-house"></i> Home
            </Link>
          </li>
          <li>
            <Link to="/events">
              <i className="fa-solid fa-calendar"></i> Events
            </Link>
          </li>
          <li>
            <Link to="/favorites">
              <i className="fa-solid fa-heart"></i> Favorites
            </Link>
          </li>
          <li>
            {" "}
            {user === null ? (
              <button onClick={signInWithGoogle} className="signBtn">
                Sign In
              </button>
            ) : (
              <>
                <button onClick={signOutOfGoogle} className="signBtn">
                  Sign Out
                </button>
              </>
            )}
          </li>
        </ul>
      ) : null}
      {user !== null && (
        <>
          <p>Welcome, {user?.displayName}</p>
        </>
      )}
      <i className="fa-solid fa-bars" onClick={toggleDropDown}></i>
    </header>
  );
};

export default Header;

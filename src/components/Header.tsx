import { useState } from "react";
import "./Header.css";
import { signInWithGoogle, signOutOfGoogle } from "../firebaseConfig";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="header">
      <Link to={"/"}>
        <h1> unPlanned Adventure </h1>
      </Link>
      {isOpen ? (
        <ul className="dropdown">
          <li>
            <Link to="/">Home</Link>
          </li>
          <Link to="/events">
            <li>Events</li>
          </Link>
          <Link to="/favorites">
            <li>Favorites</li>
          </Link>
          <Link to="/search">
            <li>Search</li>
          </Link>
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

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
      <img
        src="src/assets/threeLines.png"
        alt="lines"
        onClick={toggleDropDown}
      />
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
          <li>
            {" "}
            {user === null ? (
              <button onClick={signInWithGoogle}>Sign In</button>
            ) : (
              <>
                <button onClick={signOutOfGoogle}>Sign Out</button>
              </>
            )}
          </li>
        </ul>
      ) : null}
      {user !== null ? (
        <>
          <p>Welcome, {user?.displayName}</p>
        </>
      ) : (
        <p></p>
      )}
    </header>
  );
};

export default Header;

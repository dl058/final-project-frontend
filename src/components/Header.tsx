import { useLayoutEffect, useState } from "react";
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
            <Link to="/">
              <h1>Home</h1>
            </Link>
          </li>
          <li>Events</li>
          <li>
            {" "}
            {user === null ? (
              <button onClick={signInWithGoogle}>Sign In</button>
            ) : (
              <>
                <p>Welcome, {user?.displayName}</p>
                <img src={user.photoURL || ""} alt={user.displayName || ""} />
                <button onClick={signOutOfGoogle}>Sign Out</button>
              </>
            )}
          </li>
        </ul>
      ) : null}
    </header>
  );
};

export default Header;

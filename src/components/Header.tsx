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
          <li>Preferences</li>
          <li>Sign Up</li>
        </ul>
      ) : null}

      <Link to="/">
        <h1>Unplanned Adventure</h1>
      </Link>
      {user === null ? (
        <button onClick={signInWithGoogle}>Sign In</button>
      ) : (
        <>
          <p>Welcome, {user?.displayName}</p>
          <img src={user.photoURL || ""} alt={user.displayName || ""} />
          <button onClick={signOutOfGoogle}>Sign Out</button>
        </>
      )}
    </header>
  );
};

export default Header;

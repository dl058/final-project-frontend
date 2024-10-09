import { Link } from "react-router-dom";
import "./Header.css";
import { signInWithGoogle, signOutOfGoogle } from "../firebaseConfig";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <header className="Header">
      <Link to="/">
        <h2>Unplanned Adventures</h2>
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

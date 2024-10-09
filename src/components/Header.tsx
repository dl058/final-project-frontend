import { useLayoutEffect, useState } from "react";
import "./Header.css";

const Header = () => {
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
    </header>
  );
};

export default Header;

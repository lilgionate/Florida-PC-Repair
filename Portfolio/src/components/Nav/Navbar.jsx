import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./navbar.scss";
import { navItems } from "./NavItems";
import Button from "./Button";
import WalkInDropdown from "./WalkInDropdown";
import MailInDropdown from "./MailInDropdown";
import ITSupportDropdown from "./ITSupportDropdown";
import WarrantyDropdown from "./WarrantyDropdown";

function Navbar() {
  const [walkInDropdown, setWalkInDropdown] = useState(false);
  const [mailInDropdown, setMailInDropdown] = useState(false);
  const [itSupportDropdown, setITSupportDropdown] = useState(false);
  const [warrantyDropdown, setWarrantyDropdown] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleWalkInHover = () => {
    setWalkInDropdown(true);
    setMailInDropdown(false);
    setITSupportDropdown(false);
    setWarrantyDropdown(false);
  };

  const handleMailInHover = () => {
    setMailInDropdown(true);
    setWalkInDropdown(false);
    setITSupportDropdown(false);
    setWarrantyDropdown(false);
  };

  const handleITSupportHover = () => {
    setITSupportDropdown(true);
    setWalkInDropdown(false);
    setMailInDropdown(false);
    setWarrantyDropdown(false);
  };

  const handleWarrantyHover = () => {
    setWarrantyDropdown(true);
    setWalkInDropdown(false);
    setMailInDropdown(false);
    setITSupportDropdown(false);
  };

  const handleMouseLeave = () => {
    setWalkInDropdown(false);
    setMailInDropdown(false);
    setITSupportDropdown(false);
    setWarrantyDropdown(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="http://localhost:5173/" className="navbar-logo">
            <img src={logo} alt="" />
          </Link>
          <div className="menu-icons" onClick={handleClick}>
            <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={clicked ? "nav-menu active" : "nav-menu"}>
            {navItems.map((item) => {
              if (item.title === "Walk-In Services") {
                return (
                  <li
                    key={item.id}
                    className={item.cName}
                    onMouseEnter={handleWalkInHover}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link to={item.path}>{item.title}</Link>
                    {walkInDropdown && <WalkInDropdown />}
                  </li>
                );
              } else if (item.title === "Mail-In & Messenger Service") {
                return (
                  <li
                    key={item.id}
                    className={item.cName}
                    onMouseEnter={handleMailInHover}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link to={item.path}>{item.title}</Link>
                    {mailInDropdown && <MailInDropdown />}
                  </li>
                );
              } else if (item.title === "IT Support") {
                return (
                  <li
                    key={item.id}
                    className={item.cName}
                    onMouseEnter={handleITSupportHover}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link to={item.path}>{item.title}</Link>
                    {itSupportDropdown && <ITSupportDropdown />}
                  </li>
                );
              } else if (item.title === "Warranty Sign-up") {
                return (
                  <li
                    key={item.id}
                    className={item.cName}
                    onMouseEnter={handleWarrantyHover}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link to={item.path}>{item.title}</Link>
                    {warrantyDropdown && <WarrantyDropdown />}
                  </li>
                );
              }
              return (
                <li key={item.id} className={item.cName}>
                  <Link className="nav-links" to={item.path}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
            <li>
              <Button />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
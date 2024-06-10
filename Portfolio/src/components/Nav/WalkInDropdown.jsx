import React, { useState } from "react";
import { walkInDropdown } from "./NavItems";
import { Link } from "react-router-dom";
import "./Dropdown.css";

function WalkInDropdown() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={dropdown ? "submenu clicked" : "submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {walkInDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link to={item.path} className={item.className} onClick={() => setDropdown(false)}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default WalkInDropdown;
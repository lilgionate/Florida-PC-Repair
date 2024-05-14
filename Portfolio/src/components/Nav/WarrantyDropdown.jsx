import React, { useState } from "react";
import { warrantyDropdown } from "./NavItems";
import { Link } from "react-router-dom";
import "./Dropdown.css";

function WarrantyDropdown() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={dropdown ? "submenu clicked" : "submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {warrantyDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link to={item.path} className={item.cName} onClick={() => setDropdown(false)}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default WarrantyDropdown;
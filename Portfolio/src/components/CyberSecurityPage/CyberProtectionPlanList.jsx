import React from "react";
import "./CyberSecurityPage.scss";

const SecurityListItem = ({ text }) => {
    return (
      <li className="cyber-security-list-item">
        <i className="fa-solid fa-check cyber-security-icon" />
        <span>{text}</span>
      </li>
    );
  };
  
  export default SecurityListItem;
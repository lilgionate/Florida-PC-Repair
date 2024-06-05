import React from "react";
import "./CyberSecurityPage.scss";

const SecurityListItem = ({ text }) => {
  const checkIconUrl = 'https://placehold.co/20x20';
    return (
      <li className="cyber-security-list-item">
        <img aria-hidden="true" alt="check" src={checkIconUrl} className="cyber-security-icon" />
        <span>{text}</span>
      </li>
    );
  };
  
  export default SecurityListItem;
import React from "react";
import './MailinServiceRep.scss';

const ShippingNotes = ({ title, content }) => {
    return (
      <li className="notes-content">
        <i className="notes-check fa-solid fa-check"></i>
        <div>
          <p className="text-notes-title">{title}</p>
          <p className="text-notes-content">{content}</p>
        </div>
      </li>
    );
  };
  
export default ShippingNotes;
import React from 'react';
import "./finance.scss";

const Modal = ({ description}) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <p className='modal-des'>{description}</p>
        <p className='modal-btn'>Get Started</p>
      </div>
    </div>
  );
};

export default Modal;
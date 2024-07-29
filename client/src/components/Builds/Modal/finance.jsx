
import PropTypes from 'prop-types';
import "./finance.scss";

const Modal = ({ description }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <p className='modal-des'>{description}</p>
        <p className='modal-btn'>Get Started</p>
      </div>
    </div>
  );
};

Modal.propTypes = {
  description: PropTypes.string.isRequired
};

export default Modal;

import './MailinServiceRep.scss';
import PropTypes from 'prop-types';

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

ShippingNotes.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};
  
export default ShippingNotes;

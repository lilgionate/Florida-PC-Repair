import PropTypes from 'prop-types';
import "./CyberSecurityPage.scss";

const SecurityListItem = ({ text }) => {
    return (
      <li className="cyber-security-list-item">
        <i className="fa-solid fa-check cyber-security-icon" />
        <span>{text}</span>
      </li>
    );
};

SecurityListItem.propTypes = {
    text: PropTypes.string.isRequired, // Define the prop type for 'text'
};

export default SecurityListItem;

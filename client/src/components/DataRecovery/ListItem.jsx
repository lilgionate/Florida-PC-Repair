import PropTypes from 'prop-types';
import './DataRecoveryServices.scss';

export const ListItem = ({ text }) => {
    return (
        <li className="data-items">
            <span className="data-items-checkmark">{'\u2714'}</span>
            <span className="data-items-text">{text}</span>
        </li>
    );
};

// Define prop types for the component
ListItem.propTypes = {
    text: PropTypes.string.isRequired,  // `text` should be a string and is required
};

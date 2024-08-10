import PropTypes from 'prop-types';
import './DataRecoveryServices.scss';

export const ServiceCard = ({ title, description, image, alt }) => (
    <div className="cardClasses">
        <img src={image} alt={alt} className="fullCard" />
        <h3 className="text-card">{title}</h3>
        <p>{description}</p>
    </div>
);

// Define prop types for the component
ServiceCard.propTypes = {
    title: PropTypes.string.isRequired,        // `title` should be a string and is required
    description: PropTypes.string.isRequired,  // `description` should be a string and is required
    image: PropTypes.string.isRequired,        // `image` should be a string (URL) and is required
    alt: PropTypes.string.isRequired,          // `alt` should be a string and is required
};

export default ServiceCard;
import './MacRepairs.scss'; 
import PropTypes from 'prop-types';

const MacServiceCard = ({ image, altText, title, priceRange, linkUrl }) => {
    return (
        <div className="mac-services-price-cards">
            <img src={image} alt={altText} className="mac-services-price-img" />
            <div className="mt-4">
                <a href={linkUrl}>
                    <h3 className="mac-services-price-title">{title}</h3>
                </a>
                <p className="mac-services-price">Price Range: {priceRange}</p>
            </div>
        </div>
    );
};

MacServiceCard.propTypes = {
    image: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    priceRange: PropTypes.string.isRequired,
    linkUrl: PropTypes.string.isRequired,
};

export default MacServiceCard;

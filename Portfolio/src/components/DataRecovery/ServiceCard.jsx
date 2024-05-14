import './DataRecoveryServices.scss';

export const ServiceCard = ({ title, description, image, alt }) => (
    <div className="cardClasses">
        <img src={image} alt={alt} className="fullCard" />
        <h3 className="text-card">{title}</h3>
        <p>{description}</p>
    </div>
);

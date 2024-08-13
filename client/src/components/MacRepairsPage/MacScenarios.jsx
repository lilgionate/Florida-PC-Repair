import './MacRepairs.scss'; 
import PropTypes from 'prop-types';

const MacScenarios = ({ title, description }) => {
    return (
        <div className="scenarios-card-container">
            <h2 className="scenarios-title">{title}</h2>
            <p className="scenarios-text">{description}</p>
        </div>
    );
};

MacScenarios.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default MacScenarios;

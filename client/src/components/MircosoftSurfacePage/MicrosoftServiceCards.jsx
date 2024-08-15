import PropTypes from 'prop-types';
import './MicrosoftSurfaceRep.scss';

const MicrosoftScenarios = ({ title, description }) => {
    return (
        <div className="Microsoft-card-container">
            <h2 className="Microsoft-title">{title}</h2>
            <p className="Microsoft-text">{description}</p>
        </div>
    );
};

MicrosoftScenarios.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default function MicrosoftServiceCards() {
  return (
    <div className="Microsoft-service-container">
            <h2 className="Microsoft-title-header">Why are we better than your typical Microsoft Surface repair FL shop?</h2>
            <div className="Microsoft-service-grid">
                <MicrosoftScenarios
                    title="Fast diagnostic"
                    description="You need your Microsoft Surface back ASAP.  We get that."
                />
                <MicrosoftScenarios
                    title="Most affordable pricing in FL"
                    description="You won’t find it cheaper elsewhere."
                />
                <MicrosoftScenarios
                    title="Satisfaction guaranteed"
                    description="You’ll receive a 30-day warranty to guard against any defects and issues. Not happy with our service? Don’t pay a dime."
                />
                <MicrosoftScenarios
                    title="Best Microsoft Surface repair in FL"
                    description="Best parts? Yes! Cheapest? Check! Fastest? Yup! Best customer service? No doubt! Need we say more?!"
                />
                <MicrosoftScenarios
                    title="Done right the first time. All done in-house."
                    description="We’ve repaired Microsoft Surface tablets since they first came out.  We take pride in performing all Surface repairs in-house.  No need to ship it out to Microsoft."
                />
            </div>
        </div>
  );
}

import './CyberSecurityPage.scss';
import PropTypes from 'prop-types';

const Feature = ({ title, description, titleClass, descriptionClass }) => {
  return (
    <div>
      <h2 className={titleClass}>{title}</h2>
      <p className={descriptionClass}>{description}</p>
    </div>
  );
};

Feature.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  titleClass: PropTypes.string.isRequired,
  descriptionClass: PropTypes.string.isRequired,
};

const FeatureList = () => {
  return (
    <div className="cyber-timeline-grid-container">
      <Feature
        title="The Traditional Way"
        description="Install multiple software applications on your own that slow down your computer. Pay as you go."
        titleClass="cyber-timeline-header-text-title"
        descriptionClass="cyber-timeline-header-text-title-des"
      />
      <Feature
        title="The Florida PC Support Way!"
        description="Our security team installs everything for you and takes care of you any time for one monthly fee."
        titleClass="cyber-timeline-header-text-title-two"
        descriptionClass="cyber-timeline-header-text-title-des-two"
      />
    </div>
  );
};

export default FeatureList;

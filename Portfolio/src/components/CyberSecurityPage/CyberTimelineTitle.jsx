import React from 'react';
import './CyberSecurityPage.scss';

const Feature = ({ title, description, titleClass, descriptionClass }) => {
  return (
    <div>
      <h2 className={titleClass}>{title}</h2>
      <p className={descriptionClass}>{description}</p>
    </div>
  );
};

const FeatureList = () => {
  return (
    <div className="cyber-timeline-header-text">
      <div className="cyber-timeline-header-text-one">
        <Feature
          title="The Traditional Way"
          description="Install multiple software applications on your own that slow down your computer. Pay as you go."
          titleClass="cyber-timeline-header-title-one"
          descriptionClass="cyber-timeline-header-description-one"
        />
      </div>
      <div className="cyber-timeline-header-text-two">
        <Feature
          title="The Florida PC Support Way!"
          description="Our security team installs everything for you and takes care of you any time for one monthly fee."
          titleClass="cyber-timeline-header-title-two"
          descriptionClass="cyber-timeline-header-description-two"
        />
      </div>
    </div>
  );
};

export default FeatureList;

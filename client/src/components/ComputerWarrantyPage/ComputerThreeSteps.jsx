
import './ComputerWarrantyPage.scss';

const EasySteps = () => {
  return (
    <div className="computer-steps-container">
      <h2 className="computer-steps-title">3 easy steps</h2>
      <div className="computer-steps-grid">
        <StepCard stepNumber="1" stepSub="Start service" stepText="Visit us OR contact us to perform remote service OR mail in your device." />
        <StepCard stepNumber="2" stepSub="Receive diagnostic" stepText="Get upfront repairs needed along with any recommendations and extra costs. " />
        <StepCard stepNumber="3" stepSub="Choose Plan" stepText="Choose from one of the Tech Protection Plans. Then, we will repair your device." />
      </div>
    </div>
  );
};

const StepCard = ({ stepNumber, stepText, stepSub }) => {
  return (
    <div className="computer-step-card">
      <h3 className="computer-step-card-title">STEP {stepNumber}</h3>
      <h4 className="computer-step-card-subtitle">{stepSub}</h4>
      <p className="computer-step-card-text">{stepText}</p>
    </div>
  );
};

export default EasySteps;

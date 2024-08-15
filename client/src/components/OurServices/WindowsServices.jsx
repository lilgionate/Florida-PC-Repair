import PropTypes from 'prop-types';
import './OurServices.scss';

import BrokenScreen from '../../assets/BrokenLaptopScreen.jpg';
import WindowsDataRecovery from '../../assets/DataRecovery-1.jpg';
import PCWontStart from '../../assets/PCWontStart-1.jpg';
import SlowPCIssue from '../../assets/SlowPCIssues.jpg';
import PCHardDriveRep from '../../assets/PCHardDriveRepair.jpg';
import LaptopSpill from '../../assets/LaptopSpillRepair.jpg';

const WindowsServices = () => {
  return (
    <div className="windows-services-container">
      <div className="windows-services-header">
        <h2 className="windows-services-title">Fixing all Windows / PC issues</h2>
        <p className="windows-services-subtitle">Repairing laptops, desktops, PCs, custom gaming machines, all-in-ones, and tablets.</p>
      </div>
      <div className="windows-services-cards">
        <WindowsServicesCard image={BrokenScreen} alt="Broken Laptop Screen" title="Broken Laptop Screen" />
        <WindowsServicesCard image={WindowsDataRecovery} alt="Windows Data Recovery" title="Windows Data Recovery" />
        <WindowsServicesCard image={PCWontStart} alt="PC Won't Start" title="PC Won't Start" />
        <WindowsServicesCard image={SlowPCIssue} alt="Slow PC Issues" title="Slow PC Issues" />
        <WindowsServicesCard image={PCHardDriveRep} alt="PC Hard Drive Repair" title="PC Hard Drive Repair" />
        <WindowsServicesCard image={LaptopSpill} alt="Laptop Spill Repair" title="Laptop Spill Repair" />
      </div>
    </div>
  );
};

const WindowsServicesCard = ({ image, alt, title }) => {
  return (
    <div className="windows-services-card">
      <img src={image} alt={alt} className="windows-services-card-image" />
      <p className="windows-services-card-title">{title}</p>
    </div>
  );
};

WindowsServicesCard.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default WindowsServices;

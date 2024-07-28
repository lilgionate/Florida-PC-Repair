import "./DataRecoveryServices.scss";
import Feature from "./DataBottom-Cards";
import DataBG from "../../assets/HDD-Disk.jpg";

const DataBottomButtons = () => {
  const mailIcon = <i className="fa-solid fa-truck-fast data-hero-icon"></i>;
  const storeIcon = <i className="fa fa-store-alt data-hero-icon"></i>;

  return (
    <div className="data-hero-container">
      <img src={DataBG} alt="Data Recovery" className="data-hero-bg" /> 
      <Feature
        icon={mailIcon}
        title="Mail-in Your Device"
        description="Simply make a shipping request and mail in your device to have your data recovered."
        buttonText="Make A Shipping Request"
      />
      <Feature
        icon={storeIcon}
        title="Visit Us At Our Store"
        description="Walk in at your convenience. Accepting walk-ins and scheduled appointments."
        buttonText="Visit Us Now!"
      />
    </div>
  );
};

export default DataBottomButtons;


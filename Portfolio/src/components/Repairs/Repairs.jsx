
import ITSupport from "../../assets/ITSupport.jpg";
import "./repairs.scss";

function Repairs() {
  return (
    <div className="repairs-container">
      <div className="repairs-content">
        <h2 className="officeIT-title">Office IT Support</h2>
        <p className="officeIT-des">Outsourced & Onsite Solutions</p>
        <div className="repairs-list-container">
          <div className="repairs-list">
              <li>Daily or Weekly Support</li>          
              <li>Computer Tech Recruitment</li>  
              <li>Fill-in Tech Coverage</li>   
              <li>Scheduled Maintenance</li>     
              <li>Bulk Hardware Repair</li>             
              <li>Monthly Device Warranty</li>     
              <li>Network Cabling</li>
              <li>New Office Setup</li>
              <li>Special Project</li>
              <li>Remote Support</li>
          </div>
        </div>
      </div>
      <div className="repairscard">
        <div className="r-card">
          <div className="r-image">
            <img src={ITSupport} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Repairs;
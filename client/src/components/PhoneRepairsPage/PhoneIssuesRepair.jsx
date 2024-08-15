import './PhoneTabletRepairs.scss';

import Check2 from '../../assets/check2.jpg'

const commonIssues = [
    "Battery Replacement",
    "Camera Repair",
    "Charging Port Repair",
    "Headphone Jack Repair",
    "Sound Repair",
    "Water Spill Repair",
    "Screen Replacement",
    "Power Button Replacement",
];

const CommonIssuesList = () => {
    return (
        <div className='phone-support-container'>
            <h2 className="phone-supported-header">Common Phone Repair Issues That We Handle</h2>
            <div className="phone-supported-issues-list">
               <div>
                   {commonIssues.slice(0, 4).map((issue, index) => (
                       <p key={index}><span className="phone-issues-text"><img src={Check2} alt="" className='phone-check'/></span> {issue}</p>
                   ))}
               </div>
               <div>
                   {commonIssues.slice(4).map((issue, index) => (
                       <p key={index}><span className="phone-issues-text"><img src={Check2} alt="" className='phone-check'/></span> {issue}</p>
                   ))}
               </div>
            </div>
        </div>
    );
};


export default CommonIssuesList;

import React from 'react'; 
import './MailinServiceRep.scss';

import MailinRep from '../../assets/mail-in-repair.avif';

import Step from './MailinTimeline';


const PcRepairPage = () => {
    return (
    <>
        <div className="MailRepairContainer">
            <div className="MailRepairsContent">
                <h1 className="MailRepairsTitle">Nationwide Mail-in Repair & Recyling</h1>
                <p className="MailRepairsDes">
                  Now, you can get Florida's best tech repair service wherever you are in the United States.
                </p>
                <p className="MailRepairsDes">
                Best of all, we’ll ship you a free shipping box and label for your laptop, tablet, phone, hard drive, or other small device.  Convenient.  Easy.  No out of pocket cost to you.
                </p>
                <button className="MailRepairsButton">
                    Book Now
                </button>
            </div>
            <div className="MailRepairsImg">
                <img src={MailinRep} alt="Pc Repair Image" className='MailImg'/>
            </div>
        </div>

        <div className="steps-wrapper">
      <div className="steps-content">
        <div className="steps-line"></div>
        <Step
          stepNumber={1}
          title="Fill out the form below"
          subtitle="Complete the form. You’ll be emailed confirmation of your form."
          description={[]}
        />
        <Step
          stepNumber={2}
          title="Receive free shipping label and free shipping box"
          subtitle="Upon requesting a free shipping label, you will receive a label via email. Also, upon requesting a free shipping box, you will receive a box within 2 days to your address."
          description={[
            "If you prefer to use your own box or label, please leave the appropriate box unchecked.",
            "Please note the free label and box is for United States residents only and applies to laptops or smaller devices."
          ]}
          imgSrc="https://placehold.co/24/0000FF/FFFFFF?text=2"
        />
      </div>
    </div>
    </>
)};


export default PcRepairPage;
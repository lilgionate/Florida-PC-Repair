import React, { useEffect, useState } from 'react';
import './MailinServiceRep.scss';
import MailinRep from '../../assets/mail-in-repair.avif';
import Step from './MailinTimeline';

const PcRepairPage = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const getLineHeight = () => {
        if (scrollProgress > 83) return '100%';
        if (scrollProgress > 72) return '93%';
        if (scrollProgress > 61) return '76%';
        if (scrollProgress > 47) return '57%';
        if (scrollProgress > 31) return '32%';
        if (scrollProgress > 19) return '10%';
        return '0%';
      };

      useEffect(() => {
        document.documentElement.style.setProperty('--progress-height', getLineHeight());
      }, [scrollProgress]);
    

  return (
    <>
      <div className="MailRepairContainer">
        <div className="MailRepairsContent">
          <h1 className="MailRepairsTitle">Nationwide Mail-in Repair & Recycling</h1>
          <p className="MailRepairsDes">Now, you can get Florida's best tech repair service wherever you are in the United States.</p>
          <p className="MailRepairsDes">Best of all, we’ll ship you a free shipping box and label for your laptop, tablet, phone, hard drive, or other small device. Convenient. Easy. No out of pocket cost to you.</p>
          <button className="MailRepairsButton">Book Now</button>
        </div>
        <div className="MailRepairsImg">
          <img src={MailinRep} alt="Pc Repair Image" className='MailImg'/>
        </div>
      </div>

      <div className="steps-wrapper">
        <h2 className='steps-title'>Our Device Mail-in Process</h2>
        <div className="steps-content">
        <div className="steps-line"></div>
          <Step       
            stepNumber={1}
            title="Fill out the form below"
            subtitle="Complete the form. You’ll be emailed confirmation of your form."
            description={[]}
            isActive={scrollProgress > 19}
          />
          <Step
            stepNumber={2}
            title="Receive free shipping label and free shipping box"
            subtitle="Upon requesting a free shipping label, you will receive a label via email. Also, upon requesting a free shipping box, you will receive a box within 2 days to your address."
            description={[
              "If you prefer to use your own box or label, please leave the appropriate box unchecked.",
              "Please note the free label and box is for United States residents only and applies to laptops or smaller devices."
            ]}
            isActive={scrollProgress > 31}
          />
          <Step
            stepNumber={3}
            title="Ship out your box"
            subtitle="Upon receiving the box, include your device and affix the emailed shipping label."
            description={[
              "Address to ship to is:",
            ]}
            title2="Florida PC Support"
            subtitle2="ATT: Mail-in Department
            198 West 21th Street, Suite 721 New York NY 10016"
            isActive={scrollProgress > 47}
          />
          <Step
            stepNumber={4}
            title="Receive a free diagnostic or free recycling"
            subtitle="Upon receipt, we’ll create a ticket during the intake process. You’ll receive an e-receipt of this. Then, expect a free diagnostic, relaying the cost for your approval before we begin the repair.  Or if you choose to recycle your laptop, we will send you a receipt once done."
            description={[]}
            isActive={scrollProgress > 61}
          />
          <Step
            stepNumber={5}
            title="Device is repaired. Or device is recycled if preferred."
            subtitle="Upon approval, we’ll repair your device. You’ll receive a message when it’s completed. "
            description={[]}
            isActive={scrollProgress > 72}
          />
          <Step
            stepNumber={6}
            title="Payment is due for approved computer repair"
            subtitle="You’ll receive an invoice via email through our ticketing system. Pay the repair charge online. "
            description={[
              "Additionally, the return shipping fee is $25. Heavier, larger equipment may carry extra costs as deemed by the carrier."
            ]}
            isActive={scrollProgress > 83}
          />
        </div>
      </div>
    </>
  );
};

export default PcRepairPage;

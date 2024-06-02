import React, { useEffect, useState } from 'react';
import './CyberSecurityPage.scss';

import Step from './CyberTimelineUno';

export default function CyberTimeline() {
  const [highlightedStep, setHighlightedStep] = useState(-1);

    useEffect(() => {
      const handleScroll = () => {
        const winHeight = window.innerHeight;
        const halfwayPoint = winHeight * 0.7;
        const steps = document.querySelectorAll('.step-icon-uno');
        console.log(steps);
        let activeStepIndex = -1;
  
        steps.forEach((step, index) => {
          const rect = step.getBoundingClientRect();
          if (rect.top <= halfwayPoint) {
            activeStepIndex = index;
          }
        });
  
        if (activeStepIndex !== null && activeStepIndex !== highlightedStep) {
          setHighlightedStep(activeStepIndex);
        }
  
        const progress = ((activeStepIndex + 1) / steps.length) * 100;
        document.querySelector('.steps-line-uno').style.height = progress + '%';
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [highlightedStep]);
  return (
    <div className="steps-wrapper-uno">
        <div className="steps-content-uno">
          <div className="steps-line-container-uno">
            <div className="steps-line-uno"></div>
          </div>
          <div className={`step-container-uno ${highlightedStep === 0 ? 'highlight' : ''}`}>
            <Step
              stepNumber={1}
              title="Fill out the form below"
              subtitle="Complete the form. You’ll be emailed confirmation of your form."
              description={[]}
              isActive={highlightedStep === 0}
            />
          </div>
          <div className={`step-container-uno ${highlightedStep === 1 ? 'highlight' : ''}`}>
            <Step
              stepNumber={2}
              title="Receive free shipping label and free shipping box"
              subtitle="Upon requesting a free shipping label, you will receive a label via email. Also, upon requesting a free shipping box, you will receive a box within 2 days to your address."
              description={[
                "If you prefer to use your own box or label, please leave the appropriate box unchecked.",
                "Please note the free label and box is for United States residents only and applies to laptops or smaller devices."
              ]}
              isActive={highlightedStep === 1}
            />
          </div>
          <div className={`step-container-uno ${highlightedStep === 2 ? 'highlight' : ''}`}>
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
              isActive={highlightedStep === 2}
            />
          </div>
          <div className={`step-container-uno ${highlightedStep === 3 ? 'highlight' : ''}`}>
            <Step
              stepNumber={4}
              title="Receive a free diagnostic or free recycling"
              subtitle="Upon receipt, we’ll create a ticket during the intake process. You’ll receive an e-receipt of this. Then, expect a free diagnostic, relaying the cost for your approval before we begin the repair. Or if you choose to recycle your laptop, we will send you a receipt once done."
              description={[]}
              isActive={highlightedStep === 3}
            />
          </div>
          <div className={`step-container-uno ${highlightedStep === 4 ? 'highlight' : ''}`}>
            <Step
              stepNumber={5}
              title="Device is repaired. Or device is recycled if preferred."
              subtitle="Upon approval, we’ll repair your device. You’ll receive a message when it’s completed."
              description={[]}
              isActive={highlightedStep === 4}
            />
          </div>
          <div className={`step-container-uno ${highlightedStep === 5 ? 'highlight' : ''}`}>
            <Step
              stepNumber={6}
              title="Payment is due for approved computer repair"
              subtitle="You’ll receive an invoice via email through our ticketing system. Pay the repair charge online."
              description={[
                "Additionally, the return shipping fee is $25. Heavier, larger equipment may carry extra costs as deemed by the carrier."
              ]}
              isActive={highlightedStep === 5}
            />
          </div>
        </div>
      </div>
  )
}

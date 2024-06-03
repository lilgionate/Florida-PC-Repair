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
              title="REACTIVE VIRUS PROTECTION"
              subtitle="Reactively attempt to remove viruses"
              description={['Got a virus?  Pay out of pocket for a security company to remove it for each virus outbreak.']}
              isActive={highlightedStep === 0}
            />
          </div>
          <div className={`step-container-uno ${highlightedStep === 1 ? 'highlight' : ''}`}>
            <Step
              title="LOTS OF EXTRA FEES"
              subtitle="Pay extra for firewall & security protection"
              description={[
                'Typically, firewall, VPN, pop-up blockers and other apps are extra costs.'
              ]}
              isActive={highlightedStep === 1}
            />
          </div>
          <div className={`step-container-uno ${highlightedStep === 2 ? 'highlight' : ''}`}>
            <Step
              title="SLOW"
              subtitle="Traditional security software is slow"
              description={[
                "The old way installs the full suite of anti-virus software and security add-ons on your computer.  Your whole computer is slowed down.",
              ]}
              isActive={highlightedStep === 2}
            />
          </div>
          <div className={`step-container-uno ${highlightedStep === 3 ? 'highlight' : ''}`}>
            <Step
              title="PAY PER ISSUE"
              subtitle="Pay every time for an issue"
              description={['Got a virus every few months?  Pay every time.']}
              isActive={highlightedStep === 3}
            />
          </div>
        </div>
      </div>
  )
}

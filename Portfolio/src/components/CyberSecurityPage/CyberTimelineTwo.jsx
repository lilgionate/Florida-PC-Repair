import React, { useEffect, useState } from 'react';
import './CyberSecurityPage.scss';

import StepTwo from './CyberTimelineDos';

export default function CyberTimeline() {
  const [highlightedStep, setHighlightedStep] = useState(-1);

    useEffect(() => {
      const handleScroll = () => {
        const winHeight = window.innerHeight;
        const halfwayPoint = winHeight * 0.7;
        const steps = document.querySelectorAll('.step-icon-two');
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
        document.querySelector('.steps-line-two').style.height = progress + '%';
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [highlightedStep]);
  return (
    <div className="steps-wrapper-two">
        <div className="steps-content-two">
          <div className={`step-container-two ${highlightedStep === 0 ? 'highlight' : ''}`}>
            <StepTwo
              title="PROACTIVE VIRUS PROTECTION"
              subtitle="Proactively remove & protect against current and future viruses"
              description={['Constant monitoring, monthly reporting, easy remote fixes, and one low monthly fee.']}
              isActive={highlightedStep === 0}
            />
          </div>
          <div className={`step-container-two ${highlightedStep === 1 ? 'highlight' : ''}`}>
            <StepTwo
              title="ALL-IN-ONE SOLUTION"
              subtitle="All security software is included"
              description={[
                'You’ll receive anti-virus, firewall, VPN, patch management, browser extension security, and content filtering.'
              ]}
              isActive={highlightedStep === 1}
            />
          </div>
          <div className={`step-container-two ${highlightedStep === 2 ? 'highlight' : ''}`}>
            <StepTwo
              title="LIGHT-WEIGHT -> FAST"
              subtitle="Experience cloud speed"
              description={[
                "We don’t weigh you down with heavy apps.  Instead, our security apps are stored on our cloud server for you.  That means more speed for you.",
              ]}
              isActive={highlightedStep === 2}
            />
          </div>
          <div className={`step-container-two ${highlightedStep === 3 ? 'highlight' : ''}`}>
            <StepTwo
              title="ONE MONTHLY LOW FEE"
              subtitle="Simple affordable billing"
              description={['Pay one simple low monthly flat rate fee to remove current and future viruses & malware.  Get a complimentary install.']}
              isActive={highlightedStep === 3}
            />
          </div>
          <div className="steps-line-container-two">
            <div className="steps-line-two"></div>
          </div>
        </div>
      </div>
  )
}

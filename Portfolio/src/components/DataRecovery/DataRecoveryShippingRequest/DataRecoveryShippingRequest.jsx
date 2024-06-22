import React from 'react';
import './DataRecoveryShippingRequest.scss';

export default function DataRecoveryShippingRequest() {
  return (
    <div className="data-shipping-request-container">
      <div className="data-shipping-request-flex-container">
        <div className="data-shipping-request-text"><span className='data-shipping-request-steps'>1</span> Device Type</div>
        <div className="data-shipping-request-text"><span className='data-shipping-request-steps'>2</span> Data Loss Reason</div>
        <div className="data-shipping-request-text"><span className='data-shipping-request-steps'>3</span> Your details</div>
      </div>
      <div className='data-dotted-border'></div>
      <p className="data-shipping-request-des">
        Please complete the form so we'll be on the look out for your device. Then, print out the email confirmation you'll receive. Include it with your shipment. Then, you'll receive a free diagnostic including cost and timing for your approval.
      </p>
      <p className="data-shipping-request-des-select">What type of device do you need data recovery for?</p>
      <select className="data-shipping-request-select">
        <option>Laptop</option>
        <option>Desktop</option>
        <option>External Hard Drive</option>
        <option>Other</option>
      </select>
      <div className='data-dotted-border'></div>
      <button className="data-shipping-request-button">Next</button>
    </div>
  );
}

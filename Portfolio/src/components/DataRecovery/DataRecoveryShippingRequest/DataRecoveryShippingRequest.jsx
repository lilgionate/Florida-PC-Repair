import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './DataRecoveryShippingRequest.scss';

export default function DataRecoveryShippingRequest() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    deviceType: '',
    dataLossReason: '',
    userDetails: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (checked) {
        setFormData((prevFormData) => ({
          ...prevFormData,
          dataLossReason: [...prevFormData.dataLossReason, value],
        }));
      } else {
        setFormData((prevFormData) => ({
          ...prevFormData,
          dataLossReason: prevFormData.dataLossReason.filter((item) => item !== value),
        }));
      }
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleNext = () => setStep(step + 1);
  const handlePrevious = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="data-shipping-request-container">
      <div className="data-shipping-request-flex-container">
        <div className={`data-shipping-request-text ${step === 1 ? 'active' : ''}`}><span className='data-shipping-request-steps'>1</span> Device Type</div>
        <div className={`data-shipping-request-text ${step === 2 ? 'active' : ''}`}><span className='data-shipping-request-steps'>2</span> Data Loss Reason</div>
        <div className={`data-shipping-request-text ${step === 3 ? 'active' : ''}`}><span className='data-shipping-request-steps'>3</span> Your details</div>
      </div>
      <div className='data-dotted-border'></div>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <>
            <p className="data-shipping-request-des">
              Please complete the form so we'll be on the look out for your device. Then, print out the email confirmation you'll receive. Include it with your shipment. Then, you'll receive a free diagnostic including cost and timing for your approval.
            </p>
            <p className="data-shipping-request-des-select">What type of device do you need data recovery for?</p>
            <select name="deviceType" className="data-shipping-request-select" onChange={handleChange}>
              <option value="Laptop">Laptop</option>
              <option value="Desktop">Desktop</option>
              <option value="Hard drive">Hard drive</option>
              <option value="SSD">SSD</option>
              <option value="External hard drive">External hard drive</option>
              <option value="USB thumb drive">USB thumb drive</option>
              <option value="Memory card">Memory card</option>
              <option value="Phone">Phone</option>
              <option value="Tablet">Tablet</option>
              <option value="Server">Server</option>
              <option value="RAID">RAID</option>
              <option value="NAS drive">NAS drive</option>
              <option value="Other">Other</option>
            </select>
            <div className='data-dotted-border'></div>
            <button type="button" className="data-shipping-request-button" onClick={handleNext}>Next</button>
          </>
        )}
        {step === 2 && (
          <>
            <p className="data-shipping-request-des-select">What is the main reason for your data loss?</p>
            <div className="checkbox-group">
              <label className={`data-shipping-request-checkbox ${formData.dataLossReason.includes("No-power") ? 'bold' : ''}`}>
                <input type="checkbox" name="dataLossReason" value="No-power" onChange={handleChange}/> No-power
              </label>
              <label className={`data-shipping-request-checkbox ${formData.dataLossReason.includes("Start-up issue") ? 'bold' : ''}`}>
                <input type="checkbox" name="dataLossReason" value="Start-up issue" onChange={handleChange}/> Start-up issue
              </label>
              <label className={`data-shipping-request-checkbox ${formData.dataLossReason.includes("Hardware failure / making noises") ? 'bold' : ''}`}>
                <input type="checkbox" name="dataLossReason" value="Hardware failure / making noises" onChange={handleChange}/> Hardware failure / making noises
              </label>
              <label className={`data-shipping-request-checkbox ${formData.dataLossReason.includes("Dropped / took impact") ? 'bold' : ''}`}>
                <input type="checkbox" name="dataLossReason" value="Dropped / took impact" onChange={handleChange}/> Dropped / took impact
              </label>
              <label className={`data-shipping-request-checkbox ${formData.dataLossReason.includes("Water / liquid damage") ? 'bold' : ''}`}>
                <input type="checkbox" name="dataLossReason" value="Water / liquid damage" onChange={handleChange}/> Water / liquid damage
              </label>
              <label className={`data-shipping-request-checkbox ${formData.dataLossReason.includes("Flood / fire damage") ? 'bold' : ''}`}>
                <input type="checkbox" name="dataLossReason" value="Flood / fire damage" onChange={handleChange}/> Flood / fire damage
              </label>
              <label className={`data-shipping-request-checkbox ${formData.dataLossReason.includes("Deleted data") ? 'bold' : ''}`}>
                <input type="checkbox" name="dataLossReason" value="Deleted data" onChange={handleChange}/> Deleted data
              </label>
              <label className={`data-shipping-request-checkbox ${formData.dataLossReason.includes("Other") ? 'bold' : ''}`}>
                <input type="checkbox" name="dataLossReason" value="Other" onChange={handleChange}/> Other
              </label>
            </div>

            <p className="data-shipping-request-des-select">Please jot down your priority files and folders. Or note if all must be recovered.</p>
            <textarea type="text" name="dataLossReason" className="data-shipping-request-textarea" />
            <p className="data-shipping-request-des-select-two">Please enter any access details such Password / Passcode / Encryption key / PIN.</p>
            <textarea type="text" name="dataLossReason" className="data-shipping-request-textarea" />
            <p className="data-shipping-request-des-info">This will help us expedite the process. Do note that we take security very seriously and that form is completely secure.</p>
            <div className='data-dotted-border'></div>
            <div className="data-shipping-request-button-group">
              <button type="button" className="data-shipping-request-button" onClick={handlePrevious}>Previous</button>
              <button type="button" className="data-shipping-request-button" onClick={handleNext}>Next</button>
            </div>
            
          </>
        )}
        {step === 3 && (
          <>

            <div className="data-shipping-request-info">
              <label className="data-shipping-request-label" htmlFor="name">Name</label>
              <div className="data-shipping-request-name">
                <input className="data-shipping-request-info-text" type="text" id="first-name" placeholder="First" />
                <input className="data-shipping-request-info-text" type="text" id="last-name" placeholder="Last" />
              </div>
            </div>
            <div className="data-shipping-request-info">
              <label className="data-shipping-request-label" htmlFor="email">Email</label>
              <input className="data-shipping-request-info-text" type="email" id="email" />
            </div>
            <div className="data-shipping-request-info">
              <label className="data-shipping-request-label" htmlFor="phone">Phone</label>
              <input className="data-shipping-request-info-text" type="tel" id="phone" />
            </div>
            <div className="data-shipping-request-info">
              <h5 className="data-shipping-request-label-title">Shipping</h5>
              <p className="data-shipping-request-text-description">Please enter your details so we can get in touch with you. Do note that for every completed repair that you approve, we will cover the shipping cost and also arrange for a free return shipping.</p>
            </div>
            <div className="data-shipping-request-info">
              <label className="data-shipping-request-label" htmlFor="address">Your Address</label>
              <input type="text" className="data-shipping-request-info-text" placeholder="Street Address" />
            </div>
            <div className="data-shipping-request-info">
              <input type="text" className="data-shipping-request-info-text" placeholder="Address Line 2" />
            </div>
            <div className="data-shipping-request-name">
              <input
                type="text"
                className="data-shipping-request-info-text"
                placeholder="City"
              />
              <select className="data-shipping-request-info-text" >
              <option value="" disabled selected hidden>State</option>
                <option>Alabama</option>
                <option>Alaska</option>
                <option>American Samoa</option>
                <option>Arizona</option>
                <option>Arkansas</option>
                <option>California</option>
                <option>Colorado</option>
                <option>Connecticut</option>
                <option>Delaware</option>
                <option>District of Columbia</option>
                <option>Florida</option>
                <option>Georgia</option>
                <option>Guam</option>
                <option>Hawaii</option>
                <option>Idaho</option>
                <option>Illinois</option>
                <option>Indiana</option>
                <option>Iowa</option>
                <option>Kansas</option>
                <option>Kentucky</option>
                <option>Louisiana</option>
                <option>Maine</option>
                <option>Maryland</option>
                <option>Massachusetts</option>
                <option>Michigan</option>
                <option>Minnesota</option>
                <option>Mississippi</option>
                <option>Missouri</option>
                <option>Montana</option>
                <option>Nebraska</option>
                <option>Nevada</option>
                <option>New Hampshire</option>
                <option>New Jersey</option>
                <option>New Mexico</option>
                <option>New York</option>
                <option>North Carolina</option>
                <option>North Dakota</option>
                <option>Northern Mariana Islands</option>
                <option>Ohio</option>
                <option>Oklahoma</option>
                <option>Oregon</option>
                <option>Pennsylvania</option>
                <option>Puerto Rico</option>
                <option>Rhode Island</option>
                <option>South Carolina</option>
                <option>South Dakota</option>
                <option>Tennessee</option>
                <option>Texas</option>
                <option>U.S. Virgin Islands</option>
                <option>Utah</option>
                <option>Vermont</option>
                <option>Virginia</option>
                <option>Washington</option>
                <option>West Virginia</option>
                <option>Wisconsin</option>
                <option>Wyoming</option>
                <option>Armed Forces Americas</option>
                <option>Armed Forces Europe</option>
                <option>Armed Forces Pacific</option>
              </select>
            </div>
            <div>
              <input type="text" className="data-shipping-request-info-text-half" placeholder="ZIP Code" />
            </div>
            <div className='data-dotted-border'></div>
            <div className="data-shipping-request-button-group">
              <button type="button" className="data-shipping-request-button" onClick={handlePrevious}>Previous</button>
              <button type="submit" className="data-shipping-request-button">Submit</button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}

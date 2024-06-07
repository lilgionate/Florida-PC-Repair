import React, {useState, useRef} from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import axios from 'axios'
import emailjs from '@emailjs/browser';

import './DeviceProtectionPlan.scss';

import ShieldCheck from '../../../assets/shield-check.png';
import Check from '../../../assets/check.png';
import SSLEncrypt from '../../../assets/ssl-encryption.png';


const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#d0e5ff" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}


export default function DeviceProtectionPlan() {
    const [name, setName] = useState('');
    const [success, setSuccess] = useState(false);
    const stripe = useStripe()
    const elements = useElements()
    const form = useRef();

    const handleSubmitSub = async (e) => {
        e.preventDefault()

        emailjs
      .sendForm('service_x336wqo', 'template_zemh2u7', form.current, {
        publicKey: 'AefTZG7GEH__griQe',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

      if (!stripe || !elements) {
        // Stripe.js has not yet loaded.
        // Make sure to disable form submission until Stripe.js has loaded.
        return;
      }
  
      const result = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
        billing_details: {
          name: name,
        },
      });
  
      if (result.error) {
        console.log(result.error.message);
      } else {
        const res = await axios.post('http://localhost:3000/sub4', {'payment_method': result.paymentMethod.id, 'name': name});
        // eslint-disable-next-line camelcase
        const {client_secret, status} = res.data;
  
        if (status === 'requires_action') {
          stripe.confirmCardPayment(client_secret).then(function(result) {
            if (result.error) {
              console.log('There was an issue!');
              console.log(result.error);
              // Display error message in your UI.
              // The card was declined (i.e. insufficient funds, card has expired, etc)
            } else {
              console.log('You got the money!');
              // Show a success message to your customer
            }
          });
        } else {
          console.log('You got the money!');
          // No additional information was needed
          // Show a success message to your customer
        }
      }
    };

  return (
    <div className="device-protection-tech-container">
      <div className="device-protection-tech-info-section">
        <div className="device-protection-tech-header">
          <img src={ShieldCheck} alt="shield icon" className="device-protection-tech-shield-icon" />
          <h2 className="device-protection-tech-title">Keep your devices safe with our tech protection plans</h2>
        </div>
        <ul className="device-protection-tech-benefits-list">
          <li className="device-protection-tech-benefit-item">
            <img src={Check} alt="check icon" className="device-protection-tech-check-icon" />
            Day 1 Fixes, No Wait Time
          </li>
          <li className="device-protection-tech-benefit-item">
            <img src={Check} alt="check icon" className="device-protection-tech-check-icon" />
            Unlimited Repairs & Services
          </li>
          <li className="device-protection-tech-benefit-item">
            <img src={Check} alt="check icon" className="device-protection-tech-check-icon" />
            Skip The Claim Process
          </li>
        </ul>
        <button className="device-protection-tech-cta-button">Want to pay annually instead?</button>
      </div>
      <div className="device-protection-tech-form-section">
      {!success ? (
                    <form className='device-protection-tech-form' ref={form} onSubmit={handleSubmitSub}>
                        <h2 className='device-protection-tech-payment-title'>Sign Up Now To Get Day 1 Protection For Your Devices</h2>
                        <div className="device-protection-tech-form-group">
                            <label htmlFor="name" className="device-protection-tech-label">Name *</label>
                            <input type="text" id="name" name='name' className="device-protection-tech-input" required />
                        </div>
                        <div className="device-protection-tech-form-group">
                            <label htmlFor="email" className="device-protection-tech-label">Email *</label>
                            <input type="email" id="email" name='email' className="device-protection-tech-input" required />
                        </div>
                        <div className="device-protection-tech-form-group">
                            <label htmlFor="model" className="device-protection-tech-label">Model of your Computer, Phone, Tablet or Device *</label>
                            <input type="text" id="model" name='model' className="device-protection-tech-input" required />
                        </div>
                        <div className="device-protection-tech-form-group">
                            <label htmlFor="serial" className="device-protection-tech-label">Serial Number</label>
                            <input type="text" id="serial" name='serial' className="device-protection-tech-input" />
                        </div>
                        <div className="device-protection-tech-form-group">
                            <label htmlFor="warranty" className="device-protection-tech-label">Full Computer Warranty - Protection Plan (Monthly)*</label>
                            <div className="device-protection-tech-input-group">
                                <span className="device-protection-tech-text">Price</span>
                                <input type="text" id="warranty" value="$15.00" className="device-protection-tech-input-price" readOnly />
                            </div>
                            <p className='device-protection-tech-terms-text'>All terms are listed on this site page.</p>
                        </div>
                        <div className="device-protection-tech-form-group">
            <label className="device-protection-tech-label">Add-ons (Monthly)</label>
            <div className="device-protection-tech-addons">
              <div className="device-protection-tech-addon-item">
                <input type="checkbox" id="email-specialist" className="device-protection-tech-checkbox" />
                <label htmlFor="email-specialist" className="device-protection-tech-addon-label">Email Specialist <span className='device-protection-tech-addon-price'> +$100.00</span></label>
              </div>
              <div className="device-protection-tech-addon-item">
                <input type="checkbox" id="onsite-tech" className="device-protection-tech-checkbox" />
                <label htmlFor="onsite-tech" className="device-protection-tech-addon-label">Onsite Tech Maintenance <span className='device-protection-tech-addon-price'> +$150.00</span></label>
              </div>
              <div className="device-protection-tech-addon-item">
                <input type="checkbox" id="website-specialist" className="device-protection-tech-checkbox" />
                <label htmlFor="website-specialist" className="device-protection-tech-addon-label">Website Specialist <span className='device-protection-tech-addon-price'> +$150.00</span></label>
              </div>
            </div>
          </div>
          <div className="mb-4">
                            <label htmlFor="warranty" className="device-protection-tech-label">Total</label>
                            <div className="device-protection-tech-input-group">
                                <span className="device-protection-tech-text">$15.00</span>
                            </div>
                            </div>
                        <label htmlFor="creditcard" className="device-protection-tech-label">Credit Card *</label>
                        <div>
                            <input
                                 label='Name'
                                 id='outlined-name-input'
                                 className="custom-pc-warranty-annual-name custom-placeholder-color"
                                 helpertext={`Name you'll recive updates and receipts on`}
                                 type='name'
                                 required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder='Cardholder Name'
                                
                            />
        
                        <fieldset className="FormGroup-annual">
                            <div className="FormRow-annual">
                                <CardElement options={CARD_OPTIONS} />
                            </div>
                        </fieldset>
                        <button className='custom-pc-annual-button'>Pay</button>
                        </div>
                        <img src={SSLEncrypt} alt="ssl-encryption" className='device-protection-tech-encryption' />
                    </form>
                    ) : (
                        <div>
                           <h2>Payment successful</h2>
                        </div>
                 )}
      </div>
    </div>
  );
}

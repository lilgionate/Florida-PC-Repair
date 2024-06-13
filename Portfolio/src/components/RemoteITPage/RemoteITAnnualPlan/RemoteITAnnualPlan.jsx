import React, { useState, useRef } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import axios from 'axios'
import emailjs from '@emailjs/browser';

import './RemoteITAnnualPlan.scss';

import Check from '../../../assets/check.png';
import SSLEncrypt from '../../../assets/ssl-encryption.png';
import Logo from '../../../assets/logo.png';

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
    const [email, setEmail] = useState('');
    const [model, setModel] = useState('');
    const [serial, setSerial] = useState('');
    const [success, setSuccess] = useState(false);
    const [addons, setAddons] = useState({
        emailSpecialist: false,
        onsiteTech: false,
        websiteSpecialist: false,
    });

    const stripe = useStripe();
    const elements = useElements();
    const form = useRef();

    const handleSubmitSub = async (e) => {
        e.preventDefault();

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
            const res = await axios.post('http://localhost:3000/sub11', {
                payment_method: result.paymentMethod.id,
                name: name,
                email: email,
                model: model,
                serial: serial,
            });

            const { client_secret, status } = res.data;

            if (status === 'requires_action') {
                stripe.confirmCardPayment(client_secret).then(function(result) {
                    if (result.error) {
                        console.log('There was an issue!');
                        console.log(result.error);
                    } else {
                        console.log('You got the money!');
                        setSuccess(true);
                    }
                });
            } else {
                console.log('You got the money!');
                setSuccess(true);
            }
        }
    };

    return (
        <div className="remote-IT-annual-plan-container">
            <div className="remote-IT-annual-plan-info-section">
                    <h2 className="remote-IT-annual-plan-title-one">Instant Tech Help.</h2>
                    <h2 className="remote-IT-annual-plan-title">No Lines, No Waiting.</h2>
                <ul className="remote-IT-annual-plan-benefits-list">
                    <li className="remote-IT-annual-plan-benefit-item">
                        <img src={Check} alt="check icon" className="remote-IT-annual-plan-check-icon" />
                        Viruses Removal
                    </li>
                    <li className="remote-IT-annual-plan-benefit-item">
                        <img src={Check} alt="check icon" className="remote-IT-annual-plan-check-icon" />
                        Install Software
                    </li>
                    <li className="remote-IT-annual-plan-benefit-item">
                        <img src={Check} alt="check icon" className="remote-IT-annual-plan-check-icon" />
                        Backup Files
                    </li>
                    <li className="remote-IT-annual-plan-benefit-item">
                        <img src={Check} alt="check icon" className="remote-IT-annual-plan-check-icon" />
                        Speed Up
                    </li>
                    <li className="remote-IT-annual-plan-benefit-item">
                        <img src={Check} alt="check icon" className="remote-IT-annual-plan-check-icon" />
                        Optimization & Maintenance
                    </li>
                </ul>
            <div className="remote-IT-annual-plan-review-container">
              <div className="remote-IT-annual-plan-review-card">
                <div className="remote-IT-annual-plan-review-group">
                  <span className="remote-IT-annual-plan-review-stars">
                    ★★★★★
                  </span>
                </div>
                <div className="remote-IT-annual-plan-review-rating">
                  1,000+ reviews
                </div>
              </div>
              <div className="remote-IT-annual-plan-review-image">
                <img src={Logo} alt="New York Computer Help Logo" className="remote-IT-annual-plan-review-img" />
              </div>
              <div className="remote-IT-annual-plan-review-content">
                <p className="remote-IT-annual-plan-review-des">20+ Years Experience</p>
                <div className="remote-IT-annual-plan-review-list">
                  <li>200,000+ repairs</li>
                  <li>150,000+ virus removed</li>
                  <li>25,000+ computers sped up</li>
                  <li>500,000+ email issues resolved</li>
                </div>
              </div>
            </div>
            </div>
            <div className="device-protection-tech-form-section">
                {!success ? (
                    <form className='device-protection-tech-form' ref={form} onSubmit={handleSubmitSub}>
                        <h2 className='device-protection-tech-payment-title'>Please enter your details to sign up for our Remote Support Plan</h2>
                        <div className="device-protection-tech-form-group">
                            <label htmlFor="name" className="device-protection-tech-label">Name *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="device-protection-tech-input"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="device-protection-tech-form-group">
                            <label htmlFor="email" className="device-protection-tech-label">Email *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="device-protection-tech-input"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="device-protection-tech-form-group">
                            <label htmlFor="model" className="device-protection-tech-label">Model of your Computer, Phone, Tablet or Device *</label>
                            <input
                                type="text"
                                id="model"
                                name="model"
                                className="device-protection-tech-input"
                                required
                                value={model}
                                onChange={(e) => setModel(e.target.value)}
                            />
                        </div>
                        <div className="device-protection-tech-form-group">
                            <label htmlFor="serial" className="device-protection-tech-label">Serial Number</label>
                            <input
                                type="text"
                                id="serial"
                                name="serial"
                                className="device-protection-tech-input"
                                value={serial}
                                onChange={(e) => setSerial(e.target.value)}
                            />
                        </div>
                        <div className="device-protection-tech-form-group">
                            <label htmlFor="warranty" className="device-protection-tech-label">Remote Support (Annual) *</label>
                            <div className="device-protection-tech-input-group">
                                <span className="device-protection-tech-text">Price</span>
                                <span className="device-protection-tech-input-price" readOnly>$500.00</span>
                            </div>
                            <p className='device-protection-tech-terms-text'>All terms are listed on this site page.</p>
                        </div>
                        <div className="device-protection-tech-form-group">
                            <label htmlFor="total" className="device-protection-tech-label">Total</label>
                            <div className="device-protection-tech-input-group">
                                <span className="device-protection-tech-text">$500.00</span>
                            </div>
                        </div>
                        <label htmlFor="creditcard" className="device-protection-tech-label">Credit Card *</label>
                        <div>
                            <input
                                label='Name'
                                id='outlined-name-input'
                                className="custom-pc-warranty-annual-name custom-placeholder-color"
                                helpertext={`Name you'll receive updates and receipts on`}
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

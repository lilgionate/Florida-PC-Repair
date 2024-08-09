import { useState, useRef } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import axios from 'axios'
import emailjs from '@emailjs/browser';

import './TechPlan.scss';

import ShieldCheck from '../../../../assets/shield-check.png';
import Check from '../../../../assets/check.png';
import SSLEncrypt from '../../../../assets/ssl-encryption.png';

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

    const handleAddonsChange = (e) => {
        setAddons({
            ...addons,
            [e.target.name]: e.target.checked,
        });
    };

    const calculateTotal = () => {
        let total = 15.00; // base price
        if (addons.emailSpecialist) total += 100.00;
        if (addons.onsiteTech) total += 150.00;
        if (addons.websiteSpecialist) total += 150.00;
        return total.toFixed(2);
    };

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
            const res = await axios.post('http://localhost:3000/sub5', {
                payment_method: result.paymentMethod.id,
                name: name,
                email: email,
                model: model,
                serial: serial,
                addons: addons,
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
                <a href="/warranty-protection-plan/tech-plan-signup-annual/">
                <button className="device-protection-tech-cta-button">Want to pay annually instead?</button>
                </a>
            </div>

            <div className="device-protection-tech-form-section">
                {!success ? (
                    <form className='device-protection-tech-form' ref={form} onSubmit={handleSubmitSub}>
                        <h2 className='device-protection-tech-payment-title'>Sign Up Now To Get Day 1 Protection For Your Devices</h2>
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
                                    <input
                                        type="checkbox"
                                        id="email-specialist"
                                        name="emailSpecialist"
                                        className="device-protection-tech-checkbox"
                                        checked={addons.emailSpecialist}
                                        onChange={handleAddonsChange}
                                    />
                                    <label htmlFor="email-specialist" className="device-protection-tech-addon-label">
                                        Email Specialist <span className='device-protection-tech-addon-price'> +$100.00</span>
                                    </label>
                                </div>
                                <div className="device-protection-tech-addon-item">
                                    <input
                                        type="checkbox"
                                        id="onsite-tech"
                                        name="onsiteTech"
                                        className="device-protection-tech-checkbox"
                                        checked={addons.onsiteTech}
                                        onChange={handleAddonsChange}
                                    />
                                    <label htmlFor="onsite-tech" className="device-protection-tech-addon-label">
                                        Onsite Tech Maintenance <span className='device-protection-tech-addon-price'> +$150.00</span>
                                    </label>
                                </div>
                                <div className="device-protection-tech-addon-item">
                                    <input
                                        type="checkbox"
                                        id="website-specialist"
                                        name="websiteSpecialist"
                                        className="device-protection-tech-checkbox"
                                        checked={addons.websiteSpecialist}
                                        onChange={handleAddonsChange}
                                    />
                                    <label htmlFor="website-specialist" className="device-protection-tech-addon-label">
                                        Website Specialist <span className='device-protection-tech-addon-price'> +$150.00</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="device-protection-tech-form-group">
                            <label htmlFor="total" className="device-protection-tech-label">Total</label>
                            <div className="device-protection-tech-input-group">
                                <span className="device-protection-tech-text">${calculateTotal()}</span>
                            </div>
                        </div>
                        <label htmlFor="creditcard" className="device-protection-tech-label">Credit Card *</label>
                        <div>
                            <input
                                label='Name'
                                id='outlined-name-input'
                                className="custom-pc-warranty-annual-name custom-placeholder-color"
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

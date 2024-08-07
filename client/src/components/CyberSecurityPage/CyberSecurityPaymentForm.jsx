import { useState, useRef } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import emailjs from '@emailjs/browser';

import './CyberSecurityPage.scss';

import bgImage from '../../assets/cyber-warranty-bg.webp';

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
};

export default function CustomPCPaymentForm() {
	const [name, setName] = useState('');
	const [success, setSuccess] = useState(false);
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
			return; // Stripe.js has not yet loaded.
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
			const res = await axios.post('http://localhost:3000/sub3', { 'payment_method': result.paymentMethod.id, 'name': name });
			const { client_secret, status } = res.data;

			if (status === 'requires_action') {
				stripe.confirmCardPayment(client_secret).then(function(result) {
					if (result.error) {
						console.log('There was an issue!');
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
		<>
			<div className="custom-pc-payment-container" style={{ backgroundImage: `url(${bgImage})` }}>
				<div className="custom-pc-payment-content">
					{!success ? (
						<form ref={form} onSubmit={handleSubmitSub}>
							<h2 className='cyber-pc-warranty-title'>Cyber Security Protection</h2>
							<a href="/cyber-security-annual-plan/">
								<p className='custom-pc-warranty-subtitle'>Want to pay annually? Click here</p>
							</a>
							<div className="mb-4">
								<label htmlFor="name" className="custom-pc-label">Name *</label>
								<input type="text" id="name" name='name' className="custom-pc-input" required />
							</div>
							<div className="mb-4">
								<label htmlFor="email" className="custom-pc-label">Email *</label>
								<input type="email" id="email" name='email' className="custom-pc-input" required />
							</div>
							<div className="mb-4">
								<label htmlFor="model" className="custom-pc-label">Model of your Computer, Phone, Tablet or Device *</label>
								<input type="text" id="model" name='model' className="custom-pc-input" required />
							</div>
							<div className="mb-4">
								<label htmlFor="serial" className="custom-pc-label">Serial Number</label>
								<input type="text" id="serial" name='serial' className="custom-pc-input" />
							</div>
							<div className="mb-4">
								<label htmlFor="warranty" className="custom-pc-label">Cyber Protection Security Plan - Monthly *</label>
								<div className="flex items-center justify-between">
									<span className="custom-pc-warranty-price">Price: $25.00</span>
								</div>
								<p className='custom-pc-warranty-text'>All terms are listed on this site page.</p>
							</div>
							<div className="mb-4">
								<label htmlFor="additional-models" className="custom-pc-label">Model(s) for additional device(s)</label>
								<textarea type="text" id="additional-models" name='additional-models' className="custom-pc-input" />
								<p className='custom-pc-warranty-text'>If you have more than one device, please enter the details of each device here.</p>
							</div>
							<label htmlFor="creditcard" className="custom-pc-label">Credit Card *</label>
							<div>
								<input
									aria-label='Cardholder Name'
									id='outlined-name-input'
									className="custom-pc-warranty-name custom-placeholder-color"
									type='name'
									required
									value={name}
									onChange={(e) => setName(e.target.value)}
									placeholder='Cardholder Name'
								/>
							</div>
							<fieldset className="FormGroup">
								<div className="FormRow">
									<CardElement options={CARD_OPTIONS} />
								</div>
							</fieldset>
							<button className='custom-pc-button'>Pay</button>
						</form>
					) : (
						<div>
							<h2>Payment successful</h2>
						</div>
					)}
				</div>
			</div>
		</>
	);
}

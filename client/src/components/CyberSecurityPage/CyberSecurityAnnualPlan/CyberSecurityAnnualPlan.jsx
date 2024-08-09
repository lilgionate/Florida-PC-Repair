import { useState, useRef } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import emailjs from '@emailjs/browser';

import './CyberSecurityAnnualPlan.scss';

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
			const res = await axios.post('http://localhost:3000/sub4', { 'payment_method': result.paymentMethod.id, 'name': name });
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
			<div className="custom-pc-annual-container">
				<div className="custom-pc-annual-content">
					{!success ? (
						<form ref={form} onSubmit={handleSubmitSub}>
							<h2 className='custom-pc-warranty-annual-title'>Cyber Security - Annual</h2>
							<div className="mb-4">
								<label htmlFor="name" className="custom-pc-annual-label">Name *</label>
								<input type="text" id="name" name='name' className="custom-pc-annual-input" required />
							</div>
							<div className="mb-4">
								<label htmlFor="email" className="custom-pc-annual-label">Email *</label>
								<input type="email" id="email" name='email' className="custom-pc-annual-input" required />
							</div>
							<div className="mb-4">
								<label htmlFor="model" className="custom-pc-annual-label">Model of your Computer, Phone, Tablet or Device *</label>
								<input type="text" id="model" name='model' className="custom-pc-annual-input" required />
							</div>
							<div className="mb-4">
								<label htmlFor="serial" className="custom-pc-annual-label">Serial Number</label>
								<input type="text" id="serial" name='serial' className="custom-pc-annual-input" />
							</div>
							<div className="mb-4">
								<label htmlFor="warranty" className="custom-pc-annual-label">Full Cyber Protection Security Plan (Annual) *</label>
								<div className="flex items-center justify-between">
									<span className="custom-pc-warranty-annual-price">Price: $300.00</span>
								</div>
								<p className='custom-pc-warranty-annual-text'>All terms are listed on this site page.</p>
							</div>
							<div className="mb-4">
								<label htmlFor="additional-models" className="custom-pc-annual-label">Model(s) for additional device(s)</label>
								<textarea type="text" id="additional-models" name='additional-models' className="custom-pc-annual-textarea" />
								<p className='custom-pc-warranty-annual-text'>If you have more than one device, please enter the details of each device here.</p>
							</div>
							<label htmlFor="creditcard" className="custom-pc-annual-label">Credit Card *</label>
							<div>
								<input
									aria-label='Cardholder Name'
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

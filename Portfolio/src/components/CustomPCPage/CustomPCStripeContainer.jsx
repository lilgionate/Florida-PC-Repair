import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import PaymentForm from './CustomPCPaymentForm'

const PUBLIC_KEY = 'pk_test_51OvtSFAbRea3ErvDLoU3GbEYYAJvM8YDUKPSeRI5xumd9CFnH5V7ASxuGP9yBR3bDnRVAF5T3LuiY5D7ryAq0R3000UmP7wpXc' // Your public key

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function CustomPCPaymentForm() {
  return (
    <Elements stripe={stripeTestPromise}>
        
        <PaymentForm/>

    </Elements>
  )
}

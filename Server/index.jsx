const express = require('express');
const app = express();
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors())

app.post('/sub', async (req, res) => {
    const {name, payment_method} = req.body;
  
    const customer = await stripe.customers.create({
      payment_method: payment_method,
      name: name,
      invoice_settings: {
        default_payment_method: payment_method,
      },
    });
  
    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ price: 'price_1PGt0GAbRea3ErvDyDLSkEhb' }],
      expand: ['latest_invoice.payment_intent']
    });
    
    const status = subscription['latest_invoice']['payment_intent']['status'] 
    const client_secret = subscription['latest_invoice']['payment_intent']['client_secret']
  
    res.json({'client_secret': client_secret, 'status': status});
})

app.post('/sub2', async (req, res) => {
    const { name, payment_method } = req.body;

    const customer = await stripe.customers.create({
        payment_method: payment_method,
        name: name,
        invoice_settings: {
            default_payment_method: payment_method,
        },
    });

    const subscription = await stripe.subscriptions.create({
        customer: customer.id,
        items: [{ price: 'price_1PHyRoAbRea3ErvDNwVKFiwh' }],
        expand: ['latest_invoice.payment_intent']
    });

    const status = subscription['latest_invoice']['payment_intent']['status']
    const client_secret = subscription['latest_invoice']['payment_intent']['client_secret']

    res.json({ 'client_secret': client_secret, 'status': status });
});
  
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


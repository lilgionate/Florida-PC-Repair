const bodyParser = require('body-parser');
const express = require('express');
const app = express();
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const cors = require('cors');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../client/build')));

// parse application/json
app.use(bodyParser.json());

app.use(cors());

/*Custom PC Sub */
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

/*Custom PC Annual Sub */

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

/*Cyber Protection Sub */

app.post('/sub3', async (req, res) => {
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
    items: [{ price: 'price_1PORptAbRea3ErvDvjvbU0jU' }],
    expand: ['latest_invoice.payment_intent']
  });
  
  const status = subscription['latest_invoice']['payment_intent']['status'] 
  const client_secret = subscription['latest_invoice']['payment_intent']['client_secret']

  res.json({'client_secret': client_secret, 'status': status});
})

/*Cyber Protection Annual Sub */
app.post('/sub4', async (req, res) => {
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
      items: [{ price: 'price_1POWvFAbRea3ErvD7bSLpAg4' }],
      expand: ['latest_invoice.payment_intent']
  });

  const status = subscription['latest_invoice']['payment_intent']['status']
  const client_secret = subscription['latest_invoice']['payment_intent']['client_secret']

  res.json({ 'client_secret': client_secret, 'status': status });
});

/*Tech Protection Sub */
app.post('/sub5', async (req, res) => {
  const { name, email, model, serial, payment_method, addons } = req.body;

  const customer = await stripe.customers.create({
      payment_method: payment_method,
      name: name,
      email: email,
      metadata: {
          model: model,
          serial: serial,
      },
      invoice_settings: {
          default_payment_method: payment_method,
      },
  });

  const items = [{ price: 'price_1POmDoAbRea3ErvDQIxfGIRb' }]; // base plan price

  if (addons.emailSpecialist) {
      items.push({ price: 'price_1POmDoAbRea3ErvDUesq6zue' }); 
  }
  if (addons.onsiteTech) {
      items.push({ price: 'price_1POmDoAbRea3ErvD9kSg18Ym' }); 
  }
  if (addons.websiteSpecialist) {
      items.push({ price: 'price_1POmDoAbRea3ErvD1Lffy2Lc' }); 
  }

  const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: items,
      expand: ['latest_invoice.payment_intent'],
  });

  const status = subscription['latest_invoice']['payment_intent']['status'];
  const client_secret = subscription['latest_invoice']['payment_intent']['client_secret'];

  res.json({ 'client_secret': client_secret, 'status': status });
});

/*Tech Protection Annual Sub */
app.post('/sub6', async (req, res) => {
  const { name, email, model, serial, payment_method, addons } = req.body;

  const customer = await stripe.customers.create({
      payment_method: payment_method,
      name: name,
      email: email,
      metadata: {
          model: model,
          serial: serial,
      },
      invoice_settings: {
          default_payment_method: payment_method,
      },
  });

  const items = [{ price: 'price_1PPDnSAbRea3ErvDcQRAGF67' }]; // base plan price

  if (addons.emailSpecialist) {
      items.push({ price: 'price_1PPDnSAbRea3ErvD6tHRbusS' }); 
  }
  if (addons.onsiteTech) {
      items.push({ price: 'price_1PPDnSAbRea3ErvDxOAsuskU' }); 
  }
  if (addons.websiteSpecialist) {
      items.push({ price: 'price_1PPDnSAbRea3ErvDQU9EQIwO' }); 
  }

  const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: items,
      expand: ['latest_invoice.payment_intent'],
  });

  const status = subscription['latest_invoice']['payment_intent']['status'];
  const client_secret = subscription['latest_invoice']['payment_intent']['client_secret'];

  res.json({ 'client_secret': client_secret, 'status': status });
});


/*Tech Plus Protection Sub */
app.post('/sub7', async (req, res) => {
    const { name, email, model, serial, payment_method, addons } = req.body;
  
    const customer = await stripe.customers.create({
        payment_method: payment_method,
        name: name,
        email: email,
        metadata: {
            model: model,
            serial: serial,
        },
        invoice_settings: {
            default_payment_method: payment_method,
        },
    });
  
    const items = [{ price: 'price_1PPI50AbRea3ErvDbMYiz2Z1' }]; // base plan price
  
    if (addons.emailSpecialist) {
        items.push({ price: 'price_1PPI50AbRea3ErvDclnan8nC' }); 
    }
    if (addons.onsiteTech) {
        items.push({ price: 'price_1PPI50AbRea3ErvDzN30Y5SE' }); 
    }
    if (addons.websiteSpecialist) {
        items.push({ price: 'price_1PPI50AbRea3ErvDv91MZ7U6' }); 
    }
  
    const subscription = await stripe.subscriptions.create({
        customer: customer.id,
        items: items,
        expand: ['latest_invoice.payment_intent'],
    });
  
    const status = subscription['latest_invoice']['payment_intent']['status'];
    const client_secret = subscription['latest_invoice']['payment_intent']['client_secret'];
  
    res.json({ 'client_secret': client_secret, 'status': status });
  });

/*Tech Plus Annual Protection Sub */
app.post('/sub8', async (req, res) => {
    const { name, email, model, serial, payment_method, addons } = req.body;
  
    const customer = await stripe.customers.create({
        payment_method: payment_method,
        name: name,
        email: email,
        metadata: {
            model: model,
            serial: serial,
        },
        invoice_settings: {
            default_payment_method: payment_method,
        },
    });
  
    const items = [{ price: 'price_1PPIAmAbRea3ErvD92el8k1w' }]; // base plan price
  
    if (addons.emailSpecialist) {
        items.push({ price: 'price_1PPIAmAbRea3ErvD7ZgOfb1g' }); 
    }
    if (addons.onsiteTech) {
        items.push({ price: 'price_1PPIAmAbRea3ErvD3roASdBn' }); 
    }
    if (addons.websiteSpecialist) {
        items.push({ price: 'price_1PPIAmAbRea3ErvDkVJSgXeg' }); 
    }
  
    const subscription = await stripe.subscriptions.create({
        customer: customer.id,
        items: items,
        expand: ['latest_invoice.payment_intent'],
    });
  
    const status = subscription['latest_invoice']['payment_intent']['status'];
    const client_secret = subscription['latest_invoice']['payment_intent']['client_secret'];
  
    res.json({ 'client_secret': client_secret, 'status': status });
  });

/*Tech Plus Shield Protection Sub */
app.post('/sub9', async (req, res) => {
    const { name, email, model, serial, payment_method, addons } = req.body;
  
    const customer = await stripe.customers.create({
        payment_method: payment_method,
        name: name,
        email: email,
        metadata: {
            model: model,
            serial: serial,
        },
        invoice_settings: {
            default_payment_method: payment_method,
        },
    });
  
    const items = [{ price: 'price_1PPIWLAbRea3ErvDUkfAQf6M' }]; // base plan price
  
    if (addons.emailSpecialist) {
        items.push({ price: 'price_1PPIWLAbRea3ErvD9rhPWtd2' }); 
    }
    if (addons.onsiteTech) {
        items.push({ price: 'price_1PPIWLAbRea3ErvDT3nhq4my' }); 
    }
    if (addons.websiteSpecialist) {
        items.push({ price: 'price_1PPIWLAbRea3ErvDnqKtlsnu' }); 
    }
  
    const subscription = await stripe.subscriptions.create({
        customer: customer.id,
        items: items,
        expand: ['latest_invoice.payment_intent'],
    });
  
    const status = subscription['latest_invoice']['payment_intent']['status'];
    const client_secret = subscription['latest_invoice']['payment_intent']['client_secret'];
  
    res.json({ 'client_secret': client_secret, 'status': status });
  });


/*Tech Plus Shield Annual Protection Sub */
app.post('/sub10', async (req, res) => {
    const { name, email, model, serial, payment_method, addons } = req.body;
  
    const customer = await stripe.customers.create({
        payment_method: payment_method,
        name: name,
        email: email,
        metadata: {
            model: model,
            serial: serial,
        },
        invoice_settings: {
            default_payment_method: payment_method,
        },
    });
  
    const items = [{ price: 'price_1PPIa5AbRea3ErvDv2wmrfLR' }]; // base plan price
  
    if (addons.emailSpecialist) {
        items.push({ price: 'price_1PPIa5AbRea3ErvDPbOr73gr' }); 
    }
    if (addons.onsiteTech) {
        items.push({ price: 'price_1PPIa5AbRea3ErvDco4YcSWM' }); 
    }
    if (addons.websiteSpecialist) {
        items.push({ price: 'price_1PPIa5AbRea3ErvDQJDmVWDh' }); 
    }
  
    const subscription = await stripe.subscriptions.create({
        customer: customer.id,
        items: items,
        expand: ['latest_invoice.payment_intent'],
    });
  
    const status = subscription['latest_invoice']['payment_intent']['status'];
    const client_secret = subscription['latest_invoice']['payment_intent']['client_secret'];
  
    res.json({ 'client_secret': client_secret, 'status': status });
  });

  
/* Remote IT Support Annual */
app.post('/sub11', async (req, res) => {
    const { name, email, model, serial, payment_method } = req.body;
  
    const customer = await stripe.customers.create({
        payment_method: payment_method,
        name: name,
        email: email,
        metadata: {
            model: model,
            serial: serial,
        },
        invoice_settings: {
            default_payment_method: payment_method,
        },
    });
  
    const subscription = await stripe.subscriptions.create({
        customer: customer.id,
        items: [{ price: 'price_1PQwSrAbRea3ErvDr31Mkqt9' }],
        expand: ['latest_invoice.payment_intent']
    });
  
    const status = subscription['latest_invoice']['payment_intent']['status'];
    const client_secret = subscription['latest_invoice']['payment_intent']['client_secret'];
  
    res.json({ 'client_secret': client_secret, 'status': status });
});

app.get("*", function (req, res) { // This handles all other routes
    res.sendFile(
        path.join(__dirname, "../client/build/index.html"),
        function (err) {
            if (err) {
                res.status(500).send(err);
            }   
        }
    );
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}!`));
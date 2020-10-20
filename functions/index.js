const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HbXy1C27NFV1uW1nDj4asHso3NZDsFFxBxEinuaJVmuvVf5uxj7a8BTNGGIlIm4fSr3jyVfYEnXznsxIcLP0gYb00t5M1YiDu');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// app configuration
const app = express();

//middle wares
app.use(cors({origin: true}))
app.use(express.json());

//api roots
app.get('/', (req, res) => res.status(200).send('hello world'));

app.post('/payments/create', async (req, res) => {
    const total = req.query.total;
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunit
        currency: "usd"
    });
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
    
});

//listen command
exports.api = functions.https.onRequest(app);
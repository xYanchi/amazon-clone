const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51HYfa9Ao8aOFRJ80GZkrtBfUJaB8tMC4PRZWwomP91vidhLHhHYKhrdiSuFMhnVpniMAu5q9KC2DqzHVMmVk8vos00XE2xwPSQ')

// API 

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }))
app.use(express.json()); //Send data and pass into JSON format

// API routes 
app.get('/', (request, response) => response.status(200).send
    ('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received Boom!! >>>', total);

    const paymentIntent = await stripe.paymentIntent.create({
        amount: total, //Subunits of the currency 
        currency: "cad",
    });
    //OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// Listen command
exports.api = functions.https.onRequest(app)

// Example endpoint
//http://localhost:5001/clone-7310d/us-central1/api




// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

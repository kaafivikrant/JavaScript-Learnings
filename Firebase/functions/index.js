const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require("express"); 
const app = express();

const cors = require("cors");
app.use(cors({origin: true}));

app.get("/add", (req, res) => {
  const name = req.body.name;
  return res.status(200).send("Hello from Firebase! "+ name);
});

exports.v1 = functions.https.onRequest(app);

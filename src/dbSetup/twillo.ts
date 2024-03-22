// Download the helper library from https://www.twilio.com/docs/node/install
// Set environment variables for your credentials
// Read more at http://twil.io/secure
import Twilio from "twilio";
const env = require("dotenv").config().parsed;
const accountSid = env.TWILIO_ACCOUNT_SID;
const authToken = env.TWILIO_AUTH_TOKEN;
const verifySid = env.TWILIO_VERIFY_SID;
const client = Twilio(accountSid, authToken);


module.exports = client;
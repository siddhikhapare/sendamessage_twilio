require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTHTOKEN;
const toNumber = process.env.TWILIO_TO_NUMBER;
const fromNumber = process.env.TWILIO_FROM_NUMBER;

const client = require('twilio')(accountSid, authToken);
client.messages
      .create({body: 'Hello World', 
      from: fromNumber, 
      to: toNumber
    })
      .then(message => console.log(message.sid))
      .catch((err) => console.log(err))





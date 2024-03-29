// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

app.use(cors());

app.post('/send-email', (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
            user: "ky8536@hermanmiller.com",
            pass: "Purple@16",
        },
    });

    const mailOptions = {
        from: '"Maharam Company Store" <ky8536@hermanmiller.com>',
        to: "leejeanyou@gmail.com",
        subject: "Maharam Company Store Order Information",
        text: "The following is your order information.",
        html: "<p>The following is your order information.</p>",
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.status(200).send('Email sent successfully. Message ID: ' + info.messageId);
        }
    });
});

app.listen(3000, () => console.log('Server started on port 3000'));
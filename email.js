// filepath: c:\Users\Dell\OneDrive\Desktop\Node.js\email.js
const nodemailer = require('nodemailer');

// Create the transporter
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'nirajan.dhungel@patancollege.edu.np',
        pass: 'rmpa jipw gyuf yaza' // Replace with your App Password
    }
});

// List of recipients
const recipients = ['subashdhungel555@gmail.com', 'rojan.maharjan@patancollege.edu.np', 'utsab.acharya@patancollege.edu.np', 'utsav.acharya@patancollege.edu.np', 'milan.gurung@patancollege.edu.np','shishab.shrestha@patancollege.edu.np'];

// Set up email options
let mailOptions = {
    from: '"Subash Dhungel" <nirajan.dhungel@patancollege.edu.np>',
    to: recipients.join(','), // Comma-separated list
    subject: 'Hello its Nirajan !',
    text: 'This is a test email sent to multiple users.'
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('Error: ', error);
    }
    console.log('Email sent: ' + info.response);
});




// const nodemailer = require('nodemailer');

// // Prefer IPv4 over IPv6 to avoid ETIMEOUT
// process.env['NODE_OPTIONS'] = '--dns-result-order=ipv4first';

// console.log('🚀 Starting to send emails...');

// // Create the transporter manually
// let transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 587,
//     secure: false, // true for port 465
//     requireTLS: true,
//     auth: {
//         user: 'nirajan.dhungel@patancollege.edu.np',
//         pass: 'rmpa jipw gyuf yaza' // App password
//     },
//     tls: {
//         rejectUnauthorized: false
//     },
//     connectionTimeout: 10000, // 10 seconds
//     greetingTimeout: 10000, // 10 seconds
//     socketTimeout: 10000 // 10 seconds
// });

// // List of recipients with names
// const recipients = [
//     { email: 'subashdhungel555@gmail.com', name: 'Subash Dhungel' },
//     { email: 'rojan.maharjan@patancollege.edu.np', name: 'Rojan Maharjan' },
//     { email: 'utsab.acharya@patancollege.edu.np', name: 'Utsab Acharya' },
//     { email: 'utsav.acharya@patancollege.edu.np', name: 'Utsav Acharya' },
//     { email: 'milan.gurung@patancollege.edu.np', name: 'Milan Gurung' },
//     { email: 'shishab.shrestha@patancollege.edu.np', name: 'Shishab Shrestha' }
// ];

// // Send emails one by one
// recipients.forEach((recipient) => {
//     console.log(`✉️ Preparing email for ${recipient.name} <${recipient.email}>...`);

//     let mailOptions = {
//         from: '"Subash Dhungel" <nirajan.dhungel@patancollege.edu.np>',
//         to: recipient.email,
//         subject: `Hello ${recipient.name}!`,
//         text: `Dear ${recipient.name},\n\nThis is a test email sent just for you.\n\nIf you find this email in good condition, report back! Cheers.\n\n- Subash`
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.log(`❌ Error sending to ${recipient.email}:`, error.message);
//         } else {
//             console.log(`✅ Email sent successfully to ${recipient.email}: ${info.response}`);
//         }
//     });
// });

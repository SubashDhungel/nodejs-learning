const nodemailer = require('nodemailer');

// Create the transporter manually
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'nirajan.dhungel@patancollege.edu.np',
        pass: 'rmpa jipw gyuf yaza' // App password
    }
});

// List of recipients with names
const recipients = [
    { email: 'subashdhungel555@gmail.com', name: 'Subash Dhungel' },
    { email: 'rojan.maharjan@patancollege.edu.np', name: 'Rojan Maharjan' },
    { email: 'utsab.acharya@patancollege.edu.np', name: 'Utsab Acharya' },
    { email: 'utsav.acharya@patancollege.edu.np', name: 'Utsav Acharya' },
    { email: 'milan.gurung@patancollege.edu.np', name: 'Milan Gurung' },
    { email: 'shishab.shrestha@patancollege.edu.np', name: 'Shishab Shrestha' }
];

console.log('🚀 Starting to send emails...');

// Send emails one by one
recipients.forEach((recipient) => {
    console.log(`✉️ Preparing email for ${recipient.name} <${recipient.email}>...`);

    let mailOptions = {
        from: '"Subash Dhungel" <nirajan.dhungel@patancollege.edu.np>',
        to: recipient.email,
        subject: `Hello ${recipient.name}!`,
        text: `Dear ${recipient.name},\n\nThis is a test email sent just for you.\n\nIf you find this email in good condition, report back! Cheers.\n\n- Subash`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(`❌ Error sending to ${recipient.email}:`, error.message);
        } else {
            console.log(`✅ Email sent successfully to ${recipient.email}: ${info.response}`);
        }
    });
});

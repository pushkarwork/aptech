const formModel = require("../Models/FormData");
const sendEmail = require("../Utils/SendEmail"); // Make sure the path to sendEmail is correct

const PostFormData = async (req, res, next) => {
    try {
        const { name, phone, email, message } = req.body;

        // Create a new contact entry
        const newContact = new formModel({
            name,
            phone,
            email,
            message,
        });

        // Save to database
        await newContact.save();

        // Send email notification
        await sendEmail({
            email: email, // Recipient's email (the one submitted in the form)
            subject: 'Thank you for your message!',
            message: `
                <h1>Hello ${name},</h1>
                <p>Thank you for reaching out to us!</p>
                <p>We have received your message and will get back to you soon.</p>
                <p>Message Details:</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Message:</strong> ${message}</p>
                <br>
                <p>Best Regards,<br>Your Company Name</p>
            `, // Customize this message as needed
        });
        await sendEmail({
            email: process.env.SMTP_EMAIL, // Recipient's email (the one submitted in the form)
            subject: 'New Message !!',
            message: `
                <h1>Hello AP TECH,</h1>
                <br>
                <p>Message Details:</p>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Message:</strong> ${message}</p>
                <br>
               
            `,
        });
        res.status(201).json({ message: 'Message Sent Successfully' });
    } catch (error) {
        console.error('Error Sending Message, Please try again!:', error.message);
        res.status(500).json({ message: 'Error Sending Message, Please try again!' });
    }
};

module.exports = { PostFormData };

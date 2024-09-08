const formModel = require("../Models/FormData")


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
        res.status(201).json({ message: 'Message Sent Successfully' });
    } catch (error) {
        console.error('Error Sending Message, Please try again!:', error.message);
        res.status(500).json({ message: 'Error Sending Message, Please try again!:' });
    }
};

module.exports = { PostFormData }
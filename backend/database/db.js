// db.js
const mongoose = require('mongoose');
const dotenv = require("dotenv")

if (process.env.NODE_ENV == "PRODUCTION") {
    dotenv.config({
        path: "./config/config.env"
    })
}
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.mongoURI);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;

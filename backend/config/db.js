import mongoose from "mongoose";
// const mongoose = require('mongoose');

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error("Error connecting to mongodb: ",error);
        //sprocess.exit(1); // exit the process with failure
    }
};

// module.exports = { connectDB };
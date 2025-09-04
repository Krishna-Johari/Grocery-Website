import express from 'express';
import dotenv from 'dotenv';
// import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import { connectDB } from "./config/db.js";
import cookieParser from 'cookie-parser';
import cors from 'cors';
import adminRoutes from "./routes/admin.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);
connectDB();


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});






// const express = require("express");
// const dotenv = require("dotenv");
// const { connectDB } = require("./config/db.js");

// const cors = require("cors");
// const cookieParser = require("cookie-parser");
// const userRoutes = require("./routes/users.js");
// const authRoutes = require("./routes/auth.js");
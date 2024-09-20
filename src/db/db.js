import mongoose from "mongoose";
import dotenv from 'dotenv'
import {DB_NAME} from '../constants.js'

dotenv.config()

const dbURI = process.env.MONGODB_URL; // Your MongoDB connection string

mongoose.connect(dbURI);
const db = mongoose.connection;

db.on("connected", () => console.log("Database connected"));
db.on("error", (error) => console.error("Database connection error:", error));



export default db;

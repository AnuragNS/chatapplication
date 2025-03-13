import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const databaseURL = process.env.DATABASE_URL;

// Middlewares
app.use(cors(
{
    origin:[process.env.ORIGIN],
    methods:["GET","PUT","POST","PATCH","DELETE"],
    credentials:true,
}


));
app.use(express.json());

app.use(cookieParser());

// Database Connection
mongoose.connect(databaseURL).then(() => console.log("DB connection successful")).catch(err => console.log("DB Connection Error:", err.message));

// Start Server
const server = app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

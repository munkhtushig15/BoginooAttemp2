import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import userRouter from './router/user.js';
import linkRouter from './router/link.js';

const app = express();

app.use(cors());
app.use(express.json());    
app.use("/users", userRouter);
app.use("/links", linkRouter);

dotenv.config();
const uri = process.env.MONGODB || ``;
const port = process.env.PORT || 1234;

const connect = () => {
    try {
        mongoose.connect(uri, {}).then(() => {
            console.log("Connected to mongoDataBase");
        })
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};

app.listen(port, async () => {
    connect();
    console.log(`Server listening on port ${port}`);
})
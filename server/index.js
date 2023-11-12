import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log('Connected to Data..');
    })
    .catch((err) => {
        console.log('There was a problem connecting to data..')
    })

app.listen(3111, () => {
    console.log('ACG is up and running..');
});
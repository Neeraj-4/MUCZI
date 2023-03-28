import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import DefaultData from './Default.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import Routers from './Routers/Routers.js';
import Connection from './Database/db.js';
const app = express();
mongoose.set('strictQuery', false);
dotenv.config();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Routers);

const PORT = process.env.PORT || 8000;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;
const MONGODB_URI = process.env.MONGODB_URI ||`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.b4twe23.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
Connection(MONGODB_URI);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
DefaultData();

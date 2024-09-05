const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(bodyParser.json());

const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

mongoose.connect(process.env.DATABASE_URL, {  ssl:true , tlsInsecure: true});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to MongoDB'));

// Quiz routes
const quizRouter = require('./routes/quiz');
app.use('/api/quiz', quizRouter);

// Auth routes
const authRouter = require('./routes/auth');
app.use('/api/auth', authRouter);


module.exports = app;

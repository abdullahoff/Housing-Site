import express from 'express'; //Enable us to send post requests
import bodyParser from 'body-parser'; //Enable cross origin requests
import mongoose from 'mongoose';//used as framework for routing of the application  
import cors from 'cors';//used to create models for the posts
//newest version of node allow for use of import syntax usually require 'const express = require('express');

//imports router from posts.js
import postRoutes from './routes/posts.js';


const app = express();//initalizes app, allows for use of variety of function on the app object


//use express middleware to connect to our application
//1st param sets up starting path for all routes inside posts.js
//2nd param calls posts Routes from posts.js
//this indicates that all routes in posts route will start with posts
app.use('/posts', postRoutes);




//setting up body parser so we can properly send out request
app.use(bodyParser.json({limit: "30 mb", extended: true}));// limit is 30mb because DSLR images are larger
app.use(bodyParser.urlencoded({limit: "30 mb", extended: true}));

app.use(cors());
//connects to the MongoDB database
const CONNECTION_URL = 'mongodb+srv://abdula39:PdLkik6ar4hgpMHk@cluster0.fnmrg.mongodb.net/<dbname>?retryWrites=true&w=majority'
//Connection URL is currently open and unsecured
//before deployment must store connection url in mental variables
//'pass:PdLkik6ar4hgpMHk'

const PORT = process.env.PORT || 5000;
//currently its going to port it to 5000
//once pushed to HEROKU it will populate mental variable PORT

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));
//param 1 is connection url
//2nd param is an object with all the options
//.then essentially creates a promis
//if we can successfully connect to the database and call app.listen which take the port and a callback dunction which is ran once our application listens
//if connection to database unsuccessful returns an error message

mongoose.set('useFindAndModify', false);
//makes sure that we dont get any warnings in the console



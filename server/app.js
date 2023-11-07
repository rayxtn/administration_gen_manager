import express from 'express';
import cors from 'cors';
import dotenv from "dotenv"; 


//loading config data from the env file
dotenv.config({ path : './src/config/config.env' });

// importing the database configuration and connection file 
import ConnectDB from  './src/config/db.js';

ConnectDB();

 const app = express();

const PORT = process.env.PORT || 5000 ;

app.listen(PORT,console.log('Server Running ON ' + process.env.NODE_ENV +' MODE on Port '+ PORT ))


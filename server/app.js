import express from 'express';
import cors from 'cors';
import dotenv from "dotenv"; 
import morgan from "morgan"
import { Router } from 'express'; 
import router from  './src/routers/router.js';



//loading config data from the env file
dotenv.config({ path : './src/config/config.env' });


// importing the database configuration and connection file 
import ConnectDB from  './src/config/db.js';
const app = express();


/** middlewares */
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by'); // less hackers know about our stack

ConnectDB();


/** HTTP GET Request */
app.get('/', (req, res) => {
    res.status(201).json("Home");
});


/** api routes */
app.use('/api', router);

const PORT = process.env.PORT || 5000 ;

app.listen(PORT,console.log('Server Running ON ' + process.env.NODE_ENV +' MODE on Port '+ PORT ))


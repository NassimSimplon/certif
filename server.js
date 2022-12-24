const express = require('express');
const app = express();
//DOTENV
require('dotenv').config();
const port = process.env.PORT;
//DataBase
const db = require('./db');
 //CORS
const cors = require('cors');
app.use(cors());
app.use(express.json());
 //USERS ROUTE
const users = require('./usersRoutes');
app.use('/app',users)
//SERVER
 app.listen(port,()=>{
    console.log(`PORT: ${port}`)
 })


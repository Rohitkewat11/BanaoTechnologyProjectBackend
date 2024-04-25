require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());


const userRouteInfo = require('./Route/userRoute');
const userDataRouteInfo = require('./Route/userDataRoute');
app.use('/',userRouteInfo);
app.use('/',userDataRouteInfo);

// importing database Connection string//
const connectDB = require("./ConnectDB/connect_DB");

const port = 5500;

const start = async ()=>{
    try {
        await connectDB(process.env.connt_string);
        app.listen(port,()=>{
            console.log("server started:5500");
        });
    } catch (error) {
        console.log(error);
    }
}


start();

const express=require('express');
const bodyParser=require('body-parser');
const mongoose = require('mongoose');
const users = require('./routes/api/users');
const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
const mongoOptions = {useNewUrlParser:true};
const router = express.Router();
const db = require('./db');
const port = process.env.PORT || 5000



db.connect((err)=>
{
    if(err)
    {
        console.log('unable to connect');
        process.exit(1);
    }
    else{
        app.listen(port,()=>
        {
            console.log(`server running on ${port}`);
        });
    }
});

app.use('/',users);




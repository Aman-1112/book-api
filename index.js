const dotenv = require('dotenv');
dotenv.config({path:'./configuration.env'});

const mongoose = require('mongoose');
const express = require('express');
const app=express();

app.use(express.json());

const uri=process.env.DB_STRING;
mongoose.connect(uri,{useNewUrlParser:true})
.then(()=>console.log("Connected to database.."))
.catch((err)=>console.log("Error Happened in connecting to database"))


const bookRouter= require('./Routes/bookRouter');

app.use('/api/v1',bookRouter)

const port=8080;
app.listen(port, ()=>{
    console.log(`Server is running at port${port}`);
})
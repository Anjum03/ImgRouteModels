require('dotenv').config();


const app = require('express')();
const PORT = process.env.PORT || 4000;




//conncet DB
const connectDB = require("./db/connection");
connectDB();


//using bodyparser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//use cors
const cors = require('cors');
app.use(cors());





const { default: mongoose } = require('mongoose');



app.get('/',(req,res)=>{
    res.send("API is Running..... :)")
});

//json formt use
app.use(bodyParser.json());




//routes
const imgRoute = require('./routes/imgRoutes');
app.use('/img', imgRoute)


app.listen(PORT,()=>{
    console.log(    `Server is startSession.... :)`)
});
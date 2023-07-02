const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");


//dot config
dotenv.config();

//connection to db 
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DBconnection successfull"))
    .catch((err) => {
        console.log(err);
    });
//rest object -> calling express in rest object
const app = express();
//middleware
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use('/api/v1/auth', require("./routes/userRoutes"));
app.use('/api/v1/blood', require("./routes/bloodRoute"));


//port name
const PORT = process.env.PORT || 7000;



//listen port
app.listen(PORT, () => {
    console.log(`Node server running in ${process.env.DEV_MODE} MODE on Port ${process.env.PORT}`)
});

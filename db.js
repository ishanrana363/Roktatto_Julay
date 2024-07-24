const mongoose = require('mongoose');

require('dotenv').config();

const dbPort = process.env.DB;

const connectDb = () =>{
    try {
        mongoose.connect(dbPort);
        console.log("Database Connected!");
    }catch (e) {
        console.log(`Database Connection Error: ${e}`);

    }
};


module.exports = connectDb;
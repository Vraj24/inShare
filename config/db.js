const mongoose = require('mongoose');
require('dotenv').config();

function connectDB() {
    mongoose.connect(process.env.MONGO_CONNECTION_URL);
    const connection = mongoose.connection;

    connection.once
    ('open', () => {
        console.log("Database Connected");
    })
    .on('error', () => {
        console.log("Database Failed");
    });
}

module.exports = connectDB;
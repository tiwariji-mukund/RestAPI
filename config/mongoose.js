const mongoose = require('mongoose');



const connectDB = (url) => {
    console.log('app is connected to the database');
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

module.exports = connectDB;
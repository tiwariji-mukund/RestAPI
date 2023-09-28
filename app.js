require('dotenv').config();
const express = require('express');
const port = process.env.PORT || 5500;
const app = express();
const connectDB = require('./config/mongoose');

app.get('/', (req, res) => {
    res.send('Hiii');
})

app.use('/api/products', require('./routes/products'));

const start = async () => {
    await connectDB(process.env.MONGODB_URL);
    try {
        app.listen(port, () => {
            console.log(`Server is running on port http://localhost:${port}`);
        })
    } catch (err) {
        console.log(err);
    }
}

start();
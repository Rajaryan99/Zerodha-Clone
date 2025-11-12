const express = require('express');
const { mongo, default: mongoose } = require('mongoose');
require('dotenv').config();


const app = express()

const PORT = process.env.PORT || 8080;
const uri = process.env.MONGO_URL

app.get('/', (req, res) => {
    res.send('Helloworld')
})

mongoose.connect(uri)
.then(() => {
    console.log('DB Connected Successfully');
    app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/`);
    
})
})
.catch((err) => {
    console.log('MongoDB connection failed', err.message)
})


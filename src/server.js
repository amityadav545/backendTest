// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dataRoutes = require('./routes/dataRoutes');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect('mongodb+srv://amitky545:BN1GvTInzn8Sw1wk@knma.rvakz2p.mongodb.net/?retryWrites=true&w=majority&appName=kNMA', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));
    app.use(cors()); 
app.use(bodyParser.json());
app.use('/api/data', dataRoutes);
app.use('/', (req,res)=>{
    res.send("server is running")
});
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

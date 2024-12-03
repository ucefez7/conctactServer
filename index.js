// index.js

const express = require('express');
const connectDB = require('./config/db');
const morgan = require('morgan');
const contactRoutes = require('./routes/contactRoute');
const cors = require('cors');
const http = require('http');
require('dotenv').config();

const app = express();
const server = http.createServer(app);

connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev')); 

app.get('/', (req, res) => {
  res.send('server ready');
});

const apiRoutes = express.Router();
app.use('/api', apiRoutes);

apiRoutes.use(contactRoutes);
app.use('/contacts', contactRoutes);




const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



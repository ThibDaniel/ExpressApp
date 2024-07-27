const express = require('express');
const morgan = require('morgan');
require('express-async-errors');

const app = express();

let planets = [
  {
    id: 1,
    name: 'Earth',
  },
  {
    id: 2,
    name: 'Mars',
  },
];


app.use(express.json()); 
app.use(morgan('dev')); 

app.get('/planets', (req, res) => {
  res.json(planets);
});


app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Something went wrong!');
});

module.exports = app;


//


const dotenv = require('dotenv');
dotenv.config();

const app = require('./app');
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
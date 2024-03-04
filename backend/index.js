require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');


// Initialize express

const app = express();
//const port = 3000;
app.set('port', 3000);

require('./database');

// Setting up the routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Middlewares
app.use(morgan('dev'));
const storage = multer.diskStorage({
  destination: path.join(__dirname, 'public/uploads'),
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + path.extname(file.originalname));
  }
});

app.use(multer({storage}).single('image'));
app.use(express.urlencoded({extended: false}));

// Routes


//Start the server
app.listen(app.get('port'), () => {
  console.log(`Example app listening at http://localhost:${app.get('port')}`);
  //console.log('Server is running on port', app.get('port'));
});


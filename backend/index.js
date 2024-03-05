if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
//console.log(process.env.NODE_ENV);

const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
const cors = require('cors');


// Initialize express

const app = express();
//const port = 3000;
app.set('port', process.env.PORT || 3000);

require('./database');

// Setting up the routes
app.get('./', (req, res) => {
  res.send('Hello World from the backend');
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
app.use(express.json());
app.use(cors());


// Routes
app.use('/api/books', require('./routes/books'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

//Start the server
app.listen(app.get('port'), () => {
  console.log(`Example app listening at http://localhost:${app.get('port')}`);
  //console.log('Server is running on port', app.get('port'));
});


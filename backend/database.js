const { default: mongoose } = require("mongoose");

process.env.MONGODB_URI


mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true
})
  .then(db => console.log('Database is connected'))
  .catch(err => console.error(err));


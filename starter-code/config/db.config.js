const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb://localhost:27017/starter-code';

mongoose.connect(MONGODB_URI,{useNewUrlParser:true})
  .then(() => console.info(`Successfully connected to the database ${MONGODB_URI}`))
  .catch( error => console.error(`An error ocurred while connecting to ${MONGODB_URI}`,error))
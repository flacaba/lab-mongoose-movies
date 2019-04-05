require('../config/db.config')

const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.model');



const CELEBRITIES = [{
  name: 'Tom Cruise',
  occupation: 'actor',
  catchPhrase: 'Watch out'
},
{
  name: 'Bruce Willis',
  occupation: 'actor',
  catchPhrase: 'I got the power'
},
{
  name: 'Justin Bieber',
  occupation: 'singer',
  catchPhrase: 'Feel it'
}] 

Celebrity.create(CELEBRITIES)
  .then((CELEBRITIES) => console.info(`${CELEBRITIES.length} new celebs added to the database`))
  .catch(error => console.error(error))
  .then(() => mongoose.connection.close());
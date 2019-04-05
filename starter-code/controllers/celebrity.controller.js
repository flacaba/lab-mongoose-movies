const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.model')


module.exports.list = (req,res,next) => {
  Celebrity.find()
    .then(celebs => res.render('celebrity/list',{celebs}))
    .catch(error => next(error))
}
const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.model')


module.exports.list = (req,res,next) => {
  Celebrity.find()
    .then(celebs => res.render('celebrity/list',{celebs}))
    .catch(error => next(error))
}

module.exports.details =(req,res,next) => {
  const id = req.params.id;
  Celebrity.findById(id)
    .then(celeb => res.render('celebrity/details',{celeb}))
    .catch(error => next(error))
}
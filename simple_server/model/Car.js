const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Car = new Schema({
  brand: {
    type: String
  },
  model: {
    type: String
  },
  color: {
    type: String
  },
  year: {
    type: Number
  }
},{
    collection: 'car' 
});

module.exports = mongoose.model('Car', Car);
const mongoose = require('mongoose');
const { Schema } = mongoose;

const characterSchema = new Schema({
  name: String,
  race: String,
  class: String,
  stats: {
    lvl: Number,
    exp: Number,
    str: Number,
    dex: Number,
    const: Number,
    int: Number,
    wis: Number,
    char: Number
  },
  hairColor: String, 
  weight: Number,
  height: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Character', characterSchema);

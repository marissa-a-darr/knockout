const mongoose = require('mongoose');


const {Schema} = mongoose;
const teamSchema = new mongoose.Schema({
  name : {
    type: String,
    required: true,
    trim: true
  },
  captain: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: false
  },
  members: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  sport: {
    type: String,
    required: true,
    trim: true
  },
  state: {
    type: String,
    required: true,
    trim: true
  },
  city: {
    type: String,
    required: true,
    trim: true
  },
  team_zip_code : {
    type: Number,
    required: true,
    min: 00000
  }
})
const Team = mongoose.model('Team', teamSchema);

module.exports = Team
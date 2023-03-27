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
  sport: {
    type: String,
    required: true,
    trim: true
  },
  state: {
    type: String,
    required: false,
    trim: true
  },
  address: {
    type: String,
    required: false,
    trim: true
  },
  city: {
    type: String,
    required: false,
    trim: true
  },
  team_zip_code : {
    type: String,
    required: false,
    trim: true
  },
  members: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
}, {
  timestamps: true,
});
const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
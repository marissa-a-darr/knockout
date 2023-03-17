const mongoose = require('mongoose');

const {Schema} = mongoose;
const teamMemberSchema = new mongoose.Schema({
  player_id : {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  team_id : {
    type: Schema.Types.ObjectId,
    ref: 'Team',
    required: true
  }
})
const TeamMember = mongoose.model('TeamMember', teamMemberSchema);

module.exports = TeamMember
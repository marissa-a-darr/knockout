const mongoose = require('mongoose');

const {Schema} = mongoose;
const userSchema = new mongoose.Schema({
  currently_available : {
    type: Boolean,
    default: true,
    required: true
  },
  state: {
    type: String,
    required: true,
    trim: true
  },
  zip: {
    type: Number,
    required: true,
    min: 00000
  },
  city: {
    type: String,
    trim: true,
    required: true
  },
  username: {
    type: String,
    trim: true,
    required: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
  teams: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Team'
    }
  ]
});
userSchema.pre('save', async function(next) {
  if (this.New || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});
userSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User
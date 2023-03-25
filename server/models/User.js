const mongoose = require('mongoose');

const {Schema} = mongoose;
const userSchema = new mongoose.Schema({
  currently_available : {
    type: Boolean,
    default: false,
    required: true
  },
  state: {
    type: String,
    required: false,
    trim: true
  },
  zip: {
    type: Number,
    required: false,
    min: 00000
  },
  city: {
    type: String,
    trim: false,
    required: true
  },
  username: {
    type: String,
    trim: true,
    required: true
  },
  password: {
    type: String,
    required: false,
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
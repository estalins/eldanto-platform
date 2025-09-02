const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  location: {
    type: { type: String, default: 'Point' },
    coordinates: [Number], // [longitude, latitude]
  },
  preferences: {
    categories: [String],
    radius: { type: Number, default: 5 }
  },
  notificationSettings: {
    push: { type: Boolean, default: true }
  },
  role: { type: String, default: "user" },
  history: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Offer' }]
}, { timestamps: true });

userSchema.index({ location: "2dsphere" });

module.exports = mongoose.model('User', userSchema);
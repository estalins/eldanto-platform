const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  approved: { type: Boolean, default: false },
  info: String,
  categories: [String],
  premium: { type: Boolean, default: false },
  location: {
    type: { type: String, default: 'Point' },
    coordinates: [Number]
  },
  offers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Offer' }],
  level: { type: String, default: "normal" }
}, { timestamps: true });

storeSchema.index({ location: "2dsphere" });

module.exports = mongoose.model('Store', storeSchema);
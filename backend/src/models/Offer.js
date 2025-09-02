const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
  title: String,
  description: String,
  images: [String],
  videos: [String],
  priceOriginal: Number,
  priceOffer: Number,
  category: String,
  tags: [String],
  store: { type: mongoose.Schema.Types.ObjectId, ref: 'Store' },
  location: {
    type: { type: String, default: 'Point' },
    coordinates: [Number], // [longitude, latitude]
    radius: Number
  },
  isPremium: { type: Boolean, default: false },
  startDate: Date,
  endDate: Date,
  stats: {
    views: { type: Number, default: 0 },
    conversions: { type: Number, default: 0 }
  },
  approved: { type: Boolean, default: false }
}, { timestamps: true });

offerSchema.index({ location: "2dsphere" });

module.exports = mongoose.model('Offer', offerSchema);
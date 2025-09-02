const mongoose = require('mongoose');

const bannerSchema = new mongoose.Schema({
  image: String,
  link: String,
  active: { type: Boolean, default: true }
});

module.exports = mongoose.model('Banner', bannerSchema);
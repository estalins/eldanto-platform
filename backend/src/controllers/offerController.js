const Offer = require('../models/Offer');

exports.createOffer = async (req, res) => {
  try {
    const offer = new Offer(req.body);
    await offer.save();
    res.status(201).json(offer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getOffersNearby = async (req, res) => {
  try {
    const { longitude, latitude, radius = 5 } = req.query;
    const offers = await Offer.find({
      location: {
        $nearSphere: {
          $geometry: { type: "Point", coordinates: [parseFloat(longitude), parseFloat(latitude)] },
          $maxDistance: radius * 1000 // metros
        }
      },
      approved: true,
      endDate: { $gte: new Date() }
    }).limit(30);
    res.json(offers);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
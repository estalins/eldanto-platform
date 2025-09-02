const User = require('../models/User');
const Store = require('../models/Store');
const Offer = require('../models/Offer');
const Banner = require('../models/Banner');
const Category = require('../models/Category');

exports.getDashboard = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalStores = await Store.countDocuments();
    const totalOffers = await Offer.countDocuments();
    const activeOffers = await Offer.countDocuments({ approved: true, endDate: { $gte: new Date() } });
    res.json({ totalUsers, totalStores, totalOffers, activeOffers });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.listUsers = async (req, res) => {
  const users = await User.find().limit(100);
  res.json(users);
};

exports.listStores = async (req, res) => {
  const stores = await Store.find().limit(100);
  res.json(stores);
};

exports.listOffers = async (req, res) => {
  const offers = await Offer.find().limit(100);
  res.json(offers);
};

exports.approveStore = async (req, res) => {
  const { id } = req.body;
  await Store.findByIdAndUpdate(id, { approved: true });
  res.json({ message: "Tienda aprobada" });
};

exports.moderateOffer = async (req, res) => {
  const { id, approved } = req.body;
  await Offer.findByIdAndUpdate(id, { approved });
  res.json({ message: "Oferta moderada" });
};
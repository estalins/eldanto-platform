const Store = require('../models/Store');
const Offer = require('../models/Offer');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.registerStore = async (req, res) => {
  try {
    const { name, email, password, location } = req.body;
    const hashed = await bcrypt.hash(password, 10);
    const store = new Store({ name, email, password: hashed, location });
    await store.save();
    res.status(201).json({ message: "Tienda registrada" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.loginStore = async (req, res) => {
  try {
    const { email, password } = req.body;
    const store = await Store.findOne({ email });
    if (!store) return res.status(404).json({ error: "Tienda no encontrada" });
    const match = await bcrypt.compare(password, store.password);
    if (!match) return res.status(401).json({ error: "Contraseña incorrecta" });
    const token = jwt.sign({ id: store._id }, process.env.JWT_SECRET);
    res.json({ token, store });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getDashboard = async (req, res) => {
  try {
    const storeId = req.store.id;
    const offers = await Offer.find({ store: storeId });
    const stats = {
      totalOffers: offers.length,
      totalViews: offers.reduce((acc, o) => acc + o.stats.views, 0),
      totalConversions: offers.reduce((acc, o) => acc + o.stats.conversions, 0)
    };
    res.json({ offers, stats });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
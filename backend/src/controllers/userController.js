const User = require('../models/User');
const Offer = require('../models/Offer');

exports.getProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).populate("history");
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updatePreferences = async (req, res) => {
  try {
    const userId = req.user.id;
    const preferences = req.body.preferences;
    await User.findByIdAndUpdate(userId, { preferences });
    res.json({ message: "Preferencias actualizadas" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
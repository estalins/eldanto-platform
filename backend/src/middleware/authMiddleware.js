const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Store = require('../models/Store');

module.exports = (role) => async (req, res, next) => {
  try {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.status(401).json({ error: "Token requerido" });
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (role === 'user') {
      const user = await User.findById(decoded.id);
      if (!user) return res.status(401).json({ error: "Usuario no encontrado" });
      req.user = user;
    } else if (role === 'store') {
      const store = await Store.findById(decoded.id);
      if (!store) return res.status(401).json({ error: "Tienda no encontrada" });
      req.store = store;
    } else if (role === 'admin') {
      // Simple: considera usuario con email "admin@eldanto.com" como admin
      const user = await User.findById(decoded.id);
      if (!user || user.email !== "admin@eldanto.com") return res.status(403).json({ error: "No autorizado" });
      req.user = user;
    }
    next();
  } catch (err) {
    res.status(401).json({ error: "Token inválido" });
  }
};
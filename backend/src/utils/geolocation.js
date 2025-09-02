// Utilidad para geolocalización y cálculos básicos
exports.getDistanceKm = (coord1, coord2) => {
  // coord1 y coord2: [lon, lat]
  const toRad = deg => deg * Math.PI / 180;
  const R = 6371; // Radio Tierra en KM
  const dLat = toRad(coord2[1] - coord1[1]);
  const dLon = toRad(coord2[0] - coord1[0]);
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(toRad(coord1[1])) * Math.cos(toRad(coord2[1])) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
};
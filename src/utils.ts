export const getDistanceInMiles = (coord1: [number, number], coord2: [number, number]) => {
  const R = 3958.8; // Radius of the Earth in miles
  const lat1 = coord1[0] * (Math.PI / 180);
  const lon1 = coord1[1] * (Math.PI / 180);
  const lat2 = coord2[0] * (Math.PI / 180);
  const lon2 = coord2[1] * (Math.PI / 180);

  const dlat = lat2 - lat1;
  const dlon = lon2 - lon1;

  const a =
    Math.sin(dlat / 2) * Math.sin(dlat / 2) +
    Math.cos(lat1) * Math.cos(lat2) *
    Math.sin(dlon / 2) * Math.sin(dlon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c; // in miles
  return distance;
};




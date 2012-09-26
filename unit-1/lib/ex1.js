/*
 *   latitude     ->   (N|S) ?((90)|([1-8]?[0-9]))
 *   longitude    ->   (E|W) ?((1[0-9][0-9])|([1-9]?[0-9]))
 *   arcminute    ->   [1-5]?[0-9]
 *   arcsecond    ->   [1-5]?[0-9](\.[0-9]+)?
 *   coordinates  ->   (latitude|longitude)°arcminute'arcsecond"
 */
exports.isValidGeographicCoordinate = function(coordinates) {
  // Example: N42°51’36", W112°25’45"
  return !!coordinates.match(/^(((N|S) ?((90)|([1-8]?[0-9])))|((E|W) ?((1[0-9][0-9])|([1-9]?[0-9]))))°[1-5]?[0-9]'[1-5]?[0-9](\.[0-9]*)?"$/i);
};

exports.isValidLatitude = function(latitude) {
  return !!latitude.match(/^(N|S) ?((90)|([1-8]?[0-9]))$/);
};

exports.isValidLongitude = function(longitude) {
  return !!longitude.match(/^(E|W) ?((1[0-9][0-9])|([1-9]?[0-9]))$/);
};

exports.isValidArcminute = function(arcminute) {
  return !!arcminute.match(/^[1-5]?[0-9]$/);
};

exports.isValidArcsecond = function(arcsecond) {
  return !!arcsecond.match(/^[1-5]?[0-9](\.[0-9]+)?$/);
};
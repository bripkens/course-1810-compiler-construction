exports.taskA = function(str) {
  return !!str.match(/^[1-9][0-9]*$/);
};

exports.taskB = function(str) {
  return !!str.match(/^[0-9]*(0|5)$/);
};

exports.taskC = function(str) {
  return !!str.match(/^0[0-9]*0$/);
};
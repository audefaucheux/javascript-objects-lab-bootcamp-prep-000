var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var object2 = {key: value}
  return Object.assign(object, object2)
}

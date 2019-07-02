var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var object2 = Object.assign({},{object}, {[key] = value })
  return object2
}

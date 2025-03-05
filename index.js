// Define the cats array
let cats = ["Milo", "Otis", "Garfield"];

// 1. Destructively append a cat (adds to the end)
function destructivelyAppendCat(name) {
  cats.push(name);
}

// 2. Destructively prepend a cat (adds to the beginning)
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// 3. Destructively remove the last cat
function destructivelyRemoveLastCat() {
  cats.pop();
}

// 4. Destructively remove the first cat
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// 5. Append a cat without modifying the original array
function appendCat(name) {
  return [...cats, name];
}

// 6. Prepend a cat without modifying the original array
function prependCat(name) {
  return [name, ...cats];
}

// 7. Remove the last cat without modifying the original array
function removeLastCat() {
  return cats.slice(0, -1);
}

// 8. Remove the first cat without modifying the original array
function removeFirstCat() {
  return cats.slice(1);
}

// Export all functions for testing
module.exports = {
  cats,
  destructivelyAppendCat,
  destructivelyPrependCat,
  destructivelyRemoveLastCat,
  destructivelyRemoveFirstCat,
  appendCat,
  prependCat,
  removeLastCat,
  removeFirstCat
};

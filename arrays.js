var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arr, element) {
  return [element, ...arr]
}

function destructivelyAddElementToBeginningOfArray(arr, element) {
  return arr.unshift(element)
}

function addElementToEndOfArray(arr, element) {
  return [element, ...arr]
}

function destructivelyAddElementToEndOfArray(arr, element) {
  return arr.unshift(element)
}
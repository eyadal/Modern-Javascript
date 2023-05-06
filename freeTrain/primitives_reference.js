// Variables are independent of each other
// Primitives/Value Types = number, string, boolean, symbol, undefined, null
// Primitives are copied by their value types
let x = 10
let y = x
x = 20
console.log('Primitives are copied by their value types',y)

let number = 15
function increasePrimitives(number) {
  number++
}
increasePrimitives(number)
console.log('Primitives are copied by their value types', number)

// Reference Types/Objects = Object, function, array
// Object are copied by their reference type
let newX = { value: 20 }
let newY = newX
newX.value = 40
console.log('Object are copied by their reference type', newY)

let newNumber = {value: 15}
function increasePrimitives (newNumber) {
    newNumber.value++;
}
increasePrimitives(newNumber)
console.log('Object are copied by their reference type', newNumber);
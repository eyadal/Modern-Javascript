

// Non Object oriented function
let baseSalary = 30_000
let overTime = 10
let rate = 20

function getWage(baseSalary, overTime, rate) {
  return baseSalary + overTime * rate
}
console.log(getWage(baseSalary, 50, 20))

// Object oriented function ( encapsulation )

let employee = {
  baseSalary: 30_000,
  overtime: 20,
  rate: 20,
  getWage: function () {
    return this.baseSalary + this.overtime * this.rate
  },
}
console.log(employee.getWage())

let person = {
  firstName: 'Eyad',
  lastName: 'Alfarhan',
  age: 33,
  getPerson: function () {
    return `My Name is ${this.firstName} ${this.lastName} and i'm ${this.age} years.`
    // return this.firstName + '' + ' ' + this.lastName + ' ' + this.age
  },
}
console.log(person.getPerson())

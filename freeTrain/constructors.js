// Factory Function
let userCredentials = {
  getUserCredentials() {
    return `
      user name is: ${this.userName} 
      user email is: ${this.userEmail}
      user age is: ${this.userAge}
      `
  },
}
console.log('Get user credentials thru a factory function.')

function createUser(userName, userEmail, userAge) {
  let newUser = Object.create(userCredentials)
  newUser.userName = userName
  newUser.userEmail = userEmail
  newUser.userAge = userAge
  return newUser
}

const newUser1 = createUser('Eyad', 'eyad@gmail.com', 33)
const newUser2 = createUser('Fadil', 'fadil@gmail.com', 31)

console.table(newUser1.getUserCredentials())
console.table(newUser2.getUserCredentials())
console.log('')

//Constructor Function
function CreateUser(userName, userEmail, userAge) {
  this.userName = userName
  this.userEmail = userEmail
  this.userAge= userAge
  this.getUserCredentials = function () {
    return `
      user name: ${this.userName} 
      user email: ${this.userEmail}
      user age: ${this.userAge}`
  }
}
console.log('Get user credentials thru a Constructor function.')
const newUser3 = new CreateUser('Momma', 'Momma@gmail.com', 29)
const newUser4 = new CreateUser('Abbe', 'Abbe@gmail.com', 22)
console.log(newUser3.getUserCredentials())
console.log(newUser4.getUserCredentials())

// Call() Method to a function
console.log('Add user credentials thru a Call() Method to a function');
const newUser5 = createUser.call(CreateUser(),'Foad', 'Foad@gmail.com', 44)
console.log(newUser5.getUserCredentials());


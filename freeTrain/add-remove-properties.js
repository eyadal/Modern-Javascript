//Constructor Function
function CreateUser(userName, userEmail, userAge) {
  this.userName = userName
  this.userEmail = userEmail
  this.userAge = userAge
  this.getUserCredentials = function () {
    return `
        user name: ${this.userName}
        user email: ${this.userEmail}
        user age: ${this.userAge}`
  }
}

const newUser1 = new CreateUser('Eyad', 'eyad@gmail.com', 33)
newUser1.userLastName = 'Al Farhan'
// console.log(newUser1)

newUser1.userName = 'Fadil'
// console.log(newUser1)

// Rewrite code using brackets
newUser1['userName'] = 'Momma'
const propertyName = 'hobby'
newUser1.propertyName = 'Fishing'
// console.log(newUser1)

// Delete a property
delete newUser1.userLastName
// console.log(newUser1)

const newUser2 = new CreateUser('Fadil', 'Fadil@gmail.com', 31, 'AlFarhan')
// console.log(newUser2)

for (let key in newUser1) {
  if(typeof newUser1[key] !== 'function' )
  console.log(key, newUser1[key])
}
// how to get all the keys in a object{} 
const keys = Object.keys(new CreateUser())
console.log(keys);

// if an object have a given property
if('userName' in new CreateUser)
console.log('User has a name');
else{
  console.log('User not found, you have to create an account to login');
}

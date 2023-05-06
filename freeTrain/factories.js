// Factory Function
let userCredentials = {
  getUserCredentials() {
    return `user name is: ${this.userName}, user email is: ${this.userEmail}`
  },
}

function createUser(userName, userEmail) {
  let newUser = Object.create(userCredentials)
  newUser.userName = userName
  newUser.userEmail = userEmail
  return newUser
}

let newUser1 = createUser('Eyad', 'eyad@gmail.com')
let newUser2 = createUser('Fadil', 'fadil@gmail.com')

console.table(newUser1.getUserCredentials())
console.table(newUser2.getUserCredentials())

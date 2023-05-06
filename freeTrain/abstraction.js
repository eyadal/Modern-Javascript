//Constructor Function
function createUser(userName, defaultUserName) {
  this.userName = userName
  this.defaultUserName = defaultUserName
  let checkUserData = function () {
    console.log('check User Data log')
  }

  this.getUserCredentials = function () {
    if ((userName != '')) {
        userName = userName
    } else {
      'jon' == userName
    }
    checkUserData()
  }
}

const personOne = new createUser('', 'jon')
console.log(personOne)
// ========================================================================

// function Circle(radius){
//     this.radius = radius
//     this.defaultLocation = {x:0, y:0};
//     this.computeOptimumLocation = function(){

//     }

//     this.draw = function(){
//         this.computeOptimumLocation()
//         console.log('draw');
//     }
// }
// const circle = new Circle (10)
// circle.computeOptimumLocation()
// circle.draw()
// console.log(circle);

// function Circle(radius) {
//   this.radius = radius
//   let defaultLocation = { x: 0, y: 0 }
//   let computeOptimumLocation = function (factor) {}

//   this.draw = function () {
//     computeOptimumLocation(0.1)
//     this.defaultLocation='Kristianstad'
//     console.log('draw')
//   }
// }
// const circle = new Circle(10)

// circle.draw()

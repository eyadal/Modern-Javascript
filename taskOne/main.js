let listOfCars = $('#list-of-cars')
let listOfNameElement = $('#list-of-names')
// let carName = 'BMW'

listOfCars.empty()

// listOfCars.append(
//   `
//     <div class="car-card">
//         <h2>${carName}</h2>
//     </div>
// `
// )

// const carBrands = ['Mercedes', 'BMW', 'Volvo', 'Tesla']
// const carColors = ['Blue', 'Red', 'Yellow', 'Black']
let names = ['Fadil', 'Eyad']
let carsInfo = [
  {
    brand: 'Mercedes',
    color: 'Blue',
    image:
      'https://images.pexels.com/photos/810357/pexels-photo-810357.jpeg?cs=srgb&dl=pexels-mike-b-810357.jpg&fm=jpg',
  },
  {
    brand: 'BMW',
    color: 'Black',
    image:
      'https://hips.hearstapps.com/hmg-prod/images/2022-bmw-x4-xdrive30i-606-edit-1654689776.jpg?crop=0.686xw:0.513xh;0.0272xw,0.448xh&resize=640:*',
  },
  {
    brand: 'Volvo',
    color: 'Yellow',
    image:
      'https://i.pinimg.com/originals/c1/91/07/c191071f571a8ef9e67b62ce11ee0b04.jpg',
  },
  {
    brand: 'Tesla',
    color: 'Red',
    image:
      'https://cdn.jdpower.com/JDP_2022%20Tesla%20Model%203%20Red%20Front%20Quarter%20View.jpg',
  },
]

function displayNames(listOfNames) {
  listOfNames.map((name) => {
    listOfNameElement.append(`
        <h2>${name}</h2>
        `)
  })
}
displayNames(names)

function displayCard(list) {
  list
    .map(({ brand, color, image }) => {
      let brandToUpperCase = brand.toUpperCase()
      listOfCars.append(
        `
    <div class="car-card">
       <h2>${brandToUpperCase}</h2>
       <h2>${color}</h2>
       <img src="${image}"width="300" height="300"/>
   </div>
    `
      )
    })
}

// displayCarBrands(carBrands)
displayCard(carsInfo)

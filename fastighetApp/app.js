// create a list that contains gender, age, kickedOutTimes, and name
let list = [
  { gender: 'male', age: 20, kickedOutTimes: 0, name: 'John' },
  { gender: 'male', age: 21, kickedOutTimes: 2, name: 'Mike' },
  { gender: 'female', age: 22, kickedOutTimes: 1, name: 'Jane' },
  { gender: 'female', age: 23, kickedOutTimes: 4, name: 'Mary' },
  { gender: 'male', age: 24, kickedOutTimes: 4, name: 'Mark' },
  { gender: 'female', age: 25, kickedOutTimes: 0, name: 'Mavis' },
  { gender: 'male', age: 26, kickedOutTimes: 1, name: 'Mason' },
  { gender: 'female', age: 27, kickedOutTimes: 2, name: 'Mia' },
  { gender: 'female', age: 28, kickedOutTimes: 3, name: 'Megan' },
  { gender: 'female', age: 17, kickedOutTimes: 3, name: 'Fox' },
]

// Rules for entering the club
/*
    for (let queuePosition = 0; queuePosition < list.length; queuePosition++) {
    const isMale = list[queuePosition].gender == 'male'
    const isValidMaleAge = list[queuePosition].age >= 22
    const isFemale = list[queuePosition].gender == 'female'
    const isValidFemaleAge = list[queuePosition].age >= 18
    const isAllowedToEnter = list[queuePosition].kickedOutTimes <= 3
    const person = list[queuePosition]
    const { name, gender, kickedOutTimes } = person

    if (isAllowedToEnter) {
        if (isMale && isValidMaleAge) {
        console.log(`Welcome ${name} `)
        } else if (isFemale && isValidFemaleAge) {
        console.log(`Welcome ${name} `)
        } else {
        console.log(`Come back when you are old enough ${name} `)
        }
    } else {
        console.log(
        `${name} are banned from entering because you have been kicked out ${kickedOutTimes} times. Limit is 3 Times.   `
        )
    }
    }
    */
const apartments = [
  {
    address: 'Södermalmstorg 1, Stockholm',
    price: 7250000,
    area: 72,
    rooms: 3,
    condition: 'Good',
    hasBalcony: true,
    floor: 4,
    hasElevator: true,
    constructionYear: 1985,
  },
  {
    address: 'Luntmakargatan 10, Stockholm',
    price: 6200000,
    area: 63,
    rooms: 2,
    condition: 'Fair',
    hasBalcony: false,
    floor: 2,
    hasElevator: true,
    constructionYear: 1965,
  },
  {
    address: 'Storgatan 20, Gothenburg',
    price: 9500000,
    area: 120,
    rooms: 4,
    condition: 'Excellent',
    hasBalcony: true,
    floor: 6,
    hasElevator: true,
    constructionYear: 2008,
  },
  {
    address: 'Södermannagatan 4, Stockholm',
    price: 3800000,
    area: 40,
    rooms: 1,
    condition: 'Good',
    hasBalcony: false,
    floor: 3,
    hasElevator: false,
    constructionYear: 1920,
  },
  {
    address: 'Tulegatan 15, Uppsala',
    price: 5400000,
    area: 57,
    rooms: 2,
    condition: 'Fair',
    hasBalcony: true,
    floor: 1,
    hasElevator: false,
    constructionYear: 1975,
  },
  {
    address: 'Sveavägen 20, Stockholm',
    price: 12500000,
    area: 90,
    rooms: 3,
    condition: 'Excellent',
    hasBalcony: true,
    floor: 8,
    hasElevator: true,
    constructionYear: 2010,
  },
  {
    address: 'Kungsgatan 12, Gothenburg',
    price: 7200000,
    area: 75,
    rooms: 3,
    condition: 'Good',
    hasBalcony: false,
    floor: 4,
    hasElevator: true,
    constructionYear: 1995,
  },
  {
    address: 'Stortorget 8, Malmö',
    price: 6500000,
    area: 70,
    rooms: 2,
    condition: 'Fair',
    hasBalcony: true,
    floor: 2,
    hasElevator: false,
    constructionYear: 1950,
  },
  {
    address: 'Norrmalmstorg 1, Stockholm',
    price: 22500000,
    area: 220,
    rooms: 6,
    condition: 'Excellent',
    hasBalcony: true,
    floor: 5,
    hasElevator: true,
    constructionYear: 2015,
  },
  {
    address: 'Kungsportsavenyen 1, Gothenburg',
    price: 8200000,
    area: 85,
    rooms: 3,
    condition: 'Good',
    hasBalcony: true,
    floor: 2,
    hasElevator: true,
    constructionYear: 2000,
  },
]
let found = 0

for (let apartmentObj = 0; apartmentObj < apartments.length; apartmentObj++) {
  const {
    address,
    price,
    area,
    rooms,
    condition,
    hasBalcony,
    floor,
    hasElevator,
    constructionYear,
  } = apartments[apartmentObj]
  const isAddress = address.includes('Stockholm')
  const isCondition = condition.toLowerCase()
  const isConstructionYear = constructionYear > 2000

  // if (isAddress) {
  //     console.log(apartments[apartmentObj])
  //     found++
  //   }
  //   if(found === 0)
  //   {
  //     console.log('There is no apartments available')
  //   }

  // if (price > 22000000) {
  //   console.log(apartments[apartmentObj])
  // }

  // if ( area >= 200) {
  //   console.log(apartments[apartmentObj])
  // }

  // if (  rooms <= 2) {
  //   console.log(apartments[apartmentObj])
  // }

  // if (isCondition === 'good') {
  //   console.log( ` This is the apartments with ${isCondition} condition, `, apartments[apartmentObj] )
  // }

  // if(hasBalcony) {
  //   console.log( 'This Apartments Have a balcony:', apartments[apartmentObj])
  // }

  // if (floor > 3) {
  //   console.log(
  //     `We have these apartments with floor ${floor} Available`,
  //     apartments[apartmentObj]
  //   )
  // }

//   if (hasElevator) {
//     console.log('These apartments with elevator:', apartments[apartmentObj])
//   } else if (!hasElevator) {
//     console.log('These apartments has no elevator: ', apartments[apartmentObj])
//   }
// console.table(apartments[apartmentObj])
  // if (isConstructionYear) {
  //   console.log(apartments[apartmentObj])
  // }
}

//Function to display price.

function checkPrice() {
  for (apartmentObj = 0; apartmentObj < apartments.length; apartmentObj++) {
    const isPrice = apartments[apartmentObj].price <= 8000000
    if (isPrice) {
      console.log(apartments[apartmentObj])
    }
  }
}
// checkPrice()

/*
    (Fastighet)d
    adress,
    pris,
    area,
    antalRum,
    skick,
    balkong,
    våning,
    hiss,
    byggår,
  */

// om byggår är mindre än 5 år gammal

// priset är mindre 500 000

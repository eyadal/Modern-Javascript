const listOfVehicles = $('#list-of-vehicles')
const searchInputElement = $('#search-input')
// const searchInputElement = document.getElementById('search-input')
let vehiclesInfo = [
  {
    brand: 'mercedes',
    color: 'white',
    year: 2023,
    transmission: 'automatic',
    price: '487000',
    image:
      'https://www.mercedes-benz.se/passengercars/the-brand/amg-brand/mercedes-amg-brand/brand/amg-performance-vehicles/_jcr_content/swipeableteaserbox/par/swipeableteaser_1342/asset.MQ6.12.20210430120429.jpeg',
  },
  {
    brand: 'bmw',
    color: 'white',
    year: 2022,
    transmission: 'automatic',
    price: '347 000',
    image:
      'https://images.dealer.com/ddc/vehicles/2023/BMW/530e/Sedan/trim_xDrive_482c68/color/Alpine%20White-300-233%2C238%2C232-640-en_US.jpg',
  },
  {
    brand: 'volvo',
    color: 'silver',
    year: 2020,
    transmission: 'manual',
    price: '289 000',
    image:
      'https://images.dealer.com/ddc/vehicles/2023/Volvo/S60/Sedan/trim_B5_Core_Dark_Theme_666a77/color/Silver%20Dawn%20Metallic-735-148%2C149%2C156-640-en_US.jpg?impolicy=downsize_bkpt&imdensity=1&w=520',
  },
  {
    brand: 'tesla',
    color: 'red',
    year: 2021,
    transmission: 'automatic',
    price: '529 000',
    image: 'https://www.pngmart.com/files/22/Tesla-Model-3-PNG-Image.png',
  },
  {
    brand: 'mercedes',
    color: 'silver',
    year: 2022,
    transmission: 'automatic',
    price: '479 000',
    image:
      'https://bild.landrinsbil.se/cb:HqbC~437e0/w:512/h:341/q:80/https://landrinsbil.se/app/uploads/2021/07/Mercedes-AMG-A-klass-Halvkombi.jpg',
  },
  {
    brand: 'bmw',
    color: 'black',
    year: 2022,
    transmission: 'automatic',
    price: '347 000',
    image:
      'https://www.bmw.com.pe/content/dam/bmw/common/all-models/5-series/sedan/2020/models-and-equipment/bmw-5-series-sedan-models-and-equipment-lines-01-01.jpg.asset.1587045994071.jpg',
  },
  {
    brand: 'volvo',
    color: 'white',
    year: 2021,
    transmission: 'manual',
    price: '280 000',
    image:
      'https://vexstockimages.fastly.carvana.io/stockimages/2022_VOLVO_S60_B5%20MOMENTUM%20SEDAN%204D_WHITE_stock_desktop_1920x1080.png?v=1676381161.235',
  },
  {
    brand: 'Tesla',
    color: 'blue',
    year: 2023,
    transmission: 'automatic',
    price: '639 000',
    image:
      'https://mysterio.yahoo.com/mysterio/api/560D9CFA9F40C33DFAB0B40F9E9BC872D97704B1E154B1BE2E093622A4C723B0/autoblog/resizefill_w476_h266;quality_80;format_webp;cc_31536000;/https://s.aolcdn.com/commerce/autodata/images/USD10TSC024D021001.jpg',
  },
  {
    brand: 'mercedes',
    color: 'black',
    year: 2021,
    transmission: 'automatic',
    price: '379 000',
    image:
      'https://bild.landrinsbil.se/cb:HqbC~437e0/w:auto/h:auto/q:80/https://landrinsbil.se/app/uploads/2021/06/Mercedes-Benz-C-klass-Sedan.jpg',
  },
  {
    brand: 'bmw',
    color: 'blue',
    year: 2022,
    transmission: 'manual',
    price: '447 000',
    image:
      'https://www.bmw.com.pe/content/dam/bmw/common/all-models/5-series/sedan/2020/models-and-equipment/bmw-5-series-sedan-models-and-equipment-lines-03-01.jpg.asset.1631533571837.jpg',
  },
  {
    brand: 'volvo',
    color: 'red',
    year: 2019,
    transmission: 'automatic',
    price: '279 000',
    image: 'https://imgd.aeplcdn.com/370x208/n/rzafkva_1604911.jpg?q=75',
  },
  {
    brand: 'tesla',
    color: 'grey',
    year: 2022,
    transmission: 'automatic',
    price: '479 000',
    image:
      'https://static-assets.tesla.com/configurator/compositor?&bkba_opt=2&view=STUD_3QTR&size=1400&model=ms&options=$BP02,$ADPX2,$AU01,$APF1,$APH3,$APPB,$X028,$BTX5,$BS00,$BCMB,$CH04,$CF00,$CW02,$COSE,$X039,$IDCF,$X027,$DRLH,$DU00,$AF02,$FMP6,$FG02,$DCF0,$FR04,$X007,$X011,$INLFC,$PI01,$IX00,$X001,$LP01,$MI03,$X037,$MDLS,$DV4W,$X025,$X003,$PMNG,$PS01,$PK00,$X031,$PX00,$PF00,$X043,$TM00,$BR04,$REEU,$RFP2,$X014,$ME02,$QTFC,$SR07,$SP01,$X021,$SC04,$SU01,$TR00,$TIM3,$DSHG,$MT75A,$UTZW,$WTAS,$YFCC,$CPF0&crop=1400,850,300,130&',
  },
]

function displayCard(list) {
  list.map(({ brand, color, year, transmission, price, image }) => {
    let brandToUpperCase = brand.toUpperCase()
    listOfVehicles.append(
      `
      <div class="car-card">
        <h4>${brandToUpperCase}</h4>
        <img src="${image}"width="300" height="300"/>
        <hr />
        <p>Year: ${year}</p>
        <p>${transmission}</p>
        <p>${color}</p>
        <p>Price: ${price} sek</p>
      </div>
    `
    )
  })
}
// 1.0 create addeventlistener to input

function filterCards() {
  vehiclesInfo.filter(({ brand, color, year, transmission, price, image }) => {
    //   let vehicleBrand = brand
    //   let vehicleYear = year
    //   let vehicleColor = color
    //   let vehicleTransmission = transmission
    //   let vehiclePrice = price
    //   let vehicleImage = image
    //   console.log(event.target.id)
  })
}

// displayCarBrands(carBrands)
displayCard(vehiclesInfo)
filterCards()

// Eventhandlers
searchInputElement.addEventListener('click', filterCards())

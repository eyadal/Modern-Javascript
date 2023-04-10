const listOfVehicles = document.getElementById('list-of-vehicles')
const searchInputElement = document.getElementById('search-input')
const selectBrandElement = document.getElementById('select-brand')

const selectColorElement = document.getElementById('select-color')
const selectYearElement = document.getElementById('select-year')
const selectTransmissionElement = document.getElementById('select-transmission')
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
    brand: 'tesla',
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

function drawExistingBrands() {
  let mapVehiclesBrand = vehiclesInfo.map(({ brand }) => brand)
  const uniqueArray = [...new Set(mapVehiclesBrand)]
  uniqueArray.forEach((brand) => {
    selectBrandElement.innerHTML += `<option value="${brand}">${brand}</option>`
  })
}
drawExistingBrands()

function drawExistingColors() {
  // skapar en ny array med färger från varje objekt i vehiclesInfo
  const allExistingColors = vehiclesInfo.map(({ color }) => color)
  // tar bort alla dubbletter från allExistingColors
  let uniqueArray = [...new Set(allExistingColors)]
  // för varje unik färg i uniqueArray läggs en ny <option>-tagg till i HTML-elementet med id:t selectColorElement
  uniqueArray.forEach((color) => {
    selectColorElement.innerHTML += `<option value="${color}">${color}</option>`
  })
}
drawExistingColors()

function drawExistingYears() {
  let mapVehiclesYear = vehiclesInfo.map(({ year }) => year)
  // skapar en ny array med alla årtal från varje objekt i vehiclesInfo
  const uniqueArray = [...new Set(mapVehiclesYear)]
  // tar bort alla dubbletter från mapVehiclesYear
  uniqueArray.forEach(
    (year) =>
      (selectYearElement.innerHTML += `<option value="${year}">${year}</option>`)
  )
}
drawExistingYears()

// STEG ETT
// ==========================================================================================================================

// 1.0 deklarera en variabel som håller i html select elementet för (property)
// 1.1 skapa en funktion för att visa (property)
// 1.2 skriv en console.log('test') för att testa att det funkar.

// 1.3 skapa en event lyssnare med 'click' och koppla funktionen till den
// 2.0 skapa en ny array med (property) från varje objekt map() vehiclesInfo och deklarera till en variabel
// 2.1 deklarera en variabel som tar bort alla dubbletter från föregående variabel
// 2.2  skapa foreach loop som för varje unik (property) i uniqueArray
//läggs en ny <option>-tagg till i HTML-elementet med id:t select(Property)Element
// 2.3 utanför kodblocket ring funktionen

// ==========================================================================================================================

// Detta är en funktion som ritar ut befintliga transmissioner i gränssnittet
function drawExistingTransmission() {
  // Skapar en ny array med alla befintliga transmissioner som finns i `vehiclesInfo`
  let mapVehiclesTransmission = vehiclesInfo.map(
    ({ transmission }) => transmission
  )
  // Skapar en ny array med unika värden från `mapVehiclesTransmission`
  const uniqueArray = [...new Set(mapVehiclesTransmission)]
  // Loopar igenom arrayen `uniqueArray` och lägger till en HTML `<option>` tagg till gränssnittet för varje unikt transmissionsvärde
  uniqueArray.forEach(
    (transmission) =>
      (selectTransmissionElement.innerHTML += `<option value="${transmission}">${transmission}</option>`)
  )
}

// Anropar funktionen `drawExistingTransmission` för att rita ut befintliga transmissioner i gränssnittet
drawExistingTransmission()

function displayCard(list) {
  listOfVehicles.innerHTML = ''
  list.map(({ brand, color, year, transmission, price, image }) => {
    let brandToUpperCase = brand.toUpperCase()
    listOfVehicles.innerHTML += `
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
  })
}
displayCard(vehiclesInfo)

// Skapa en funktion som filtrerar fordonen
function filterVehiclesArray() {
  let searchString = this.value
  // Skapa en ny array med alla fordon som matchar sökningen
  const filteredVehiclesArray = vehiclesInfo.filter(({ brand }) =>
    brand.includes(searchString)
  )
  displayCard(filteredVehiclesArray)
  // Skicka den nya filtrerade arrayen till displayCard
}
// Eventhandlers
searchInputElement.addEventListener('keyup', filterVehiclesArray)

// Detta är en funktion som filtrerar fordon baserat på varumärket i gränssnittet
function filterVehicleByBrand() {
  // Hämtar det aktuella värdet från formuläret och sparar det i variabeln `selectBrand`
  let selectBrand = this.value

  // Filtrerar objekten i arrayen `vehiclesInfo` baserat på värdet av `selectBrand`
  // Skapar en ny array som innehåller endast objekt med matchande varumärke
  const filteredSelectedBrand = vehiclesInfo.filter(
    ({ brand }) => brand === selectBrand
  )

  // Visar korten för de matchande fordonen i gränssnittet genom att anropa funktionen `displayCard`
  displayCard(filteredSelectedBrand)

  // Om `selectBrand` är "all", visas alla fordon i gränssnittet genom att anropa `displayCard` med hela `vehiclesInfo`-arrayen
  if (selectBrand === 'all') {
    displayCard(vehiclesInfo)
  }
}
selectBrandElement.addEventListener('change', filterVehicleByBrand)

function filterVehiclesByColor() {
  let selectedColor = this.value

  const filteredVehiclesByColor = vehiclesInfo.filter(
    ({ color }) => color === selectedColor
  )
  displayCard(filteredVehiclesByColor)
  if (this.value === 'all') displayCard(vehiclesInfo)
}
selectColorElement.addEventListener('change', filterVehiclesByColor)

// Skapa en funktion som filtrerar fordonen via select år elementet på sidan
function filterVehiclesByYear() {
  let selectedYear = this.value
  const filteredSelectedYear = vehiclesInfo.filter(
    ({ year }) => Number(selectedYear) === year
  )
  displayCard(filteredSelectedYear)
  if (selectedYear === 'all') {
    displayCard(vehiclesInfo)
  }
}
selectYearElement.addEventListener('change', filterVehiclesByYear)

// STEG TVÅ
// ==========================================================================================================================

// 1.0 skapa en funktion som filtrerar property
// 1.1 deklarera en variable som håller i this.value
// 1.2 skapa en filter method på befintlig array med alla fordon, deklarera den till en variabel och använd includes() method
// i filter methoden och skicka in variabeln som är deklarerad till filter() methoden
// 1.3 skicka den nya filtrerade arrayen till displayCard()

// ==========================================================================================================================

// Detta är en funktion som filtrerar fordon baserat på vald transmission i gränssnittet
function filterVehiclesByTransmission() {
  // Hämtar det aktuella värdet från formuläret och sparar det i variabeln `selectTransmission`
  let selectTransmission = this.value
  // Filtrerar objekten i arrayen `vehiclesInfo` baserat på värdet av `selectTransmission`
  const filteredSelectedTransmission = vehiclesInfo.filter(
    ({ transmission }) => selectTransmission === transmission
  )
  // Visar korten för de matchande fordonen i gränssnittet genom att anropa funktionen displayCard
  displayCard(filteredSelectedTransmission)
}
// Lägger till en händelselyssnare på elementet `selectTransmissionElement` för att lyssna på ändringar och när en användare väljer en transmission
selectTransmissionElement.addEventListener(
  'change',
  filterVehiclesByTransmission
)

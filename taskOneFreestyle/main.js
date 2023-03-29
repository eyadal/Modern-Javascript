let listOfIngredientsElement = $('.list-of-ingredients')
let pageInfoElement = $('#page-info')
let dairy = [
  {
    product: 'Milk',
    volume: '1 Liter',
    price: 15,
    image: 'https://www.torebrings.se/bilder/artikelbilder/10/104989mega.jpg',
  },
  {
    product: 'Fil',
    volume: '1 Liter',
    price: 17,
    image: 'https://www.kaka.se/product/image/medium/27087_0.jpg',
  },
  {
    product: 'Yoghurt',
    volume: '1 Liter',
    price: 14,
    image: 'https://sportscater.se/wp-content/uploads/2015/10/361932.jpg',
  },
  {
    product: 'Kvarg',
    volume: '1 kg',
    price: 23,
    image:
      'https://d1ax460061ulao.cloudfront.net/1000x1000/a/6/a6753583961f9ba13c2b1d5a7290723e.jpg',
  },
  {
    product: 'Keso',
    volume: '500g',
    price: 20,
    image:
      'https://res.cloudinary.com/coopsverige/image/upload/v1652703161/cloud/252149.jpg',
  },
]
let fruits = [
  {
    product: 'Banana',
    volume: '1 kg',
    price: 22,
    image:
      'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51ebZJ+DR4L._SL1500_.jpg',
  },
  {
    product: 'Fikon',
    volume: 'styck',
    price: 5,
    image: 'https://www.hebe.se/wp-content/uploads/2014/12/fikon-farska-br.jpg',
  },
  {
    product: 'Papaya',
    volume: '1 kg',
    price: 43,
    image: 'https://www.hebe.se/wp-content/uploads/2014/12/papaya-atmogen2.jpg',
  },
  {
    product: 'Passionsfrukt',
    volume: 'styck',
    price: 12,
    image: 'https://www.hebe.se/wp-content/uploads/2014/12/passionsfrukt21.jpg',
  },
  {
    product: 'Physalis',
    volume: '250g',
    price: 32,
    image: 'https://www.hebe.se/wp-content/uploads/2014/12/physalis.jpg',
  },
  {
    product: 'Sharonfrukt',
    volume: '500g',
    price: 21,
    image: 'https://www.hebe.se/wp-content/uploads/2014/12/sharon.jpg',
  },
]
let meats = [
  {
    product: 'Kalv Högrev ',
    volume: '1 kg',
    price: 220,
    image:
      'https://www.scan.se/globalassets/scan/meat-guide/styckningsdetaljer/kalv/02.kalvhogrev.jpg?preset=scan-5:3',
  },
  {
    product: 'Kalv Filé',
    volume: '1 kg',
    price: 318,
    image:
      'https://www.scan.se/globalassets/scan/meat-guide/styckningsdetaljer/kalv/05.kalvfile.jpg?preset=scan-5:3',
  },
  {
    product: 'Oxfilé',
    volume: '1 kg',
    price: 322,
    image:
      'https://www.scan.se/globalassets/scan/meat-guide/styckningsdetaljer/not/05.oxfile.jpg?preset=scan-5:3',
  },
  {
    product: 'Oxsvans',
    volume: '1 kg',
    price: 124,
    image:
      'https://www.scan.se/globalassets/scan/meat-guide/styckningsdetaljer/not/08.oxsvans.jpg?preset=scan-5:3',
  },
  {
    product: 'Lammstek',
    volume: '1 kg',
    price: 234,
    image:
      'https://www.scan.se/globalassets/scan/meat-guide/styckningsdetaljer/lamm/04.lammstek.jpg?preset=scan-5:3',
  },
  {
    product: 'Entrecôte',
    volume: '1 kg',
    price: 261,
    image:
      'https://www.scan.se/globalassets/scan/meat-guide/styckningsdetaljer/not/03.entrecote.jpg?preset=scan-5:3',
  },
]
let pageInfo = [
  {
    category: 'Dairy',
    description: 'Quality dairy products.',
  },
  {
    category: 'Fruits',
    description: 'Quality fruits products.',
  },
  {
    category: 'Meats',
    description: 'Quality meats products.',
  },
]

function displayPageInfo(listIndex) {
  pageInfoElement.empty()
  pageInfoElement.append(
    `
    <h1>
    ${pageInfo[listIndex].category}
    </h1>
    <p>
    ${pageInfo[listIndex].description}
    </p>
    `
  )
}

$('body').on('click', '#dairy-btn', () => {
  displayProducts(dairy)
  displayPageInfo(0)
})

$('body').on('click', '#fruits-btn', () => {
  displayProducts(fruits)
  displayPageInfo(1)
})

$('body').on('click', '#meats-btn', () => {
  displayProducts(meats)
  displayPageInfo(2)
})

function displayProducts(list) {
  listOfIngredientsElement.empty()

  list.map(({ product, volume, price, image }) => {
    listOfIngredientsElement.append(
      `
      <div class='list-card'>
        <div>
          <h3>${product}</h3>
          <p>${volume}</p>
          <p>${price} </p>
        </div>
          <div>
            <img src="${image}" alt="${product}"  height="150">
          </div>
      </div>
        `
    )
  })
}

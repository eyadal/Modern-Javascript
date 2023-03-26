let listOfIngredientsElement = $('.list-of-ingredients')
let ingredients = [
  {
    product: 'Milk',
    volume: '2 Liter',
    price: 16,
    image:
      'https://d1ax460061ulao.cloudfront.net/500x500/e/7/e70ba35d76678b675eba7bfb46ca9b5d.webp',
  },
  'Cheese',
  'Chicken',
  'Apples',
  'Strawberries',
]

function displayIngredients(list) {
  list.map(({ product, volume, price, image }) => {
    listOfIngredientsElement.append(
      `
        <div class='list-card'>
          <div>
            <h3>${product}</h3>
            <p>${volume}</p>
            <p>${price} sek</p>
          </div>
          <div>
            <img src="${image}" alt="${product}" height="150">
          </div>
        </div>
      `
    )
  })
}
displayIngredients(ingredients)

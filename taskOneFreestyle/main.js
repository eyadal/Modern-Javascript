let listOfIngredientsElement = $('.list-of-ingredients')
let ingredients = [
  {
    product: 'Milk',
    volume: '1 Liter',
    price: 15,
    image: 'https://www.torebrings.se/bilder/artikelbilder/10/104989mega.jpg',
  },
  {
    product: 'Cheese',
    volume: '1 Kg',
    price: 155,
    image:
      'https://res.cloudinary.com/coopsverige/images/e_sharpen,f_auto,fl_clip,fl_progressive,q_90,c_lpad,g_center,h_330,w_330/v1646291894/cloud/248366/Ost%20Humlan%20Familjefavoriter%20Eko%20.jpg',
  },
  {
    product: 'Chicken',
    volume: '1 Kg',
    price: 180,
    image:
      'https://aldprdproductimages.azureedge.net/media/resized/$Aldi_GB/ALL_RESIZED3/4088600348513_0_XL.png',
  },
  {
    product: 'Apples',
    volume: '1 kg',
    price: 23,
    image:
      'https://appelkaka.nu/sites/appelkaka.nu/pages/appelsorter/granny_smith/appelsorter_granny_smith.jpg',
  },
  {
    product: 'Strawberries',
    volume: '1 Liter',
    price: 60,
    image:
      'https://www.unh.edu/unhtoday/sites/default/files/styles/article_huge/public/article/2017/unhorganicstrawharvest.jpg?itok=8lk_pisW',
  },
]

function displayIngredients(list) {
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
displayIngredients(ingredients)

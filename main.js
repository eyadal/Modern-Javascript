$('h1').css('color', 'red')
let myCompanyName = 'Alfa Company'
$('#company-name').text(myCompanyName)

//How to create event handler
$('body').on('click', '#change-color-btn', function () {
  $('#company-name').css('color', 'green')
})

// Step two
let tech = ['Microsoft', 'Apple', 'Google', 'Facebook', 'Amazon']
let health = ['Johnson', 'Phizer', 'Novatris', 'Merck', 'Rouch']
let industry = ['General Electric', 'Boeing', 'Ford', 'Exxon Mobile', 'Chevron']

$('body').on('click', '#tech-btn', function () {
  $('#company-type').empty()
  showCompanies(tech)
})

$('body').on('click', '#health-btn', function () {
  $('#company-type').empty()
  showCompanies(health)
})

$('body').on('click', '#industry-btn', function () {
  $('#company-type').empty()
  showCompanies(industry)
})
function showCompanies(listOfCompanies) {
  listOfCompanies.map((company, index) => {
    let htmlElement = `
      <div class="company-card">
        <h1 id="company-name">${company}</h1>
        <p>This is company description</p>
        <button id="change-color-btn">change</button>
      </div> 
      `
    $('#company-type').append(htmlElement)
  })
}

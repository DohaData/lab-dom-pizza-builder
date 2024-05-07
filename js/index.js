// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((onePep) => {
    if (state.mushrooms) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((onePep) => {
    if (state.greenPeppers) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauceElement = document.querySelector('.sauce');
  if (state.whiteSauce && !sauceElement.className.includes('sauce-white')) {
    sauceElement.classList.add('sauce-white');
  } else if (
    !state.whiteSauce &&
    sauceElement.className.includes('sauce-white')
  ) {
    sauceElement.classList.remove('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const sauceElement = document.querySelector('.crust');
  if (
    state.glutenFreeCrust &&
    !sauceElement.className.includes('crust-gluten-free')
  ) {
    sauceElement.classList.add('crust-gluten-free');
  } else if (
    !state.glutenFreeCrust &&
    sauceElement.className.includes('crust-gluten-free')
  ) {
    sauceElement.classList.remove('crust-gluten-free');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  for (const [ingredientName, ingredientInfo] of Object.entries(ingredients)) {
    const ingredientButtonsList = document.querySelectorAll('.btn');
    for (let ingredientButton of [...ingredientButtonsList]) {
      if (
        ingredientButton.textContent.toLowerCase().trim() !==
        ingredientInfo.name.toLowerCase().trim()
      ) {
        continue;
      }
      if (
        state[ingredientName] &&
        !ingredientButton.className.includes('active')
      ) {
        ingredientButton.classList.add('active');
      } else if (
        !state[ingredientName] &&
        ingredientButton.className.includes('active')
      ) {
        ingredientButton.classList.remove('active');
      }
    }
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`

  const ingredientsPriceList = document.querySelector('.panel.price ul');
  ingredientsPriceList.innerHTML = `<ul>${
    state.pepperoni
      ? '<li>$<span class="price">1</span> <span class="name">pepperoni</span></li>'
      : ''
  }
        ${
          state.mushrooms
            ? '<li>$<span class="price">1</span> <span class="name">mushrooms</span></li>'
            : ''
        }
       ${
         state.greenPeppers
           ? '<li>$<span class="price">1</span> <span class="name">green peppers</span></li>'
           : ''
       }
        ${
          state.whiteSauce
            ? '<li>$<span class="price">3</span> <span class="name">white sauce</span></li>'
            : ''
        }
       ${
         state.glutenFreeCrust
           ? '<li>$<span class="price">5</span> <span class="name">gluten-free crust</span></li>'
           : ''
       }
      </ul>`;
  document.querySelector('.panel.price strong span').textContent = [
    ...document.querySelectorAll('.panel.price span[class="price"]')
  ]
    .map((ele) => Number(ele.textContent))
    .reduce((acc, value) => acc + value, 0);
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function () {
    state.pepperoni = !state.pepperoni;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document
  .querySelector('.btn.btn-mushrooms')
  .addEventListener('click', function () {
    state.mushrooms = !state.mushrooms;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', function () {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});

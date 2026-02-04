// Food database
const foods = [
  {
    name: "Chicken Adobo",
    price: 150,
    description: "Classic soy-vinegar braised chicken",
    image: "../assets/chicken-adobo.webp",
    category: "chicken"
  },
  {
    name: "Sinigang na Baboy",
    price: 180,
    description: "Sour tamarind soup with pork",
    image: "../assets/pork-sinigang.webp",
    category: "pork"
  },
  {
    name: "Kare-Kare",
    price: 220,
    description: "Beef tripe with peanut sauce",
    image: "../assets/kare-kare.webp",
    category: "beef"
  },
  {
    name: "Lechon Paksiw",
    price: 170,
    description: "Roasted pork in rich liver sauce",
    image: "../assets/letchon-paksiw.webp",
    category: "pork"
  },
  {
    name: "Chopsuey",
    price: 120,
    description: "Mixed vegetables stir-fry",
    image: "../assets/chopsuey.webp",
    category: "beef"
  },
  {
    name: "Chicken Inasal",
    price: 150,
    description: "Grilled chicken marinated in annatto and spices",
    image: "../assets/chicken-inasal.webp",
    category: "beef"
  },
  {
    name: "Halo-Halo",
    price: 85,
    description: "Famous Filipino dessert",
    image: "../assets/halo-halo.webp",
    category: "dessert"
  },
  {
    name: "Leche Flan",
    price: 70,
    description: "Creamy caramel custard dessert",
    image: "../assets/letche-flan.webp",
    category: "dessert"
  },
  {
    name: "Bibingka",
    price: 60,
    description: "Traditional rice cake with salted egg and cheese",
    image: "../assets/bibingka.webp",
    category: "dessert"
  }
];

const menuList = document.getElementById("menu-list");

// Render foods
function displayFoods(foodArray) {
  menuList.innerHTML = "";

  if (foodArray.length === 0) {
    menuList.innerHTML = "<p class='text-center'>No food found.</p>";
    return;
  }

  foodArray.forEach(food => {
    menuList.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="card shadow-sm h-100">
          <img src="${food.image}" class="card-img-top" alt="${food.name}">
          <div class="card-body">
            <h5 class="card-title">${food.name}</h5>
            <p class="card-text text-muted">${food.description}</p>
            <p class="fw-bold">₱${food.price}.00</p>
            <button class="btn btn-warning w-100">Add to Tray</button>
          </div>
        </div>
      </div>
    `;
  });
}

// Load all foods on page load
displayFoods(foods);

// Filter by category
function filterMenu(category) {
  document.getElementById("searchInput").value = "";

  if (category === "all") {
    displayFoods(foods);
    return;
  }

  const filteredFoods = foods.filter(food => food.category === category);
  displayFoods(filteredFoods);
}

// Search by names
function searchMenu() {
  const searchValue = document
    .getElementById("searchInput")
    .value
    .toLowerCase(); 

  const searchedFoods = foods.filter(food =>
    food.name.toLowerCase().includes(searchValue)
  );

  displayFoods(searchedFoods);
}

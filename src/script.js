const menuItems = [
  { name: "Chicken Adobo", category: "chicken", price: 120 },
  { name: "Chicken Tinola", category: "chicken", price: 110 },
  { name: "Pork Sisig", category: "pork", price: 150 },
  { name: "Pork Adobo", category: "pork", price: 130 },
  { name: "Beef Caldereta", category: "beef", price: 160 },
  { name: "Leche Flan", category: "dessert", price: 80 }
];

let orderCount = 0;
let totalSales = 0;

const menuList = document.getElementById("menu-list");

function displayMenu(items) {
  menuList.innerHTML = "";

  items.forEach(item => {
    menuList.innerHTML += `
      <div class="col-md-4 mb-3">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text text-muted">₱${item.price}</p>
            <button class="btn btn-warning w-100" onclick="addOrder(${item.price})">
              Order
            </button>
          </div>
        </div>
      </div>
    `;
  });
}

function filterMenu(category) {
  if (category === "all") {
    displayMenu(menuItems);
  } else {
    const filtered = menuItems.filter(item => item.category === category);
    displayMenu(filtered);
  }
}

function searchMenu() {
  const keyword = document.getElementById("searchInput").value.toLowerCase();
  const result = menuItems.filter(item =>
    item.name.toLowerCase().includes(keyword)
  );
  displayMenu(result);
}

function addOrder(price) {
  orderCount++;
  totalSales += price;

  document.getElementById("orderCount").textContent = orderCount;
  document.getElementById("totalSales").textContent = totalSales.toFixed(2);
}

// Load all items on start
displayMenu(menuItems);

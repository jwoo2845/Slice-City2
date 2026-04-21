// TOGGLE TOPPINGS
function toggleIngredient(id) {
  document.getElementById(id).classList.toggle("hidden");
}

// SAUCE
function handleSauceChange() {
  const value = document.getElementById("sauce").value;

  document.getElementById("marinara").classList.add("hidden");
  document.getElementById("alfredo-sauce").classList.add("hidden");
  document.getElementById("bbq-sauce").classList.add("hidden");

  if (value === "marinara") {
    document.getElementById("marinara").classList.remove("hidden");
  }

  if (value === "alfredo") {
    document.getElementById("alfredo-sauce").classList.remove("hidden");
  }

  if (value === "bbq") {
    document.getElementById("bbq-sauce").classList.remove("hidden");
  }
}
//cheese
function handleCheeseChange() {

  const selected = document.querySelector('input[name="cheese"]:checked');

  if (!selected) return;

  const value = selected.value;

 
  document.getElementById("light-cheese").classList.add("hidden");
  document.getElementById("extra-cheese").classList.add("hidden");

  
  if (value === "light-cheese") {
    document.getElementById("light-cheese").classList.remove("hidden");
  }

  if (value === "extra-cheese") {
    document.getElementById("extra-cheese").classList.remove("hidden");
  }


}

// PRESET
function orderPreset(type) {
  let order = {
    category: "pizza", // default
    size: "medium",
    sauce: "",
    toppings: [],
    item: "",
    price: 0
  };

  if (type === "pepperoni") {
    order.sauce = "marinara";
    order.toppings = ["pepperoni"];
  }

  if (type === "alfredo") {
    order.sauce = "alfredo";
    order.toppings = ["chicken"];
  }

  if (type === "meatlovers") {
    order.sauce = "marinara";
    order.toppings = ["pepperoni", "sausage", "ham"];
  }

  if (type === "pineapple") {
    order.sauce = "marinara";
    order.toppings = ["ham", "pineapple"];
  }

  if (type === "barbeque") {
    order.sauce = "bbq";
    order.toppings = ["chicken", "peppers"];
  }
  // DESSERTS
if (type === "brownie") {
  order.category = "dessert";
  order.item = "Chocolate Brownie";
  order.price = 5;
}

if (type === "strawberry-cake") {
  order.category = "dessert";
  order.item = "Strawberry Cake";
  order.price = 6;
}

if (type === "cookie-cake") {
  order.category = "dessert";
  order.item = "Cookie Cake";
  order.price = 8;
}

if (type === "cinn-roll") {
  order.category = "dessert";
  order.item = "Cinnamon Roll";
  order.price = 5;
}

  localStorage.setItem("pizzaOrder", JSON.stringify(order));
  window.location.href = "order.html";
}

// BUILDER
function saveCustomOrder() {
  const sizeInput = document.querySelector('input[name="size"]:checked');

  const order = {
  category: "pizza", 
  size: sizeInput ? sizeInput.value : "small",
  sauce: document.getElementById("sauce").value,
  toppings: []
};

  const toppingIds = ["pepperoni","mushrooms","olives","sausage","peppers"];

  toppingIds.forEach(id => {
    if (!document.getElementById(id).classList.contains("hidden")) {
      order.toppings.push(id);
    }
  });

  localStorage.setItem("pizzaOrder", JSON.stringify(order));
  window.location.href = "order.html";
}
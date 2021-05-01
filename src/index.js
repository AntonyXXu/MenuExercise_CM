import "./styles.css";
import menu from "./menu";

const menuItems = menu.items;
const types = ["starters", "pasta", "pizza"];
var filteredMenu = [];

const renderMenuItem = (menuItem, item) => {
  item.innerHTML = `
    <h3 class=${menuItem.spicy ? "spicy" : ""}>
    ${menuItem.menuOrder}. ${menuItem.name}
    </h3> 
    <h4>$${menuItem.price.toFixed(2)}</h4>
    <p>${menuItem.description}</p>
    `;
};

// Iterate through each menu item, filter by type, and sort the list.
// Then, push the menu item to the filtered menu array.
const sortMenu = (filteredMenu) => {
  types.forEach((type) => {
    var menuList = menuItems
      .filter((menuItem) => {
        return menuItem.type == type;
      })
      .sort((a, b) => {
        return a.menuOrder - b.menuOrder;
      });
    filteredMenu.push(menuList);
  });
};

// Iterate through the filtered menu array and render its data
// for each item. Using vanilla JS, I tried to implement something
// similar to React, where I would render the data based on a menu item
// 'component'.
const renderAll = () => {
  document.getElementById("spicyCheck").checked;
  for (var i = 0; i < filteredMenu.length; i++) {
    const menuType = filteredMenu[i];
    var menuSection = document.getElementById(types[i]);
    var menuSectionItems = document.createElement("div");
    menuSectionItems.className = "sectionItems";
    menuType.forEach((menuItem) => {
      var item = document.createElement("div");
      item.className = menuItem.spicy ? "spicyItem item" : "item";
      renderMenuItem(menuItem, item);
      menuSectionItems.appendChild(item);
    });
    menuSection.appendChild(menuSectionItems);
  }
};

// Filter Spicy was created by changing the display of the spicyCheck class.
// I had considered using another filter and return another array of all
// menu items without the spicy property. However, this method seems less efficient
// than just hiding the display. Not a big deal in this case with few items, but
// could result in slower rendering with larger amounts of data.
const filterSpicy = () => {
  var spicyItems = document.getElementsByClassName("spicyItem");
  const show = document.getElementById("spicyCheck").checked;
  for (var i = 0; i < spicyItems.length; i++) {
    spicyItems[i].style.display = show ? "block" : "none";
  }
};

// Initialize the webpage
document.getElementById("spicyCheck").addEventListener("click", filterSpicy);
sortMenu(filteredMenu);
renderAll();

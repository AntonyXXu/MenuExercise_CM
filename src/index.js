import "./styles.css";
import menu from "./menu";

const menuItems = menu.items;

const types = ["starters", "pasta", "pizza"];

var filteredMenu = [];

const renderMenuItem = (menuItem) => {
  const name = `<h4>${menuItem.name}</h4>`;
  const description = `<p>${menuItem.description}</p>`;
  const price = `<p>$${menuItem.price.toFixed(2)}</p>`;
  const orderNumber = `<p>${menuItem.orderNumber}</p>`;

  return "<p></p>" + name + description + price + orderNumber;
};

const sortMenu = (filteredMenu) => {
  types.forEach((type) => {
    var menuList = menuItems.filter((menuItem) => {
      return menuItem.type == type;
    });
    filteredMenu.push(menuList);
  });
};

const renderAll = () => {
  var i = 0;
  document.getElementById("spicyCheck").checked;
  filteredMenu.forEach((menuType) => {
    const listID = types[i] + "List";
    menuType.forEach((menuItem) => {
      var item = document.createElement("li");
      item.className = menuItem.spicy ? "spicyItem" : "";
      console.log(menuItem.name, item.className);
      var data = document.createTextNode(renderMenuItem(menuItem));
      item.appendChild(data);
      document.getElementById(listID).appendChild(item);
    });
    i += 1;
  });
};

const filterSpicy = () => {
  var spicyItems = document.getElementsByClassName("spicyItem");
  const show = document.getElementById("spicyCheck").checked;
  console.log(show);
  for (var i = 0; i < spicyItems.length; i++) {
    spicyItems[i].style.display = show ? "list-item" : "none";
  }
};

document.getElementById("spicyCheck").addEventListener("click", filterSpicy);

sortMenu(filteredMenu);
renderAll();
console.log(filteredMenu);

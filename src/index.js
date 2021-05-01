import "./styles.css";
import menu from "./menu";

const menuItems = menu.items;

const types = ["starters", "pasta", "pizza"];

var filteredMenu = [];

types.forEach((type) => {
  var menuList = menuItems.filter((menuItem) => {
    return menuItem.type == type;
  });
  filteredMenu.push(menuList);
});

var i = 0;
filteredMenu.forEach((menuType) => {
  const listID = types[i] + "List";
  document.getElementById(listID).innerHTML = menuType;
});

console.log(filteredMenu);

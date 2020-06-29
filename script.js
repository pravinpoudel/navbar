const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const items = document.querySelectorAll(".item");
toggle.addEventListener("click", toggleMenu, false);
document.addEventListener("click", closeSubMenu, false);

function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
  } else {
    menu.classList.add("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
  }
}

function toggleItem() {
  if (this.classList.contains("submenu-active")) {
    this.classList.remove("submenu-active");
  } else if (menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove(".submenu-active");
  } else {
    this.classList.add("submenu-active");
  }
}

for (let item of items) {
  if (item.querySelector(".submenu")) {
    item.addEventListener("click", toggleItem, false);
    item.addEventListener("touch", toggleItem, false);
  }
}

function closeSubMenu(event) {
  const isClickInside = menu.contains(event.target);
  if (!isClickInside && menu.querySelector(".submenu-active")) {
    menu.querySelector("submenu-active").classList.remove("submenu-active");
  }
}

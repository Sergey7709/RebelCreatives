//! выпадающее меню
// JavaScript-код
const menuDiv = document.createElement("div");
menuDiv.className = "menu";

const menuTitle = document.createElement("p");
menuTitle.textContent = "Меню";
menuDiv.appendChild(menuTitle);
// menuTitle.onclick = () => {
//   dropdownDiv.style.display === "block"
//     ? (dropdownDiv.style.display = "none")
//     : (dropdownDiv.style.display = "block");
// };

menuDiv.onmouseover = () => (dropdownDiv.style.display = "block");
menuDiv.onmouseout = () => (dropdownDiv.style.display = "none");

const dropdownDiv = document.createElement("div");
dropdownDiv.className = "dropDown";

const addCatBtn = document.createElement("button");
addCatBtn.id = "addCatBtn";
addCatBtn.textContent = "Добавить кота";
addCatBtn.onclick = () => {
  addCatBtnHandler();
}; // добавление новой карточки кота
dropdownDiv.appendChild(addCatBtn);

const favoriteBtn = document.createElement("button");
favoriteBtn.id = "favoriteBtn";
favoriteBtn.textContent = "Избранное";
favoriteBtn.onclick = () => {
  favoriteBtnHandler();
}; // Избранное фильтр
dropdownDiv.appendChild(favoriteBtn);

const sortBtn = document.createElement("button");
sortBtn.id = "sortBtn";
sortBtn.textContent = "Сортировать по параметрам";
sortBtn.onclick = () => {
  sortBtnHandler();
}; // Сортировка
dropdownDiv.appendChild(sortBtn);

const findByNameBtn = document.createElement("button");
findByNameBtn.id = "findByNameBtn";
findByNameBtn.textContent = "Найти кота по имени";
findByNameBtn.onclick = () => {
  findByNameBtnHandler();
};
dropdownDiv.appendChild(findByNameBtn);

menuDiv.appendChild(dropdownDiv);

// добавляем элемент меню на страницу
document.querySelector("header").appendChild(menuDiv);

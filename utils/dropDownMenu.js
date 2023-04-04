//! выпадающее меню общее
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

menuDiv.onmouseover = () =>
  sortDropdownDiv.style.display !== "block"
    ? (dropdownDiv.style.display = "block")
    : (dropdownDiv.style.display = "none");
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
  dropdownDiv.style.display = "none";
  sortBtnHandler();
};
// sortBtn.onmouseover = () => {
//   console.log("ffff");
//   sortBtnHandler();
// }; // Сортировка

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

//! выпадающее меню сортировки
const sortDropdownDiv = document.createElement("div");
sortDropdownDiv.className = "dropDown sortDropdown";
sortDropdownDiv.style.display = "none";
sortDropdownDiv.onmouseover = () => (sortDropdownDiv.style.display = "block");
sortDropdownDiv.onmouseout = () => (sortDropdownDiv.style.display = "none");

const sortByUpBtn = document.createElement("button");
sortByUpBtn.id = "sortByUpBtn";
sortByUpBtn.textContent = "Сортировать по возрастанию";
sortByUpBtn.onclick = () => {
  sortByUpBtnHandler();
};
sortDropdownDiv.appendChild(sortByUpBtn);

const sortByDownBtn = document.createElement("button");
sortByDownBtn.id = "sortByDownBtn";
sortByDownBtn.textContent = "Сортировать по убыванию";
sortByDownBtn.onclick = () => {
  sortByDownBtnHandler();
};
sortDropdownDiv.appendChild(sortByDownBtn);

const sortByAgeBtn = document.createElement("button");
sortByAgeBtn.id = "sortByAgeBtn";
sortByAgeBtn.textContent = "Сортировать по возрасту";
sortByAgeBtn.onclick = () => {
  sortByAgeBtnHandler();
};
sortDropdownDiv.appendChild(sortByAgeBtn);

const sortByNameBtn = document.createElement("button");
sortByNameBtn.id = "sortByNameBtn";
sortByNameBtn.textContent = "Сортировать по имени";
sortByNameBtn.onclick = () => {
  sortByNameBtnHandler();
};
sortDropdownDiv.appendChild(sortByNameBtn);

const sortByPowerBtn = document.createElement("button");
sortByPowerBtn.id = "sortByPowerBtn";
sortByPowerBtn.textContent = "Сортировать по силе";
sortByPowerBtn.onclick = () => {
  sortByPowerBtnHandler();
};
sortDropdownDiv.appendChild(sortByPowerBtn);

// const sortByRatingBtn = document.createElement("button");
// sortByRatingBtn.id = "sortByRatingBtn";
// sortByRatingBtn.textContent = "Сортировать по рейтингу";
// sortByRatingBtn.onclick = () => {
//   sortByRatingBtnHandler();
// };
// sortDropdownDiv.appendChild(sortByRatingBtn);

menuDiv.appendChild(sortDropdownDiv);

//! выпадающее меню общее

const menuDiv = document.createElement("div");
menuDiv.className = "menu";

const menuTitle = document.createElement("p");
menuTitle.textContent = "Меню";
menuDiv.appendChild(menuTitle);

menuDiv.addEventListener("mouseover", () => {
  if (sortDropdownDiv.style.display !== "block") {
    dropdownDiv.style.display = "block";
  }
});

menuDiv.addEventListener("mouseout", () => {
  dropdownDiv.style.display = "none";
});

const dropdownDiv = document.createElement("div");
dropdownDiv.className = "dropDown";

const addCatBtn = document.createElement("button");
addCatBtn.id = "addCatBtn";
addCatBtn.textContent = "Добавить кота";
addCatBtn.addEventListener("click", () => {
  addCatBtnHandler();
});
dropdownDiv.appendChild(addCatBtn);

const favoriteBtn = document.createElement("button");
favoriteBtn.id = "favoriteBtn";
favoriteBtn.textContent = "Избранное";
favoriteBtn.addEventListener("click", () => {
  favoriteBtnHandler();
});
dropdownDiv.appendChild(favoriteBtn);

const findByNameBtn = document.createElement("button");
findByNameBtn.id = "findByNameBtn";
findByNameBtn.textContent = "Найти кота по имени";
findByNameBtn.addEventListener("click", () => {
  findByNameBtnHandler();
});
dropdownDiv.appendChild(findByNameBtn);

//! выпадающее меню сортировки

const sortBtn = document.createElement("button");
sortBtn.id = "sortBtn";
sortBtn.textContent = "Сортировать по параметрам";
sortBtn.addEventListener("click", () => {
  dropdownDiv.style.display = "none";
  sortBtnHandler();
});
// sortBtn.addEventListener("mouseover", () => {
//   sortBtnHandler();
// });
dropdownDiv.appendChild(sortBtn);

menuDiv.appendChild(dropdownDiv);

// добавляем элемент меню на страницу
document.querySelector("header").appendChild(menuDiv);

const sortDropdownDiv = document.createElement("div");
sortDropdownDiv.className = "dropDown sortDropdown";
sortDropdownDiv.style.display = "none";
sortDropdownDiv.addEventListener("mouseover", () => {
  sortDropdownDiv.style.display = "block";
});
sortDropdownDiv.addEventListener("mouseout", () => {
  sortDropdownDiv.style.display = "none";
});

const sortByUpBtn = document.createElement("button");
sortByUpBtn.id = "sortByUpBtn";
sortByUpBtn.textContent = "Сортировать по возрастанию";
sortByUpBtn.addEventListener("click", () => {
  sortByUpBtnHandler();
  sortByUpBtn.style.backgroundColor = "blueviolet";
  sortByUpBtn.style.color = "darkblue";
  sortByDownBtn.style.backgroundColor = "";
  sortByDownBtn.style.color = "";
});
sortDropdownDiv.appendChild(sortByUpBtn);

const sortByDownBtn = document.createElement("button");
sortByDownBtn.id = "sortByDownBtn";
sortByDownBtn.textContent = "Сортировать по убыванию";
sortByDownBtn.addEventListener("click", () => {
  sortByDownBtnHandler();
  sortByDownBtn.style.backgroundColor = "blueviolet";
  sortByDownBtn.style.color = "darkblue";
  sortByUpBtn.style.backgroundColor = "";
  sortByUpBtn.style.color = "";
});
sortDropdownDiv.appendChild(sortByDownBtn);

const sortByAgeBtn = document.createElement("button");
sortByAgeBtn.id = "sortByAgeBtn";
sortByAgeBtn.textContent = "Сортировать по возрасту";
sortByAgeBtn.addEventListener("click", () => {
  sortByAgeBtnHandler();
  sortByAgeBtn.style.backgroundColor = "#76c3fd";
  sortByNameBtn.style.backgroundColor = "";
  sortByPowerBtn.style.backgroundColor = "";
});
sortDropdownDiv.appendChild(sortByAgeBtn);

const sortByNameBtn = document.createElement("button");
sortByNameBtn.id = "sortByNameBtn";
sortByNameBtn.textContent = "Сортировать по имени";
sortByNameBtn.addEventListener("click", () => {
  sortByNameBtnHandler();
  sortByNameBtn.style.backgroundColor = "#76c3fd";
  sortByAgeBtn.style.backgroundColor = "";
  sortByPowerBtn.style.backgroundColor = "";
});
sortDropdownDiv.appendChild(sortByNameBtn);

const sortByPowerBtn = document.createElement("button");
sortByPowerBtn.id = "sortByPowerBtn";
sortByPowerBtn.textContent = "Сортировать по силе";
sortByPowerBtn.addEventListener("click", () => {
  sortByPowerBtnHandler();
  sortByPowerBtn.style.backgroundColor = "#76c3fd";
  sortByAgeBtn.style.backgroundColor = "";
  sortByNameBtn.style.backgroundColor = "";
});
sortDropdownDiv.appendChild(sortByPowerBtn);

menuDiv.appendChild(sortDropdownDiv);

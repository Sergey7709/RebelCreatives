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
// document.querySelector("header").appendChild(menuDiv);
const headerContent = document.querySelector(".header-content");
headerContent.prepend(menuDiv);

//! выпадающее меню сортировки

const styleButtonActive = (btnActive, btnDefolt1, btnDefolt2, btnDefolt3) => {
  btnActive.style.backgroundColor = "#500baa";
  btnActive.style.color = "white";
  btnActive.style.boxShadow =
    "0px 8px 16px 0px rgba(246, 243, 243, 0.962), 0px 0px 10px #eed620, 0px 0px 10px #eed620, 0px 0px 10px #eed620, 0px 0px 10px #eed620";
  btnDefolt1.style.backgroundColor = "";
  btnDefolt2.style.backgroundColor = "";
  btnDefolt3.style.backgroundColor = "";
  btnDefolt1.style.boxShadow = "";
  btnDefolt2.style.boxShadow = "";
  btnDefolt3.style.boxShadow = "";
  btnDefolt1.style.color = "";
  btnDefolt2.style.color = "";
  btnDefolt3.style.color = "";
};

const sortDropdownDiv = document.createElement("div");
sortDropdownDiv.className = "dropDown";
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

sortDropdownDiv.appendChild(sortByUpBtn);
sortByUpBtn.addEventListener("click", () => {
  sortByUpBtnHandler();
  sortByUpBtn.style.backgroundColor = "#500baa";
  sortByUpBtn.style.boxShadow =
    "0px 8px 16px 0px rgba(246, 243, 243, 0.962), 0px 0px 10px #eed620, 0px 0px 10px #eed620, 0px 0px 10px #eed620, 0px 0px 10px #eed620";
  sortByDownBtn.style.backgroundColor = "";
  sortByDownBtn.style.boxShadow = "";
  sortByDownBtn.style.color = "";
});

const sortByDownBtn = document.createElement("button");
sortByDownBtn.id = "sortByDownBtn";
sortByDownBtn.textContent = "Сортировать по убыванию";
sortByDownBtn.addEventListener("click", () => {
  sortByDownBtnHandler();
  sortByDownBtn.style.backgroundColor = "#500baa";
  sortByDownBtn.style.boxShadow =
    "0px 8px 16px 0px rgba(246, 243, 243, 0.962), 0px 0px 10px #eed620, 0px 0px 10px #eed620, 0px 0px 10px #eed620, 0px 0px 10px #eed620";
  sortByUpBtn.style.backgroundColor = "";
  sortByUpBtn.style.boxShadow = "";
  sortByUpBtn.style.color = "";
});
sortDropdownDiv.appendChild(sortByDownBtn);

const sortByDefaultBtn = document.createElement("button");
sortByDefaultBtn.id = "sortByDefaultBtn";
sortByDefaultBtn.textContent = "Сортировать по умолчанию";
sortByDefaultBtn.addEventListener("click", () => {
  sortByDefaulttnHandler();
  styleButtonActive(
    sortByDefaultBtn,
    sortByAgeBtn,
    sortByNameBtn,
    sortByPowerBtn
  );
});
sortDropdownDiv.appendChild(sortByDefaultBtn);

const sortByAgeBtn = document.createElement("button");
sortByAgeBtn.id = "sortByAgeBtn";
sortByAgeBtn.textContent = "Сортировать по возрасту";
sortByAgeBtn.addEventListener("click", () => {
  sortByAgeBtnHandler();
  styleButtonActive(
    sortByAgeBtn,
    sortByNameBtn,
    sortByPowerBtn,
    sortByDefaultBtn
  );
});
sortDropdownDiv.appendChild(sortByAgeBtn);

const sortByNameBtn = document.createElement("button");
sortByNameBtn.id = "sortByNameBtn";
sortByNameBtn.textContent = "Сортировать по имени";
sortByNameBtn.addEventListener("click", () => {
  sortByNameBtnHandler();
  styleButtonActive(
    sortByNameBtn,
    sortByAgeBtn,
    sortByPowerBtn,
    sortByDefaultBtn
  );
});
sortDropdownDiv.appendChild(sortByNameBtn);

const sortByPowerBtn = document.createElement("button");
sortByPowerBtn.id = "sortByPowerBtn";
sortByPowerBtn.textContent = "Сортировать по силе";
sortByPowerBtn.addEventListener("click", () => {
  sortByPowerBtnHandler();
  styleButtonActive(
    sortByPowerBtn,
    sortByAgeBtn,
    sortByNameBtn,
    sortByDefaultBtn
  );
});
sortDropdownDiv.appendChild(sortByPowerBtn);

menuDiv.appendChild(sortDropdownDiv);

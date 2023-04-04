//? работа с эвентом input checked Favotite
const onchangeFavorite = (event) => {
  if (event.target.checked === true) {
    console.log(event.target.checked);
    // favorite = !favorite;
  } else {
    console.log(event.target.checked);
  }
};

//? работа с удалением карточки по id

const deleteBtnHandler = (id) => {
  console.log(`удаление карточки с ID:${id}`);
};

//? работа с редактированием карточки
const editBtnHandler = (id) => {
  console.log(`форма редактирования карточки: ${id}`);
};

//?? добавление новой карточки кота
const addCatBtnHandler = () => {
  console.log(`Добавить карточку`);
};

//?? Избранное фильтр
const favoriteBtnHandler = () => {
  console.log(`Избранное`);
  const favoriteOn = catsPropsData.favoriteOn
    ? (catsPropsData.favoriteOn = false)
    : (catsPropsData.favoriteOn = true);
  createDomElement(catDataArray, catsPropsData.sortType, favoriteOn);
};

//?? Сортировка
const sortBtnHandler = () => {
  if (sortDropdownDiv.style.display === "block") {
    sortDropdownDiv.style.display = "none";
  } else {
    sortDropdownDiv.style.display = "block";
  }
};

//?? Поиск по имени
const findByNameBtnHandler = () => {
  console.log(`Поиск`);
};
4;

//------------------
const sortByNameBtnHandler = () => {
  catsPropsData.sortType = "name";
  createDomElement(catDataArray, catsPropsData.sortType);
};

const sortByAgeBtnHandler = () => {
  catsPropsData.sortType = "age";
  createDomElement(catDataArray, catsPropsData.sortType);
};

const sortByPowerBtnHandler = () => {
  catsPropsData.sortType = "rate";
  createDomElement(catDataArray, catsPropsData.sortType);
};

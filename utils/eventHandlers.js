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
};

//?? Сортировка
const sortBtnHandler = () => {
  console.log(`Сортировка`);
};

//?? Поиск по имени
const findByNameBtnHandler = () => {
  console.log(`Поиск`);
};

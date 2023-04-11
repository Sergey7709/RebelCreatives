//? работа с эвентом input checked Favotite
const onchangeFavorite = (event, cat) => {
  const newFavoriteValue = !cat.favorite;
  if (newFavoriteValue) {
    console.log(event.target.checked);
    const favoriteCat = { ...cat, favorite: true };
    putCatRequest(favoriteCat);
    console.log(favoriteCat);
  } else {
    console.log(event.target.checked);
    const notFavoriteCat = { ...cat, favorite: false };
    putCatRequest(notFavoriteCat);
    console.log(notFavoriteCat);
  }
};

//? работа с удалением карточки по id

const deleteBtnHandler = (id) => {
  console.log(`удаление карточки с ID:${id}`);
  openModalWindow("Вы уверены, что хотите удалить информацию о коте?", id);
};

//? работа с редактированием карточки
const editBtnHandler = (id) => {
  console.log(`форма редактирования карточки: ${id}`);
  // formCardCat(id, catsPropsData.catDataArray);
  const { sessionWorkingArray } = localStorage;
  const localCatData = JSON.parse(sessionWorkingArray);
  formCardCat(id, localCatData);
};

//?? добавление новой карточки кота
const addCatBtnHandler = () => {
  console.log(`Добавить карточку`);
  document.querySelector(".wrapperForm") ? null : formCardCat();
};

//?? Избранное фильтр
const favoriteBtnHandler = () => {
  console.log(`Избранное`);

  const { favoriteOn, catDataArray, sortType } = catsPropsData;

  const newFavoriteOn = favoriteOn
    ? (catsPropsData.favoriteOn = false)
    : (catsPropsData.favoriteOn = true);

  if (newFavoriteOn) {
    favoriteBtn.style.backgroundColor = "#500baa";
    favoriteBtn.style.boxShadow =
      "0px 8px 16px 0px rgba(246, 243, 243, 0.962), 0px 0px 10px #eed620, 0px 0px 10px #eed620, 0px 0px 10px #eed620, 0px 0px 10px #eed620";
  } else {
    favoriteBtn.style.boxShadow = "";
    favoriteBtn.style.backgroundColor = "";
  }
  createDomElement(catDataArray, sortType, newFavoriteOn);
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
  const input = document.querySelector(".inputSearch");
  if (input) {
    input.remove();
  } else {
    const header = document.querySelector(".menu");

    const input = document.createElement("input");
    input.placeholder = "Введите имя кота...";
    input.className = "inputSearch";
    input.name = "text";
    input.type = "text";

    header.after(input);

    input.onchange = (event) => {
      const catName = event.currentTarget.value.trim().toLowerCase();
      const findCatName = catsPropsData.catDataArray.find(
        (cat) => cat.name.toLowerCase() === catName
      );
      input.value = "";
      console.log([findCatName]);
      createDomElement([findCatName]);
    };
  }
};

//-----------------

const saveByNameBtnHandler = () => {
  const catsDataFromSave = catsPropsData.catDataArray;
  localStorage.setItem("saveCatsData", JSON.stringify(catsDataFromSave));
  openModalWindow("Данные сохранены на этом устройстве");
  console.log("save");
  console.log(catsDataFromSave);
};

const restoreByNameBtnHandler = () => {
  const saveCatsData = localStorage.getItem("saveCatsData");
  const restoreCatsData = JSON.parse(saveCatsData);
  createDomElement(restoreCatsData);
  openModalWindow("Сохраненные данные востановлены на этом устройстве");
};

//------------------
const sortByNameBtnHandler = () => {
  catsPropsData.sortType = "name";
  createDomElement(catsPropsData.catDataArray);
};

const sortByAgeBtnHandler = () => {
  catsPropsData.sortType = "age";
  createDomElement(catsPropsData.catDataArray);
};

const sortByPowerBtnHandler = () => {
  catsPropsData.sortType = "rate";
  createDomElement(catsPropsData.catDataArray);
};

const sortByUpBtnHandler = () => {
  catsPropsData.sortUp = true;
  createDomElement(catsPropsData.catDataArray);
};
const sortByDownBtnHandler = () => {
  catsPropsData.sortUp = false;
  createDomElement(catsPropsData.catDataArray);
};

const sortByDefaulttnHandler = () => {
  catsPropsData.sortType = "id";
  createDomElement(catsPropsData.catDataArray);
};

//-----------------
const formHandler = (
  event,
  idInput,
  ageInput,
  nameInput,
  ratingInput,
  descriptionInput,
  imgInput,
  id
) => {
  event.preventDefault(); // Отменяем стандартное поведение браузера

  // Получаем значения полей формы
  const idValue = Number(idInput.value.trim());
  const ageValue = Number(ageInput.value.trim());
  const nameValue = nameInput.value.trim();
  const ratingValue = Number(ratingInput.value.trim());
  const descriptionValue = descriptionInput.value.trim();
  const imgValue = imgInput.value.trim();

  if (typeof idValue !== "number" || isNaN(idValue)) {
    return;
  }

  if (typeof ageValue !== "number" || isNaN(ageValue)) {
    return;
  }

  if (typeof ratingValue !== "number" || isNaN(ratingValue)) {
    return;
  }

  // Создаем объект с данными кота
  const catData = {
    id: idValue,
    age: ageValue,
    name: nameValue,
    rate: ratingValue,
    description: descriptionValue,
    image: imgValue,
    favorite: false,
  };

  const catsObjFromSave = catData;
  localStorage.setItem("objectCat", JSON.stringify(catsObjFromSave));

  id ? putCatRequest(catData) : postCatRequest(catData);

  // Очищаем поля формы
  idInput.value = "";
  ageInput.value = "";
  nameInput.value = "";
  ratingInput.value = "";
  descriptionInput.value = "";
  imgInput.value = "";

  // Закрываем форму

  const wrapperForm = document.querySelector(".wrapperForm");
  const form = document.querySelector(".form");
  form.remove();
  wrapperForm.remove();
};

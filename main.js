//
const catsPropsData = {
  catDataArray: [],
  favoriteOn: false,
  sortType: "id",
  sortUp: true,
  buttonEnabled: "",
};
// const { catDataArray, favoriteOn } = catsPropsData;
// let catDataArray;
// const favorite = { enabled: false };

const addCatData = (catResponse) => {
  localStorage.startSessionArray = JSON.stringify(catResponse);
  const { startSessionArray } = localStorage;
  catDataArray = JSON.parse(startSessionArray);
  createDomElement(catResponse);
  console.log("addCatData");
};

const createDomElement = (
  catDataArray,
  sortType = catsPropsData.sortType,
  favoriteOn = false,
  sortUp = catsPropsData.sortUp
) => {
  if (!catDataArray.length) {
    console.log("Данные о котиках отсутствуют");
  } else {
    const sortArray = [...catDataArray].sort((a, b) => {
      switch (sortType) {
        case "name":
          return sortUp
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name);
        case "rate":
          return sortUp ? a.rate - b.rate : b.rate - a.rate;
        case "age":
          return sortUp ? a.age - b.age : b.age - a.age;
        default:
          console.log(catsPropsData.sortType);
          return sortUp ? a.id - b.id : b.id - a.id;
      }
    });
    const renderArray =
      favoriteOn === true ? sortArray.filter((cat) => cat.favorite) : sortArray;

    renderCatCard(renderArray);

    //
    // console.log(sortArray);
    // renderCatCard(favoriteArray);
    // renderCatCard(sortArray);
    // console.log(`Количество котиков: ${catDataArray.length}`);
    // renderCatCard(catDataArray); // передаем результат напрямую в функцию рендеринга карточки
    // console.log(catData);
    // console.log(favoriteOn);
  }
};

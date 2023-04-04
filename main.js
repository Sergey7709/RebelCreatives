//
const catsPropsData = {
  catDataArray: [],
  favoriteOn: false,
  sortType: "id",
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
  favoriteOn = false
) => {
  if (!catDataArray.length) {
    console.log("Данные о котиках отсутствуют");
  } else {
    const sortArray = [...catDataArray].sort((a, b) => {
      switch (sortType) {
        case "name":
          return a.name.localeCompare(b.name);
        case "rate":
          return b.rate - a.rate;
        case "age":
          return a.age - b.age;
        default:
          console.log(catsPropsData.sortType);
          return a.id - b.id;
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

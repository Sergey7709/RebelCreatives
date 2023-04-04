// const getCatsRequest = async () => {
//   try {
//     const catRequest = await fetch(
//       "https://cats.petiteweb.dev/api/single/SergeyK77/show"
//     );
//     if (catRequest.ok) {
//       const catResponse = await catRequest.json(); // добавляем 'await' для получения ответа от сервера
//       return catResponse;
//     } else {
//       throw new Error("Ошибка запроса"); // генерируем ошибку, если запрос не удался
//     }
//   } catch (error) {
//     console.error(`Ошибка: ${error}`); // выводим сообщение об ошибке в консоль
//     throw error; // пробрасываем ошибку дальше
//   }
// };

// const getCatData = async () => {
//   try {
//     const catDataArray = await getCatsRequest();
//     // renderCatCard(catDataResult); // передаем результат напрямую в функцию рендеринга карточки
//     // console.log(catDataResult);
//     createDomElement(catDataArray);
//   } catch (error) {
//     console.error(error);
//   }
// };

// getCatData();

const urlCatsData = "https://cats.petiteweb.dev/api/single/SergeyK77/";

const getCatsRequest = async () => {
  // запрос данных от сервера
  try {
    const catRequest = await fetch(`${urlCatsData}show`);
    if (catRequest.ok) {
      catResponse = await catRequest.json(); // добавляем 'await' для получения ответа от сервера
      addCatData(catResponse); // передаем результат напрямую в функцию создания DOM
      // createDomElement(catResponse); // передаем результат напрямую в функцию создания DOM
      // console.log(catResponse);
      return catResponse;
    } else {
      throw new Error("Ошибка запроса"); // генерируем ошибку, если запрос не удался
    }
  } catch (error) {
    console.error(`Ошибка: ${error}`); // выводим сообщение об ошибке в консоль
    throw error; // пробрасываем ошибку дальше
  }
};

getCatsRequest();
// console.log(catResponse);

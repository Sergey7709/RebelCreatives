const getCatsRequest = async () => {
  try {
    const catRequest = await fetch(
      "https://cats.petiteweb.dev/api/single/SergeyK77/show"
    );
    if (catRequest.ok) {
      const catResponse = await catRequest.json(); // добавляем 'await' для получения ответа от сервера
      return catResponse;
    } else {
      throw new Error("Ошибка запроса"); // генерируем ошибку, если запрос не удался
    }
  } catch (error) {
    console.error(`Ошибка: ${error}`); // выводим сообщение об ошибке в консоль
    throw error; // пробрасываем ошибку дальше
  }
};

const getCatData = async () => {
  try {
    const catDataResult = await getCatsRequest();
    renderCatCard(catDataResult); // передаем результат напрямую в функцию рендеринга карточки
    // console.log(catDataResult);
  } catch (error) {
    console.error(error);
  }
};

getCatData();

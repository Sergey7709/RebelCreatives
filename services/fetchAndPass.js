const urlCatsData = "https://cats.petiteweb.dev/api/single/SergeyK77/";

const getCatsRequest = async () => {
  // запрос данных от сервера
  try {
    const catRequest = await fetch(`${urlCatsData}show`);
    if (catRequest.ok) {
      catResponse = await catRequest.json(); // добавляем 'await' для получения ответа от сервера
      addCatData(catResponse); // передаем результат напрямую в функцию создания DOM
      return catResponse;
    } else {
      throw new Error("Ошибка запроса"); // генерируем ошибку, если запрос не удался
    }
  } catch (error) {
    console.error(`Ошибка: ${error}`);
    openModalWindow(
      "Сервер оффлайн, данные восстановлены из локального хранилища"
    ); // выводим сообщение об ошибке в консоль
    const catsDataFromStorage = localStorage.getItem("sessionWorkingArray");
    if (catsDataFromStorage) {
      const catsData = JSON.parse(catsDataFromStorage);
      addCatData(catsData); // передаем данные из local storage в функцию создания DOM
      return catsData;
    } else {
      throw error; // пробрасываем ошибку дальше, если данные в local storage отсутствуют
    }
  }
};

getCatsRequest();

const postCatRequest = async (cat) => {
  try {
    const addCatRequest = await fetch(`${urlCatsData}add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cat),
    });
    if (addCatRequest.ok) {
      catResponse = await addCatRequest.json();
      console.log(catResponse);
      openModalWindow("Информация о коте успешно добавлена на сервере");
      getCatsRequest();
    }
    return addCatRequest;
  } catch (error) {
    console.error(`Ошибка: ${error}`); // выводим сообщение об ошибке в консоль
    throw error; // пробрасываем ошибку дальше
  }
};

const putCatRequest = async (updCat) => {
  try {
    const updateCatRequest = await fetch(`${urlCatsData}update/${updCat.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updCat),
    });
    if (updateCatRequest.ok) {
      catResponse = await updateCatRequest.json();
      console.log(catResponse);
      openModalWindow("Информация о коте успешно обновлена на сервере");
      getCatsRequest();
    }
    return updateCatRequest;
  } catch (error) {
    console.error(`Ошибка: ${error}`); // выводим сообщение об ошибке в консоль
    throw error; // пробрасываем ошибку дальше
  }
};

const deleteCatRequest = async (catId) => {
  try {
    const removeCatRequest = await fetch(`${urlCatsData}delete/${catId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (removeCatRequest.ok) {
      catResponse = await removeCatRequest.json();
      console.log(catResponse);
      openModalWindow("Информация о коте успешно удалена на сервере");
      getCatsRequest();
    }
    return removeCatRequest;
  } catch (error) {
    console.error(`Ошибка: ${error}`); // выводим сообщение об ошибке в консоль
    throw error; // пробрасываем ошибку дальше
  }
};

const renderCatCard = (catDataArray) => {
  const catCards = document.querySelector("#cat_cards");
  catCards.innerHTML = "";

  //! Создание элементов DOM
  catDataArray.map((cat) => {
    const { id, name, description, image, rate, favorite, age } = cat;

    const card = document.createElement("div");
    card.classList.add("card");

    const label = document.createElement("label");
    label.classList.add("card_star");

    const input = document.createElement("input");
    input.type = "checkbox";

    //? работа с эвентом input checked
    input.onchange = (event) => {
      onchangeFavorite(event, cat);
    };

    const i = document.createElement("i");
    if (favorite) {
      i.classList.add("fa-sharp", "fa-solid", "fa-star", "fa-xs", "fa-flip");
      i.style.color = "#ed8002";
    } else {
      i.classList.add("fa-regular", "fa-star", "fa-xs");
    }
    i.title = "Избранные коты";

    label.appendChild(input);
    label.appendChild(i);

    const img = document.createElement("img");
    img.src = img.src =
      image.length > 0 && image.startsWith("https")
        ? image
        : "https://i.pinimg.com/originals/58/fe/9b/58fe9bb8e043ebf9a7e5e129c43ac97c.jpg";
    img.alt = "IMAGE NOT FOUND";

    const catName = document.createElement("p");
    catName.classList.add("catName");
    catName.textContent = name.toLocaleUpperCase();

    const catRating = document.createElement("p");
    catRating.classList.add("Rate");
    catRating.textContent = `РЕЙТИНГ СИЛЫ: ${rate}`;

    const content = document.createElement("div");
    content.classList.add("content");

    const title = document.createElement("p");
    title.classList.add("title");
    title.textContent = `Мне: ${age} лет.
    ${description}`; // описание и возраст

    const sci = document.createElement("div");
    sci.classList.add("sci");

    const editButton = document.createElement("button");
    const editIcon = document.createElement("i");
    editIcon.classList.add("fa-solid", "fa-pencil", "fa-lg");
    editIcon.title = "Редактировать данные кота";
    editButton.appendChild(editIcon);
    editButton.onclick = () => {
      editBtnHandler(id);
    }; //? работа с редактированием карточки

    const deleteButton = document.createElement("button");
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-solid", "fa-trash-can", "fa-lg");
    deleteIcon.title = "Удалить кота";
    deleteButton.appendChild(deleteIcon);
    //? работа с удалением карточки по id
    deleteButton.onclick = () => {
      deleteBtnHandler(id);
    };
    //! Добавление элементов в DOM
    sci.appendChild(editButton);
    sci.appendChild(deleteButton);

    content.appendChild(title);
    content.appendChild(sci);

    card.appendChild(label);
    card.appendChild(img);
    card.appendChild(catName);
    card.appendChild(catRating);

    card.appendChild(content);

    catCards.appendChild(card);
  });
};

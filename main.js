const renderCatCard = (catDataResult) => {
  const catCards = document.querySelector("#cat_cards");

  //! Создание элементов DOM
  catDataResult.forEach((cat) => {
    const { id, name, description, image, rate, favorite } = cat;

    const card = document.createElement("div");
    card.classList.add("card");

    const label = document.createElement("label");
    label.classList.add("card_star");

    const input = document.createElement("input");
    input.type = "checkbox";

    //? работа с эвентом input checked
    input.onchange = (event) => {
      onchangeFavorite(event);
    };

    const i = document.createElement("i");
    if (favorite) {
      i.classList.add("fa-sharp", "fa-solid", "fa-star", "fa-xl", "fa-flip");
      i.style.color = "#ed8002";
    } else {
      i.classList.add("fa-regular", "fa-star", "fa-xl");
    }
    i.title = "Favorite cats";

    label.appendChild(input);
    label.appendChild(i);

    const img = document.createElement("img");
    img.src = image;
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
    title.textContent = description;

    const sci = document.createElement("div");
    sci.classList.add("sci");

    const editButton = document.createElement("button");
    const editIcon = document.createElement("i");
    editIcon.classList.add("fa-solid", "fa-pencil", "fa-2xl");
    editIcon.title = "Edit cats";
    editButton.appendChild(editIcon);
    editButton.onclick = () => {
      editBtnHandler(id);
    }; //? работа с редактированием карточки

    const deleteButton = document.createElement("button");
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-solid", "fa-trash-can", "fa-2xl");
    deleteIcon.title = "Delete cats";
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

// //
// const formCardCat = () => {
//   const wrapperForm = document.createElement("div");
//   wrapperForm.className = "wrapperForm";

//   const form = document.createElement("form");
//   form.className = "form";

//   const title = document.createElement("p");
//   title.className = "titleForm";
//   title.textContent = "Карточка нового кота";
//   form.appendChild(title);

//   const message = document.createElement("p");
//   message.className = "message";
//   message.textContent = "Введите информацию о коте";
//   form.appendChild(message);

//   const flexDiv = document.createElement("div");
//   flexDiv.className = "flex";
//   form.appendChild(flexDiv);

//   const idLabel = document.createElement("label");
//   flexDiv.appendChild(idLabel);

//   const idInput = document.createElement("input");
//   idInput.setAttribute("required", "");
//   idInput.setAttribute("type", "text");
//   idInput.className = "input";
//   idInput.placeholder = "";
//   idLabel.appendChild(idInput);

//   const idSpan = document.createElement("span");
//   idSpan.textContent = "ID";
//   idLabel.appendChild(idSpan);

//   const ageLabel = document.createElement("label");
//   flexDiv.appendChild(ageLabel);

//   const ageInput = document.createElement("input");
//   ageInput.setAttribute("required", "");
//   ageInput.setAttribute("type", "text");
//   ageInput.className = "input";
//   ageInput.placeholder = "";
//   ageLabel.appendChild(ageInput);

//   const ageSpan = document.createElement("span");
//   ageSpan.textContent = "Возраст";
//   ageLabel.appendChild(ageSpan);

//   const nameLabel = document.createElement("label");
//   form.appendChild(nameLabel);

//   const nameInput = document.createElement("input");
//   nameInput.setAttribute("required", "");
//   nameInput.setAttribute("type", "text");
//   nameInput.className = "input";
//   nameInput.placeholder = "";
//   nameLabel.appendChild(nameInput);

//   const nameSpan = document.createElement("span");
//   nameSpan.textContent = "Имя";
//   nameLabel.appendChild(nameSpan);

//   const RatingLabel = document.createElement("label");
//   form.appendChild(RatingLabel);

//   const RatingInput = document.createElement("input");
//   RatingInput.setAttribute("required", "");
//   RatingInput.setAttribute("type", "text");
//   RatingInput.className = "input";
//   RatingInput.placeholder = "";
//   RatingLabel.appendChild(RatingInput);

//   const RatingSpan = document.createElement("span");
//   RatingSpan.textContent = "Рейтинг силы";
//   RatingLabel.appendChild(RatingSpan);

//   const descriptionLabel = document.createElement("label");
//   form.appendChild(descriptionLabel);

//   const descriptionInput = document.createElement("textarea");
//   descriptionInput.setAttribute("required", "");
//   // descriptionInput.setAttribute("type", "textarea");
//   descriptionInput.className = "input";
//   descriptionInput.placeholder = "";
//   descriptionLabel.appendChild(descriptionInput);

//   const descriptionSpan = document.createElement("span");
//   descriptionSpan.textContent = "Описание кота";
//   descriptionLabel.appendChild(descriptionSpan);

//   const submitButton = document.createElement("button");
//   submitButton.className = "submit";
//   submitButton.textContent = "Submit";
//   form.appendChild(submitButton);

//   // const signinMessage = document.createElement("p");
//   // signinMessage.className = "signin";
//   // signinMessage.innerHTML = 'Already have an account? <a href="#">Signin</a>';
//   // form.appendChild(signinMessage);

//   // Создаем кнопку закрытия формы
//   const closeButton = document.createElement("button");
//   closeButton.className = "close";
//   closeButton.textContent = "X";
//   form.appendChild(closeButton);

//   // Назначаем обработчик события для кнопки закрытия
//   closeButton.addEventListener("click", () => {
//     // Удаляем форму из DOM-дерева
//     form.remove();
//     wrapperForm.remove();
//     // blurMain.style.filter = "";
//   });
//   const addFormCardCat = document.querySelector("body");
//   addFormCardCat.prepend(wrapperForm);
//   wrapperForm.prepend(form);
//   const blurMain = document.querySelector("main");
//   // blurMain.style.filter = "blur(3px)";
//   wrapperForm.style.display = "block";
// };
//?
const formCardCat = (id = false, catDataArray = catsPropsData.catDataArray) => {
  const editCardCat = id ? catDataArray.filter((cat) => cat.id === id) : [{}];

  const wrapperForm = document.createElement("div");
  wrapperForm.className = "wrapperForm";

  const form = document.createElement("form");
  form.className = "form";

  const title = document.createElement("p");
  title.className = "titleForm";
  title.textContent = id
    ? "Карточка редактирования кота"
    : "Карточка нового кота";
  form.appendChild(title);

  const flexDiv = document.createElement("div");
  flexDiv.className = "flex";
  form.appendChild(flexDiv);

  //* Создаем label и input для ID
  const idLabel = document.createElement("label");
  flexDiv.appendChild(idLabel);

  const idInput = document.createElement("input");
  idInput.setAttribute("required", "");
  idInput.setAttribute("type", "text");
  idInput.className = "input";
  idInput.value = id ? `${id}` : "";

  // idInput.placeholder = "Введите ID кота";
  idLabel.appendChild(idInput);

  const idSpan = document.createElement("span");
  idSpan.textContent = "ID";
  idLabel.appendChild(idSpan);

  //* Создаем label и input для возраста
  const ageLabel = document.createElement("label");
  flexDiv.appendChild(ageLabel);

  const ageInput = document.createElement("input");
  ageInput.setAttribute("required", "");
  ageInput.setAttribute("type", "text");
  ageInput.className = "input";
  const [{ age }] = editCardCat;
  console.log(id);
  ageInput.value = id ? `${age}` : "";
  console.log(age);
  // ageInput.placeholder = "Введите возраст кота";
  ageLabel.appendChild(ageInput);

  const ageSpan = document.createElement("span");
  ageSpan.textContent = "Возраст";
  ageLabel.appendChild(ageSpan);

  //* Создаем label и input для рейтинга силы
  const ratingLabel = document.createElement("label");
  flexDiv.appendChild(ratingLabel);

  const ratingInput = document.createElement("input");
  ratingInput.setAttribute("required", "");
  ratingInput.setAttribute("type", "text");
  ratingInput.className = "input";
  const [{ rate }] = editCardCat;
  ratingInput.value = id ? `${rate}` : "";
  // ratingInput.placeholder = "Введите рейтинг силы кота";
  ratingLabel.appendChild(ratingInput);

  const ratingSpan = document.createElement("span");
  ratingSpan.textContent = "Рейтинг силы";
  ratingLabel.appendChild(ratingSpan);

  //* Создаем label и input для имени
  const nameLabel = document.createElement("label");
  form.appendChild(nameLabel);

  const nameInput = document.createElement("input");
  nameInput.setAttribute("required", "");
  nameInput.setAttribute("type", "text");
  nameInput.className = "input";
  const [{ name }] = editCardCat;
  nameInput.value = id ? `${name}` : "";
  // nameInput.placeholder = "Введите имя кота";
  nameLabel.appendChild(nameInput);

  const nameSpan = document.createElement("span");
  nameSpan.textContent = "Имя";
  nameLabel.appendChild(nameSpan);

  //* Создаем label и input для ссылки на изображение
  const imgLabel = document.createElement("label");
  form.appendChild(imgLabel);

  const imgInput = document.createElement("input");
  imgInput.setAttribute("required", "");
  imgInput.setAttribute("type", "text");
  imgInput.className = "input";
  const [{ image }] = editCardCat;
  imgInput.value = id ? `${image}` : "";
  imgLabel.appendChild(imgInput);

  const imgSpan = document.createElement("span");
  imgSpan.textContent = "Ссылка на изображение";
  imgLabel.appendChild(imgSpan);

  //* Создаем label и textarea для описания кота
  const descriptionLabel = document.createElement("label");
  form.appendChild(descriptionLabel);

  const descriptionInput = document.createElement("textarea");
  descriptionInput.setAttribute("required", "");
  descriptionInput.className = "textarea";
  const [{ description }] = editCardCat;
  descriptionInput.value = id ? `${description}` : "";
  // descriptionInput.placeholder = "Введите описание кота";
  descriptionLabel.appendChild(descriptionInput);

  const descriptionSpan = document.createElement("span");
  descriptionSpan.textContent = "Описание кота";
  descriptionLabel.appendChild(descriptionSpan);

  //* Создаем кнопку submit для отправки формы
  const submitButton = document.createElement("button");
  submitButton.className = "submit";
  submitButton.textContent = "Отправить";
  form.appendChild(submitButton);

  // Создаем кнопку закрытия формы
  const closeButton = document.createElement("button");
  closeButton.className = "close";
  closeButton.textContent = "X";
  form.appendChild(closeButton);

  // Назначаем обработчик события для кнопки закрытия
  closeButton.addEventListener("click", () => {
    // Удаляем форму из DOM-дерева
    form.remove();
    wrapperForm.remove();
    // blurMain.style.filter = "";
  });

  wrapperForm.addEventListener("click", (event) => {
    if (!form.contains(event.target)) {
      form.remove();
      wrapperForm.remove();
    }
  });

  idInput.addEventListener("input", (event) => {
    const idValue = event.currentTarget.value.trim();

    if (isNaN(idValue)) {
      idSpan.textContent = "ID должно быть числом";
      idSpan.style.color = "red";
      return;
    } else {
      idSpan.textContent = "ID";
      idSpan.style.color = "green";
    }
  });

  ageInput.addEventListener("input", (event) => {
    const ageValue = event.currentTarget.value.trim();

    if (isNaN(ageValue)) {
      ageSpan.textContent = "Возраст должен быть числом";
      ageSpan.style.color = "red";
      return;
    } else {
      ageSpan.textContent = "Возраст";
      ageSpan.style.color = "green";
    }
  });

  ratingInput.addEventListener("input", (event) => {
    const ratingValue = event.currentTarget.value.trim();

    if (isNaN(ratingValue)) {
      ratingSpan.textContent = "Рейтинг должен быть числом";
      ratingSpan.style.color = "red";
      return;
    } else {
      ratingSpan.textContent = "Возраст";
      ratingSpan.style.color = "green";
    }
  });

  // Назначаем обработчик события для отправки формы
  form.addEventListener("submit", (event) => {
    formHandler(
      event,
      idInput,
      ageInput,
      nameInput,
      ratingInput,
      descriptionInput,
      imgInput,
      id
    );
  });

  form.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      formHandler(
        event,
        idInput,
        ageInput,
        nameInput,
        ratingInput,
        descriptionInput,
        imgInput,
        id
      );
    }
  });

  const addFormCardCat = document.querySelector("body");
  addFormCardCat.prepend(wrapperForm);

  // Добавляем форму на страницу
  wrapperForm.prepend(form);
};

//?

const openModalWindow = (text, id = false) => {
  //----

  const modalOverlay = document.createElement("div");
  modalOverlay.id = "modal-overlay";
  document.body.appendChild(modalOverlay);

  const modal = document.createElement("div");
  modal.id = "modal";
  modalOverlay.appendChild(modal);

  const modalClose = document.createElement("span");
  modalClose.id = "modal-close";
  modalClose.innerHTML = "&times;";
  modal.appendChild(modalClose);

  const modalMessage = document.createElement("p");
  modalMessage.id = "modal-message";
  modalMessage.textContent = `${text}`;
  modalMessage.classList = "animate__animated animate__bounce";
  modalMessage.style =
    "animation-duration: 1s; animation-timing-function: ease-in-out";
  modal.appendChild(modalMessage);

  if (id) {
    console.log(id);
    const modalButton = document.createElement("button");
    modalButton.id = "modal-button";
    modalButton.textContent = "Подтвердить";
    modal.appendChild(modalButton);
    modalButton.addEventListener("click", () => {
      console.log("кнопка", id);
      deleteCatRequest(id);
      modalOverlay.style.display = "none";
      modalOverlay.remove();
    });
  }

  modalClose.addEventListener("click", () => {
    modalOverlay.style.display = "none";
    modalOverlay.remove();
  });

  modalOverlay.addEventListener("click", (event) => {
    if (event.target === modalOverlay) {
      modalOverlay.style.display = "none";
      modalOverlay.remove();
    }
  });
};

// openModalWindow();

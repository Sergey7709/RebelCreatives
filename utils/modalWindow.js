const openModalWindow = (text) => {
  //----

  const modalOverlay = document.createElement("div");
  modalOverlay.id = "modal-overlay";
  document.body.appendChild(modalOverlay);

  //   const modalButton = document.createElement("button");
  //   modalButton.id = "modal-button";
  //   modalButton.textContent = "Подтвердить";
  //   modalOverlay.appendChild(modalButton);

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

  //   const addModalWindow = document.querySelector("body");
  //   addModalWindow.prepend(modalOverlay);

  //---------
  const getModalOverlay = document.getElementById("modal-overlay");
  //   const modalButton = document.getElementById("modal-button");
  const getModalClose = document.getElementById("modal-close");

  //   modalButton.addEventListener("click", () => {
  //     getModalOverlay.style.display = "flex";
  //   });

  getModalClose.addEventListener("click", () => {
    getModalOverlay.style.display = "none";
  });

  getModalOverlay.addEventListener("click", (event) => {
    if (event.target === modalOverlay) {
      modalOverlay.style.display = "none";
    }
  });
};

// openModalWindow();

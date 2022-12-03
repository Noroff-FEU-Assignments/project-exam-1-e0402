const contentImage = document.querySelector(".hide-content");
const modalImage = document.querySelector(".modal-image");
const main = document.querySelector("main");

contentImage.addEventListener("click", function showModalImage() {
  modalImage.style.display = "block";
});

main.addEventListener(
  "click",
  function closeModalImage(event) {
    if (event.target.closest(".modal")) {
      modalImage.style.display = "none";
    }
  },
  false
);

const dialog = document.querySelector("dialog");
const closeBtn = document.querySelector("#closeBtn");

window.addEventListener("load", function () {
  dialog.showModal();
  document.querySelector("body").style.overflow = "hidden";
});

closeBtn.onclick = function () {
  dialog.close();
  dialog.classList.add("closing");
  document.querySelector("body").style.overflow = "auto";
  dialog.addEventListener("animationend", function () {
    dialog.style.display = "none";
  });
};

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    dialog.close();
    dialog.classList.add("closing");
    document.querySelector("body").style.overflow = "auto";
    dialog.addEventListener("animationend", function () {
      dialog.style.display = "none";
    });
  }
});

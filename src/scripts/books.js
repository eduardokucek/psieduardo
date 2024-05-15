const dialog = document.querySelector("dialog");
const closeBtn = document.querySelector("#closeBtn");

dialog.showModal();
document.querySelector("body").style.overflow = "hidden";

closeBtn.onclick = function () {
  dialog.close();
  dialog.style.display = "none";
  document.querySelector("body").style.overflow = "auto";
};

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    dialog.close();
    dialog.style.display = "none";
    document.querySelector("body").style.overflow = "auto";
  }
});

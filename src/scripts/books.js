const dialog = document.querySelector("dialog");
const closeBtn = document.getElementById("closeBtn");

window.addEventListener("load", function () {
  dialog.showModal();
  requestAnimationFrame(() => {
    dialog.classList.add("show");
  });
});

closeBtn.onclick = function () {
  dialog.classList.remove("show");
  dialog.classList.add("hide");
  dialog.addEventListener(
    "transitionend",
    function () {
      dialog.close();
      dialog.classList.remove("hide");
      // window.scrollTo({
      //   top: 0,
      //   behavior: "smooth",
      // });
    },
    { once: true }
  );
};

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    dialog.classList.remove("show");
    dialog.classList.add("hide");
    dialog.addEventListener(
      "transitionend",
      function () {
        dialog.close();
        dialog.classList.remove("hide");
      },
      { once: true }
    );
  }
});

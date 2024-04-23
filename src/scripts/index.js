function toggleMode() {
  const html = document.documentElement;

  //   if (html.classList.contains("light")) {
  //     html.classList.remove("light");
  //   } else {
  //     html.classList.add("light");
  //   }

  const img = document.querySelector("#profile__image");

  html.classList.toggle("light");

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./src/assets/eduardocolor.jpg");
    img.setAttribute(
      "alt",
      "Foto colorida de Eduardo Kucek sorrindo, usando óculos, barba, de moletom cinza, e com fundo transparente."
    );
  } else {
    img.setAttribute("src", "./src/assets/eduardobw.jpg");
    img.setAttribute(
      "alt",
      "Foto em preto e branco de Eduardo Kucek sorrindo, usando óculos, barba, de moletom cinza, e com fundo transparente."
    );
  }
}

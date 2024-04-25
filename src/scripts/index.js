function toggleMode() {
  const html = document.documentElement;

  const img = document.querySelector("#profile__image");

  html.classList.toggle("light");

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./src/assets/eduardobw.jpg");
    img.setAttribute(
      "alt",
      "Foto preto e branco de Eduardo Kucek sorrindo, usando óculos, de barba, de camiseta branca e paletó azul, e ao fundo uma estante de livros."
    );
  } else {
     img.setAttribute("src", "./src/assets/psieduardocolor.jpg");
     img.setAttribute(
       "alt",
       "Foto em preto e branco de Eduardo Kucek sorrindo, usando óculos, de barba, de camiseta branca e paletó azul, e ao fundo uma estante de livros."
     );
   }
}

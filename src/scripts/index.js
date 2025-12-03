function toggleMode() {
  const html = document.documentElement;

  html.classList.toggle("light");
}

const html = document.documentElement;
const STORAGE_KEY = "theme-preference";

function initializeTheme() {
  const savedTheme = localStorage.getItem(STORAGE_KEY);

  if (savedTheme) {
    if (savedTheme === "light") {
      html.classList.add("light");
    }
  } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    html.classList.add("light");
  }
}

function toggleMode() {
  html.classList.toggle("light");

  const currentTheme = html.classList.contains("light") ? "light" : "dark";
  localStorage.setItem(STORAGE_KEY, currentTheme);
}

initializeTheme();

import "./styles.css";

window.addEventListener("load", () => {
  const header = document.createElement("h1");
  header.innerText = "Weather App with webpack ❤️ TypeScript";

  const body = document.querySelector("body");
  body.appendChild(header);
});

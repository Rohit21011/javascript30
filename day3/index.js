const inputs = document.querySelectorAll("input");
const ChangeColor = (e) => {
  console.log(e.target.value);
  if (e.target.name == "color") {
    document.documentElement.style.setProperty(
      `--${e.target.name}`,
      `${e.target.value}`
    );
    return;
  }
  document.documentElement.style.setProperty(
    `--${e.target.name}`,
    `${e.target.value}px`
  );
};
for (let input of inputs) {
  input.addEventListener("change", ChangeColor);
  input.addEventListener("mousemove", ChangeColor);
}

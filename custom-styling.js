// Get the color picker inputs
const bgColorInput = document.getElementById("bg-color");
const textColorInput = document.getElementById("text-color");

// Update the CSS variables when the inputs change
bgColorInput.addEventListener("input", () => {
  document.documentElement.style.setProperty("--bgColor", bgColorInput.value);
});

textColorInput.addEventListener("input", () => {
  document.documentElement.style.setProperty(
    "--textColor",
    textColorInput.value,
  );
});

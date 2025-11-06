let inputBox = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");
let string = "";

// Button click logic
buttons.forEach((element) => {
  element.addEventListener("click", (e) => {
    handleInput(e.target.innerText);
  });
});

// Keyboard support
document.addEventListener("keydown", (e) => {
  const key = e.key;

  if (
    (key >= "0" && key <= "9") ||
    key === "+" ||
    key === "-" ||
    key === "*" ||
    key === "/" ||
    key === "." ||
    key === "="
  ) {
    if (key === "=") {
      e.preventDefault(); // prevent form submit
      string = String(eval(string));
      inputBox.value = string;
    } else {
      string += key;
      inputBox.value = string;
    }
  } else if (key === "Enter") {
    e.preventDefault(); // prevent form submit
    string = String(eval(string));
    inputBox.value = string;
  } else if (key === "Backspace") {
    string = string.substring(0, string.length - 1);
    inputBox.value = string;
  } else if (key === "Escape") {
    string = "";
    inputBox.value = string;
  }
});

// Common input handler (for buttons)
function handleInput(value) {
  if (value == "=") {
    string = String(eval(string));
    inputBox.value = string;
  } else if (value == "AC") {
    string = "";
    inputBox.value = string;
  } else if (value == "DEL") {
    string = string.substring(0, string.length - 1);
    inputBox.value = string;
  } else if (value == "+/-") {
    string = String(-eval(string));
    inputBox.value = string;
  } else {
    string += value;
    inputBox.value = string;
  }
}

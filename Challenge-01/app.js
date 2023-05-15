const input = document.getElementById("value");
const printBtn = document.getElementById("print");
const outputContainer = document.getElementById("output");
const clear = document.getElementById("clear");

let output = [];

if (output.length === 0) {
  outputContainer.innerHTML = `<i>No output</i>`;
}

window.addEventListener("keydown", (event) => {
  if (event.key === "/") {
    event.preventDefault();
    input.focus();
  }
});

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    printBtn.click();
  }
});

printBtn.addEventListener("click", () => {
  let value = input.value;
  let a = value * value;
  output.push(a);

  renderOutput(output, value);
});

function renderOutput(output, value) {
  clear.style.display = "block";
  let listItems = "";

  if (value === "") {
    listItems += `<span> πr² (where r is 0) = ${output}π </span>`;
  } else if (isNaN(value)) {
    listItems += `<span> String not accepted </span>`;
  } else {
    listItems += `<span> πr² (where r is ${value}) = ${output}π </span>`;
  }

  outputContainer.innerHTML = listItems;
  input.value = "";
  console.log(output);

  removeLastOutput();
}

function removeLastOutput() {
  if (output.length > 0) {
    output.pop();
  }
}

clear.addEventListener("click", () => {
  output = [];
  outputContainer.innerHTML = `<i>No output</i>`;
  clear.style.display = "none";
  console.log(output);
});

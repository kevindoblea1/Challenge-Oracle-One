const btnEncrypt = document.getElementById("button__encrypt");
const btnDecrypt = document.getElementById("button__decrypt");
const btnCopy = document.getElementById("button__copy");

function encryptMessage(string) {
  const codes = { a: "ai", e: "enter", i: "imes", o: "ober", u: "ufat" };
  return string
    .split("")
    .map((caracter) => codes[caracter] || caracter)
    .join("");
}

function toastAlert(message, color) {
  const toastAlert = document.getElementById("toastAlert");
  toastAlert.style.display = "block";
  toastAlert.classList.add("activeAnimation");
  const insert = `<p class="toastAlert" style="background-color: ${color};">${message}</p>`;
  toastAlert.innerHTML = insert;
  setTimeout(() => {
    toastAlert.style.display = "none";
    toastAlert.classList.remove("activeAnimation");
  }, 3000);
}

function hideMessage() {
  document.getElementById("message__container").style.display = "none";
}

function validateInput(string) {
  if (string.match(/[0-9]/g)) {
    return "Ingrese solo letras";
  } else if (string.match(/[A-Z]/g)) {
    return "Ingrese solo letras minúsculas";
  } else if (!string.match(/^[a-z\s]+$/g)) {
    return "Ingrese solo letras sin acentos y sin caracteres especiales";
  }
  return "validate";
}

btnEncrypt.addEventListener("click", function () {
  const enteredText = document.getElementById("input__text").value.trim();

  if (enteredText.length === 0) {
    return toastAlert("Ingrese mensaje a encriptar", "#ea580c");
  }

  if (validateInput(enteredText) === "validate") {
    document.getElementById("message__crypt").style.display = "flex";
    hideMessage();
    document.getElementById("input__text--encrypt").value =
      encryptMessage(enteredText);

    document.getElementById("input__text").value = "";
  } else {
    toastAlert(validateInput(enteredText), "#ea580c");
    document.getElementById("input__text").value = "";
  }
});

function desencryptMessage(string) {
  return string
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}

btnDecrypt.addEventListener("click", function () {
  const enteredText = document.getElementById("input__text").value.trim();

  if (enteredText.length === 0) {
    return toastAlert("Ingrese mensaje a desencriptar", "#ea580c");
  }

  hideMessage();

  document.getElementById("input__text--encrypt").value =
    desencryptMessage(enteredText);

  document.getElementById("input__text").value = "";
});

btnCopy.addEventListener("click", function () {
    const textCopy = document.getElementById("input__text--encrypt").value.trim();
    navigator.clipboard.writeText(textCopy);
  });
  

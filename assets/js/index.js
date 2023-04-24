const btnEncriptar = document.getElementById('button__encrypt')
const btnDesencriptar = document.getElementById('button__decrypt')
const btnCopiar = document.getElementById('button__copy')

function ocultarMensaje() {
    document.getElementById('message__container').style.display = 'none'
}

btnEncriptar.addEventListener('click', function(){
    const textoIngresado = document.getElementById('input__text').value.trim();
    
    if(!textoIngresado) {
    return toastAlert("Ingrese un texto a encriptar", "#ea580c");
    }
    
    const validarResultado = validarInput(textoIngresado);
    if(validarResultado === 'validate') {
        document.getElementById('message__crypt').style.display = "flex";
        ocultarMensaje();
        document.getElementById('input__text--encrypt').value = encriptarMensaje(textoIngresado);
    }else {
        toastAlert(validarResultado, "#ea580c");
    }
    document.getElementById('input__text').value = "";
})

function encriptarMensaje(cadena) {
    const equivalencia = {
        "e": "enter",
        "i": "imes",
        "a": "ai",
        "o": "ober",
        "u": "ufat"
    };
    let resultado = "";
    for (let caracter of cadena) {
        resultado += equivalencia[caracter]  || caracter;
    }
    return resultado;
}
function validarInput(cadena) {
    if(cadena.match(/0-9/g)) {
        return "Ingrese solo letras";
    } else if(cadena.match(/A-Z/g)) {
        return "Ingrese solo letras minusculas";
    } else if(!cadena.match(/^[a-z\s]+$/g)) {
        return "Ingrse solo letras minusculas, no caracteres especiales";
    }
    return 'validate';
}

function toastAlert(mensaje, color) {
    const toastAlert = document.getElementById('toastAlert');
    toastAlert.innerHTML = `<p class"toastAlert" style="background-color: ${color};" " ${mensaje}</p>`;
    toastAlert.clasList.add("activeAnimation");
    setTimeout(() => {
        toastAlert.clasList.remove("activeAnimation");
    setTimeout(() => {
        toastAlert.innerHTML = "";
    }, 800);
    }, 3200);
}

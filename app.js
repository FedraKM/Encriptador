const letraA = "ai";
const letraE = "enter";
const letraI = "imes";
const letraO = "ober";
const letraU = "ufat";


function IngresarTexto() {
    var contenedor = document.getElementById("contenedorTextArea");
    contenedor.style.display = "block";

    var textoIngresar = document.querySelector ("h1");
    textoIngresar.style.display = "none";
}

let textoEncriptado = "";
function Encriptar () {
    //Obtener texto ingresado
    var texto = document.getElementById("TextArea").value;
    texto.innerHTML = [];
    var textoModificado = "";

   for (var i = 0; i < texto.length; i++) { //Pasa letra por letra
       if (texto [i] == "a") { 
        textoModificado += letraA; //Cambiar el texto donde hay letra a con ai
        } else if (texto [i] == "e")  {
            textoModificado += letraE;
        } else if (texto [i] == "i") {
            textoModificado += letraI;
        } else if (texto [i] == "o") {
            textoModificado += letraO;
        } else if (texto[i] == "u") {
            textoModificado += letraU;
        } else {
            textoModificado += texto[i];
        }
    }

    textoEncriptado = textoModificado;

    //Aparece el texto encriptado
    var textoEncriptadoElemento = document.getElementById("contenedorTextArea2");
    textoEncriptadoElemento.innerHTML = textoModificado;
    textoEncriptadoElemento.style.display = "block";

    //Desaparece imagen y mensaje
    var imgCandado = document.querySelector (".candado");
    var Ninguntexto = document.querySelector ("h2");
    imgCandado.style.visibility = "hidden";
    Ninguntexto.style.visibility = "hidden";

}


function Copiar () {

    //parte donde del texto encriptado va a copiar
    var contenedor = document.getElementById("contenedorTextArea");
    var textarea = document.getElementById("TextArea");


    // Si el textarea está oculto, lo mostramos y limpiamos su contenido
    if (contenedor.style.display === "none") {
        textarea.value = ""; // Limpiar contenido
        contenedor.style.display = "block"; // Mostrar textarea
    } else {
        textarea.value = ""; // Limpiar contenido
    }

    

    // Copiar el texto encriptado al portapapeles 
    copyToClipboard(textoEncriptado);
    copyToClipboard(textoDesencriptado);

}

// Función para copiar texto al portapapeles
function copyToClipboard(text) {
    var tempInput = document.createElement("textArea");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
}


let textoDesencriptado = "";
function Desencriptar() {

    //Obtener texto ingresado
    var texto = document.getElementById("TextArea").value;

    // Reemplazar todas las "palabras" con sus letras correspondientes
    var textoDesencriptado2 = texto.replace(/ai|enter|imes|ober|ufat/g, function(match) {
        switch (match) {
            case "ai": return "a";
            case "enter": return "e";
            case "imes": return "i";
            case "ober": return "o";
            case "ufat": return "u";
        }
    });

    textoDesencriptado = textoDesencriptado2

    // Aparece el texto encriptado
    var textoDesencriptadoElemento = document.getElementById("contenedorTextArea2");
    textoDesencriptadoElemento.innerHTML = textoDesencriptado;
    textoDesencriptadoElemento.style.display = "block";

    // Desaparece imagen y mensaje
    var imgCandado = document.querySelector (".candado");
    var Ninguntexto = document.querySelector ("h2");
    imgCandado.style.display = "none";
    Ninguntexto.style.display = "none";
}





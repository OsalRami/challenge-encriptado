const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");
copia.style.display = "none"


function validarTexto(){
    let textoEscrito = document.querySelector(".text-area").value;
    let validador = textoEscrito.match(/^[a-z]*$/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}


function btnEncriptar(){
    if(!validarTexto()) {
        const textoEncriptado = encriptar(textArea.value)
        mensaje.value = textoEncriptado
        mensaje.style.backgroundImage = "none"
        textArea.value = "";
        copia.style.display = "block"
    
    }
}

function encriptar(stringEncriptada){
    let strBase ="$@CHECRY-%A";
    let matrizCodigo = [
        ["a", "!"], ["b", "#"], ["c", "&"], 
        ["d", "/"], ["e", "("], ["f", ")"], 
        ["g", "="], ["h", "?"], ["i", "¿"], 
        ["j", "¡"], ["k", "_"], ["l", ":"], 
        ["m", ";"], ["n", ","], ["ñ", "|"], 
        ["o", "%%"], ["p", "@@"], ["q", "--"], 
        ["x", "."], ["y", ">"], ["z", "<"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    stringEncriptada = strBase + stringEncriptada;
    console.log(stringEncriptada);
    return btoa(stringEncriptada);
}



function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    
}


function desencriptar(stringDesencriptada){
    let strBase ="$@CHECRY-%A";
    stringDesencriptada = atob(stringDesencriptada);
    let matrizCodigo = [
        ["a", "!"], ["b", "#"], ["c", "&"], 
        ["d", "/"], ["e", "("], ["f", ")"], 
        ["g", "="], ["h", "?"], ["i", "¿"], 
        ["j", "¡"], ["k", "_"], ["l", ":"], 
        ["m", ";"], ["n", ","], ["ñ", "|"], 
        ["o", "%%"], ["p", "@@"], ["q", "--"], 
        ["x", "."], ["y", ">"], ["z", "<"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])

        }

    }    
    return stringDesencriptada.replace(strBase.toLowerCase(), "");
}


function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}
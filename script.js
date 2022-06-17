function btnEncriptar() {
    const textoEncriptado = encriptar(textoParaCodificacao.value);
    textoCriptografado.value = textoEncriptado;
    textoCriptografado.style.backgroundImage = "none";
    textoDeIntroducao.style.visibility = "hidden";
}

function btnDecriptar() {
    const textoDecriptado = decriptar(textoParaCodificacao.value);
    textoCriptografado.value = textoDecriptado;
    textoCriptografado.style.backgroundImage = "none";
    textoDeIntroducao.style.visibility = "hidden";
}

function btnCopiar() {
    textoCriptografado.select();
    navigator.clipboard.writeText(textoCriptografado.value);
    textoCriptografado.style.backgroundImage = "initial";
    textoDeIntroducao.style.visibility = "visible";
}

function encriptar(codificacao) {    
    let chaveCodigo = [["e", "enter"], ["i","imes"], ["o", "ober"], ["a", "ai"], ["u", "ufat"]];

    codificacao = codificacao.toLowerCase();

    for (let i = 0; i < chaveCodigo.length; i++) {
        if (codificacao.includes(chaveCodigo[i][0])) {
            codificacao = codificacao.replaceAll(chaveCodigo[i][0], chaveCodigo[i][1])
        }
    }
    return codificacao;
}

function decriptar(decodificacao) {
    let chaveCodigo = [["ai", "a"], ["enter", "e"], ["imes","i"], ["ober", "o"], ["ufat", "u"]];

    decodificacao = decodificacao.toLowerCase();

    for (let i = 0; i < chaveCodigo.length; i++) {
        if (decodificacao.includes(chaveCodigo[i][0])) {
            decodificacao = decodificacao.replaceAll(chaveCodigo[i][0], chaveCodigo[i][1])
        }
    }
    return decodificacao;
}

const textoParaCodificacao = document.querySelector(".textoParaCodificacao");
const textoCriptografado = document.querySelector(".textoCriptografado");
const textoDeIntroducao = document.querySelector(".textoIntrodutorio");



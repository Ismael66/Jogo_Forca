const palavra = document.getElementById("palavra");
let palavraGuardada = null;
const letraErrada = [];
const campoDigitacao = document.getElementById("manual");
const container = document.querySelector(".containerReset")
import { alerta } from "./alerta_invisivel.js";
const todosOsBotoes = function () {
    const objeto = {
        "animal": escolhePalavraTema,
        "fruta": escolhePalavraTema,
        "digitar": desbloquearCampo
    }
    for (const key in objeto) {
        const campo = document.getElementById(key);
        campo.onclick = function () {
            objeto[key](key);
        }
    }
}
const alfabeto = function () {
    const tecladoInteiro = document.querySelectorAll(".getBtn");
    for (let i = 0; i < tecladoInteiro.length; i++) {
        tecladoInteiro[i].onclick = function () {
            teclado(tecladoInteiro[i].value.toLowerCase());
        }
    }
}
const bloquearBotao = function (letraClicada) {
    document.getElementById(letraClicada).disabled = true;
}
const desbloquearCampo = function () {
    reset();
    campoDigitacao.classList.remove('invisivel');
}
campoDigitacao.onkeydown = function (event) {
    const semAcento = /[a-zA-Z ]/g;
    if (event.keyCode === 13) {
        if (semAcento.test(campoDigitacao.value)) {
            digitarPalavra();
        }
        else if (campoDigitacao.value === "" || campoDigitacao.value.length === 1) {
            document.getElementById("btnReset").value = "Retornar";
            alerta("Digite uma palavra valida.", container);
        }
    }
}
const digitarPalavra = function () {
    campoDigitacao.classList.add('invisivel');
    palavraGuardada = campoDigitacao.value.normalize("NFD").replace(/[^a-zA-Z ]/g, "");
    campoDigitacao.value = "";
    inserePalavra(palavraGuardada);
}
const teclado = function (letraClicada) {
    if (palavraGuardada === null) {
        document.getElementById("btnReset").value = "Retornar";
        alerta("Escolha um tema de palavras", container);
        return;
    }
    bloquearBotao(letraClicada);
    let temALetra = false;
    let fimJogo = "";
    for (let i = 0; i < palavraGuardada.length; i++) {
        if (letraClicada == palavraGuardada[i]) {
            palavra.children[i].value = letraClicada;
            temALetra = true;
            document.getElementById(letraClicada).classList.remove("btn-outline-dark")
            document.getElementById(letraClicada).classList.add('btn-success');
        }
        fimJogo += palavra.children[i].value;
    }
    if (temALetra === false) {
        document.getElementById(letraClicada).classList.remove("btn-outline-dark")
        document.getElementById(letraClicada).classList.add('btn-danger');
        letraErrada.push(letraClicada);
        trocaBackground(letraErrada.length);
        perdeu();
    }
    ganhou(fimJogo);

}
const perdeu = function () {
    if (letraErrada.length === 3) {
        setTimeout(function () {
            document.getElementById("btnReset").value = "Tentar novamente";
            alerta("Que pena você perdeu :(", container);
        }, 300);
    }
}
const ganhou = function (fimJogo) {
    if (fimJogo === palavraGuardada) {
        setTimeout(function () {
            document.getElementById("btnReset").value = "Tentar novamente";
            alerta("Parabens!!! Você conseguiu!", container);
        }, 300);
    }
}
const trocaBackground = function () {
    document.getElementById('body').style.backgroundImage = `url(/images/frame-0${letraErrada.length}.jpg)`;
}
const escolhePalavraTema = function (campo) {
    reset();
    if (campo != "animal") {
        posicao = 1;
    }
    const tipo = {
        animal: ["macaco", "cavalo", "cachorro", "avestruz", "capivara", "arara", "crocodilo", "lagarto", "cobra", "anta"],
        fruta: ["buriti", "bacaba", "melancia", "pitaya", "kiwi", "jabuticaba", "acerola", "morango", "tomate", "manga"]
    }
    const especifico = Math.floor(Math.random() * tipo[campo].length);
    palavraGuardada = tipo[campo][especifico];
    inserePalavra(palavraGuardada);
}
const inserePalavra = function (palavraGuardada) {
    const inputs = [];
    for (let i = 0; i < palavraGuardada.length; i++) {
        inputs.push("<input type='text' id='letra' maxlength='1' class='palavraSorteada' disabled='true'>");
    }
    palavra.innerHTML = inputs.join("");
}
const reset = function () {
    someApareceBotao();
    letraErrada.length = 0;
    palavraGuardada = null;
    palavra.innerHTML = "";
    campoDigitacao.classList.add('invisivel');
    const tecladoInteiro = document.querySelectorAll(".getBtn");
    trocaBackground();
    for (let i = 0; i < tecladoInteiro.length; i++) {
        const element = tecladoInteiro[i];
        if (element.classList.contains("btn-success")) {
            element.classList.remove('btn-success');
        }
        else if (element.classList.contains("btn-danger")) {
            element.classList.remove("btn-danger")
        }
        element.classList.add('btn-outline-dark');
        element.disabled = false;
    }
}
const someApareceBotao = function () {
    document.querySelectorAll(".getControles").forEach(element => {
        if (element.classList.contains("invisivel")) {
            element.classList.remove('invisivel');
        }
        else {
            element.classList.add('invisivel');
        }
    });
}
document.getElementById("btnReset").onclick = () => {
    if (document.getElementById("btnReset").value === "Retornar") {
        alerta("", container);
    }
    else if (document.getElementById("btnReset").value === "Tentar novamente") {
        reset();
        alerta("", container);
    }
}
todosOsBotoes();
alfabeto();
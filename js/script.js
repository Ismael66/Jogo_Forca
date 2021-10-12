const palavra = document.getElementById("palavra");
let palavraGuardada = null;
const letraErrada = [];
const todosOsBotoes = function () {
    const objeto = {
        "animal": start,
        "fruta": start
        // "cor": start
    }
    for (const key in objeto) {
        const campo = document.getElementById(key);
        campo.onclick = function () {
            objeto[key](campo.value);
        }
    }
}
const alfabeto = function () {
    const tecladoInteiro = document.getElementById("teclado").children;
    for (let i = 0; i < tecladoInteiro.length; i++) {
        tecladoInteiro[i].onclick = function () {
            teclado(tecladoInteiro[i].value.toLowerCase());
        }
    }
}
const bloquearBotao = function (letraClicada) {
    document.getElementById(letraClicada).disabled = true;
}
const bloquearJogo = function () {
    const tecladoInteiro = document.getElementById("teclado").children;
    for (let i = 0; i < tecladoInteiro.length; i++) {
        tecladoInteiro[i].disabled = true;
    }
}
const teclado = function (letraClicada) {
    if (palavraGuardada === null) {
        window.alert("Escolha um tema de palavras");
        return;
    }
    bloquearBotao(letraClicada);
    let temALetra = false;
    let fimJogo = "";
    for (let i = 0; i < palavraGuardada.length; i++) {
        if (letraClicada == palavraGuardada[i]) {
            palavra.children[i].value = letraClicada;
            temALetra = true;
            document.getElementById(letraClicada).classList.add('green');
        }
        fimJogo += palavra.children[i].value;
    }
    if (temALetra === false) {
        document.getElementById(letraClicada).classList.add('red');
        letraErrada.push(letraClicada);
        if (letraErrada.length === 3) {
            setTimeout(function () {
                const derrota = window.confirm("Perdeu, quer tentar novamente?");
                if (derrota === true) {
                    reset();
                    return;
                }
                else {
                    bloquearJogo();
                }
            }, 300);
        }
    }
    if (fimJogo === palavraGuardada) {
        setTimeout(function () {
            const vitoria = window.confirm("Parabéns, quer tentar novamente?");
            if (vitoria === true) {
                reset();
                return;
            }
            else {
                bloquearJogo();
            }
        }, 300);
    }
}
const start = function (campo) {
    reset();
    let posicao = 0;
    if (campo != "animal") {
        posicao = 1;
    }
    const tipo = {
        animal: ["macaco", "cavalo", "cachorro", "avestruz", "capivara", "arara", "crocodilo", "lagarto", "cobra", "anta"],
        fruta: ["buriti", "bacaba", "melancia", "pitaya", "kiwi", "jabuticaba", "acerola", "morango", "tomate", "manga"]
    }
    const especifico = Math.floor(Math.random() * tipo[campo].length);
    palavraGuardada = tipo[campo][especifico];
    for (let i = 0; i < palavraGuardada.length; i++) {
        palavra.innerHTML += "<input type='text' id='letra' maxlength='1' class='palavraSorteada' disabled='true'>";
    }
}
const reset = function () {
    letraErrada.length = 0;
    palavraGuardada = null;
    palavra.innerHTML = "";
    const tecladoInteiro = document.getElementById("teclado").children;
    for (let i = 0; i < tecladoInteiro.length; i++) {
        const element = tecladoInteiro[i];
        element.classList.remove('green');
        element.classList.remove('red');
        element.disabled = false;
    }
}
todosOsBotoes();
alfabeto();
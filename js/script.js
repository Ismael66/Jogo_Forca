const palavra = document.getElementById("palavra");
let palavraGuardada = null;
const letraErrada = [];
const todosOsBotoes = function () {
    const objeto = {
        "animal": faz,
        "fruta": faz
        // "cor": faz
    }
    for (const key in objeto) {
        const campo = document.getElementById(key);
        campo.onclick = function () {
            objeto[key](campo.value);
        }
    }
}
const alfabeto = function () {
    const letraAlfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    for (let i = 0; i < letraAlfabeto.length; i++) {
        const letraClicada = document.getElementById(letraAlfabeto[i]);
        letraClicada.onclick = function () {
            teclado(letraClicada.value.toLowerCase());
        }
    }
}
const bloquearBotao = function (letraClicada) {
    document.getElementById(letraClicada).disabled = true;
}
const teclado = function (letraClicada) {
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
    if (fimJogo === palavraGuardada) {
        const vitoria = window.confirm("Parabéns, quer tentar novamente?");
        if (vitoria === true) {
            document.location.reload(true);
        }
    }
    if (temALetra === false) {
        letraErrada.push(letraClicada);
        if (letraErrada.length === 3) {
            const derrota = window.confirm("Perdeu, quer tentar novamente?");
            if (derrota === true) {
                document.location.reload(true);
            }
        }
    }
    document.getElementById(letraClicada).classList.add('red');
    bloquearBotao(letraClicada);
}
const faz = function (campo) {
    resetarCor();
    letraErrada.length = 0;
    let posicao = 0;
    if (campo != "animal") {
        posicao = 1;
    }
    const animal = ["macaco", "cavalo", "cachorro", "avestruz", "capivara", "arara", "crocodilo", "lagarto", "cobra", "anta"];
    const fruta = ["buriti", "bacaba", "melancia", "pitaya", "kiwi", "jabuticaba", "acerola", "morango", "tomate", "manga"];
    const all = [animal, fruta];
    const especifico = Math.floor(Math.random() * all[posicao].length);
    palavraGuardada = all[posicao][especifico];
    palavra.innerHTML = "";
    for (let i = 0; i < palavraGuardada.length; i++) {
        palavra.innerHTML += "<input type='text' id='letra' maxlength='1' class='palavraSorteada' disabled='true'>";
    }
}
const resetarCor = function () {
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
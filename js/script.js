const palavra = document.getElementById("palavra");
const letra = document.getElementById("letra");
let palavraGuardada = null;
const letraErrada = [];
const todosOsBotoes = function () {
    const objeto = {
        "animal": faz,
        "fruta": faz,
        "submit": enviar
        // "cor": faz
    }
    for (const key in objeto) {
        const campo = document.getElementById(key);
        campo.onclick = function () {
            objeto[key](campo.value);
        }
    }
}
const alfabeto = function() {
    const letraAlfabeto = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    for (let i = 0; i < letraAlfabeto.length; i++) {
        const letraClicada = document.getElementById(letraAlfabeto[i]);
        letraClicada.onclick = function () {
            imprimirClique(letraClicada.value);
        }
    }
}
const imprimirClique = function (letraClicada){
    window.alert("entrou");
    if (letra.value !== "") {
        letra.value = "";
        letra.value = letraClicada;
        bloquearBotao(letraClicada);
    }
    else {
        letra.value = letraClicada;
        bloquearBotao(letraClicada);
    }
}
const bloquearBotao = function (letraClicada){
    document.getElementById(letraClicada).disabled = true;
}
const enviar = function () {
    let temALetra = false;
    let fimJogo = "";
    for (let i = 0; i < palavraGuardada.length; i++) {
        if (letra.value == palavraGuardada[i]) {
            palavra.children[i].value = letra.value;
            temALetra = true;
        }
        fimJogo += palavra.children[i].value;
    }
    if (fimJogo === palavraGuardada ) {
        window.alert("gameover");
    }
    if (temALetra === false) {
        letraErrada.push(letra.value);
    }
    letra.value = "";
}
const faz = function (campo) {
    let posicao = 0;
    if (campo != "animal") {
        posicao = 1;
    }
    const animal = ["macaco", "cavalo", "cachorro", "avestruz", "capivara", "arara", "tamanduá", "lagarto", "cobra", "anta"];
    const fruta = ["buriti", "bacaba", "melancia", "pitaya", "kiwi", "cupu-açu", "acerola", "morango", "tomate", "romã"];
    const all = [animal, fruta];
    const especifico = Math.floor(Math.random() * all[posicao].length);
    palavraGuardada = all[posicao][especifico];
    for (let i = 0; i < palavraGuardada.length; i++) {
        palavra.innerHTML +="<input type='text' id='letra' maxlength='1' class='palavraSorteada' disabled='true'>";
 
    }
}
todosOsBotoes();
alfabeto();
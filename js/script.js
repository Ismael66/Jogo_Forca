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

// const animalEspecifico = Math.floor(Math.random() * todosAnimais.length);
// palavra.innerHTML = todosAnimais[animalEspecifico];
// palavra.innerHTML = "";
// const palavraGuardada = todosAnimais[animalEspecifico];
// for (let i = 0; i < palavraGuardada.length; i++) {
//     palavra.innerHTML += "_ ";
// }
// window.alert(palavraGuardada);
// confereLetra(palavraGuardada);

// const todosAnimais = ["macaco","cavalo","cachorro","avestruz","capivara","arara","tamanduá","lagarto","cobra","anta"];
// const todasFrutas = ["buriti","bacaba","melancia","pitaya","kiwi","cupu-açu","acerola","morango","tomate","romã"];
// const all = [todosAnimais, todasFrutas];
// for (const key in all) {
//     const campo = document.getElementById(key);
//     campo.onclick = function () {
//         objeto[key](campo)
//     }
// }
// const objetoSegundo = {
//     "animal": somenteLetras,
//     "cpf": somenteNumeros
// }
// for (const key in objetoSegundo) {
//     const campo = document.getElementById(key);
//     campo.addEventListener("keypress", objetoSegundo[key]);
// }
// const confereLetra = function(palavraGuardada) {
//     for (let i = 0; i < palavraGuardada.length; i++) {
//         if (letra.value == palavraGuardada[i]) {
//             window.alert("certou");
//         }
//         else {
//             window.alert("");
//             return;
//         }
//     }
// }
// }
// const fruta = function() {
//     const frutaEspecifico = Math.floor(Math.random() * todasFrutas.length);
//     palavra.innerHTML = todasFrutas[frutaEspecifico];
// }
// const cor = function() {
//     const todasCores = ["roxo","magenta","cinza","fucsia","marrom","prateado","dourado","ciano","verde","vermelho"];
//     const corEspecifico = Math.floor(Math.random() * todasCores.length);
//     palavra.innerHTML = todasCores[corEspecifico];
// }

todosOsBotoes();
export function alerta(mensagem, container){
    // const container = document.querySelector(".containerReset");
    if (container.classList.contains("hidden")){
        container.classList.remove("hidden");
        container.children[0].innerHTML = mensagem;
    }
    else
        container.classList.add("hidden");
}



alert("Bem Vindo!")

const titulo = document.querySelector("#titulo");
titulo.classList.add ("bemGrande");
console.log("Classe do HTML adicionada com sucesso!");

/* titulo.onclick
on = eventos relacionados ao navegador */
 
const certo = document.querySelector("#certo");
const errado = document.querySelector("#errado");

/*toda função que responde a um evento não pode ter argumentos*/
function gatoErrado (){
    alert("GATO ERRADO! Clique no outro gato!");
}

function gatoCerto (){
    certo.src = "http://placekitten.com/319/319"
    alert("GATO CERTO! Parabéns, você acertou o gato! Faça um carinho! <3 ");
}

function gatoFoge (){
    errado.src = "http://placekitten.com/1/1"
}

errado.onclick = gatoErrado;
certo.onclick = gatoCerto;
errado.onmouseenter = gatoFoge;
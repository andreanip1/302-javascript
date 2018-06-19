DOM // acesso dinamico na página em tempo real 

QuerySelector:  
document.querySelector("seletorCSS");
let minhaNav = document.querySelector("header nav");
titulo.innerHTML =  "Bem Vindo à pagina dos dois gatos"; // altera o conteúdo do título


let meuTitulo = document.querySelector("#titulo");
meuTitulo.id = "azul" //altera a id do objeto dinamicamente 

meuTitulo.classList.add("bemGrande"); //adiciona uma classe ao objeto dinamicamente 
meuTitulo.classList.remove("bemGrande"); //remove uma classe ao objeto dinamicamente

// percorrer a lista para adicionar as classes
for(let ancora of ancoras){
    ancora.classList.add("bunitinha");
}

let header = document.querySelector ("header");
header.style.margin = "30px 0";
header.style.backgroundColor = "green";

setTimeout(funcao, 5000); //evento de tempo, executa a função apos determinado tempo. onde 1s = 1000
setInterval (funcao, 1000); //executa a função em um intervalo de tempo infinitamente
clearInterval (janelaChata); //interrompe a execução da função;

let janelaChata = setInterval(funcao, 3000);




/* no javascript a sintaxe é camelCase, portanto as propriedades de CSS devem seguir esta regra */
/* os objetos em javascript são pares de chave e valor */
/* id tem prioridade de classe que tem prioridade sobre tag */
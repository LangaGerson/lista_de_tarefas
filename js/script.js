const entrada = document.getElementById('entrada');
const lista = document.getElementById('lista');
const tela = document.getElementById('tela')
function adicionar(){
    contar()
    if(entrada.value  === ''){
        alert("Por favor, escreva algo!")
    }else{
        let li =document.createElement("li");//cria um elento html
        li.innerHTML= entrada.value
        lista.appendChild(li)//adiciona na lista
        let span = document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)
        contar()
        }

        entrada.value="";
        saveData();

}

lista.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        contar()
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        contar()
    }
}, false)
function contar(){
    let num =lista.querySelectorAll("li").length
    let fished =lista.querySelectorAll("li.checked").length
    tela.innerHTML = (`Tarefas: ${num}  Concluídas: ${fished}`)
}
function saveData(){
    localStorage.setItem("data", lista.innerHTML)
}
function showlist(){
    lista.innerHTML=localStorage.getItem("data");
}
showlist()
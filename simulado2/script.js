senha=document.querySelector("#senha")


function test(){
    console.log("teste")
}

function nu(x){
senha.value=senha.value+x
console.log(senha.value)
}


function resetar(){
  
    senha.value=""
    
    senha.classList.remove('redBorder')
    
}


function subm(){
    if (senha.value !== "1234") {
        senha.classList.add('redBorder')
    }else{ 
        alert("Senha correta! Redirecionando para a página de equipamentos.")
        window.location.href  = "https://www.youtube.com/watch?v=QDia3e12czc&t=5s";     
    }
}

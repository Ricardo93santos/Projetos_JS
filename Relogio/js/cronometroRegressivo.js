let visorRegre = document.querySelector('#visorCronometroRegressivo')
let selecaoTempo = document.querySelector("#selecaoTempo")
let iniciarCrono = document.querySelector("#inicio")

visorRegre.innerHTML = `--:--`

function rodarCrono(){
  let crono
  let minutos
  let segundos
  //Função para rodar o cronometro
  function comecarCrono(){
    visorRegre.style.color = "#899095"
    segundos--
    if(segundos == -1){
      segundos = 59
      minutos--
    }
    if(minutos == 0 && segundos == 0){
      clearInterval(crono)
      iniciarCrono.disabled = false
      visorRegre.style.color = "red"
    }
    
    let formatoVisor = (minutos < 10 ? `0${minutos}` : minutos)+ ":" + (segundos < 10 ? `0${segundos}`: segundos)
    return visorRegre.innerHTML = `${formatoVisor}`
  }
 
  // Execulta se selecionar 30 minutos
  if(selecaoTempo.selectedIndex == 0){
    minutos = 30
    segundos = 0
    crono = setInterval(comecarCrono, 1000)
    iniciarCrono.disabled = true
    comecarCrono()
   }// Execulta se selecionar 25 minutos
  else if(selecaoTempo.selectedIndex == 1){
    minutos = 25
    segundos = 0
    iniciarCrono.disabled = true
    crono = setInterval(comecarCrono, 1000)
    comecarCrono()
  }// Execulta se selecionar 20 minutos
  else if(selecaoTempo.selectedIndex == 2){
    minutos = 20
    segundos = 0
    iniciarCrono.disabled = true
    crono = setInterval(comecarCrono, 1000)
    comecarCrono()
  }// Execulta se selecionar 15 minutos
  else if(selecaoTempo.selectedIndex == 3){
    minutos = 15
    segundos = 0
    iniciarCrono.disabled = true
    crono = setInterval(comecarCrono, 1000)
    comecarCrono()
  }  
  
 // Função para trocar de tempo
 function trocarTempo(){
  visorRegre.style.color = "#899095"
  if(selecaoTempo.selectedIndex == 0){
    minutos = 30
    segundos = 0
    visorRegre.innerHTML = `${minutos}:0${segundos}`
   }// Execulta se selecionar 25 minutos
  else if(selecaoTempo.selectedIndex == 1){
    minutos = 25
    segundos = 0
    visorRegre.innerHTML = `${minutos}:0${segundos}`
  }// Execulta se selecionar 20 minutos
  else if(selecaoTempo.selectedIndex == 2){
    minutos = 20
    segundos = 0
    visorRegre.innerHTML = `${minutos}:0${segundos}`
  }// Execulta se selecionar 15 minutos
  else if(selecaoTempo.selectedIndex == 3){
    minutos = 15
    segundos = 0
    visorRegre.innerHTML = `${minutos}:0${segundos}`
  }  
  clearInterval(crono)
  iniciarCrono.disabled = false
}
selecaoTempo.addEventListener("click", trocarTempo)
}

iniciarCrono.addEventListener("click", rodarCrono)
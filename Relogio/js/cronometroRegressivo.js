let visorRegre = document.querySelector('#visorCronometroRegressivo')
let selecaoTempo = document.querySelector("#selecaoTempo")
let iniciarCrono = document.querySelector("#inicio")


function rodarCrono(){
  if(selecaoTempo.selectedIndex == 0){
    let minutos = 30
    let segundos = 0
    segundos--
    if(segundos == -1){
      segundos = 59
      minutos--
      if(minutos == -1){
        segundos = 0
        minutos = 0
        visorRegre.innerHTML = `${minutos}:${segundos}`
      }
      visorRegre.innerHTML = `${minutos}:${segundos}`
    }
  }else if(selecaoTempo.selectedIndex == 1){
    visorRegre.innerHTML = `25:00`
  }else if(selecaoTempo.selectedIndex == 2){
    visorRegre.innerHTML = `20:00`
  }else if(selecaoTempo.selectedIndex == 3){
    visorRegre.innerHTML = `15:00`
  }  
}

iniciarCrono.addEventListener("click", rodarCrono)

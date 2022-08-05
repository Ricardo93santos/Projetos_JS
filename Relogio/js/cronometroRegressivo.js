let visorRegre = document.querySelector('#visorCronometroRegressivo')
let selecaoTempo = document.querySelector("#selecaoTempo")
let iniciarCrono = document.querySelector("#inicio")

visorRegre.innerHTML = `--:--`
function rodarCrono(){
  let crono
  let minutos
  let segundos
  // Execulta se selecionar 30 minutos
  if(selecaoTempo.selectedIndex == 0){
    minutos = 30
    segundos = 0
    visorRegre.innerHTML = `${minutos}:0${segundos}`
    crono = setInterval(comecarCrono, 1000)
    iniciarCrono.disabled = true
    function comecarCrono(){
      if(selecaoTempo.selectedIndex != 0){
        clearInterval(crono)
        iniciarCrono.disabled = false
      }
      segundos--
      if(segundos == -1){
        segundos = 59
        minutos--
      }
      if(minutos == 0 && segundos == 0){
        clearInterval(crono)
        iniciarCrono.disabled = false
      }

      let formatoVisor = (minutos < 10 ? `0${minutos}` : minutos)+ ":" + (segundos < 10 ? `0${segundos}`: segundos)
      visorRegre.innerHTML = `${formatoVisor}`
    }
   }// Execulta se selecionar 25 minutos
  else if(selecaoTempo.selectedIndex == 1){
    minutos = 25
    segundos = 0
    visorRegre.innerHTML = `${minutos}:0${segundos}`
    iniciarCrono.disabled = true
    crono = setInterval(comecarCrono, 1000)
    function comecarCrono(){
      if(selecaoTempo.selectedIndex != 1){
        clearInterval(crono)
        iniciarCrono.disabled = false
      }
      segundos--
      if(segundos == -1){
        segundos = 59
        minutos--
      }
      if(minutos == 0 && segundos == 0){
        clearInterval(crono)
        iniciarCrono.disabled = false
      }
      let formatoVisor = (minutos < 10 ? `0${minutos}` : minutos)+ ":" + (segundos < 10 ? `0${segundos}`: segundos)
      visorRegre.innerHTML = `${formatoVisor}`
    }
  }// Execulta se selecionar 20 minutos
  else if(selecaoTempo.selectedIndex == 2){
    minutos = 20
    segundos = 0
    visorRegre.innerHTML = `${minutos}:0${segundos}`
    iniciarCrono.disabled = true
    crono = setInterval(comecarCrono, 1000)
    function comecarCrono(){
      if(selecaoTempo.selectedIndex != 2){
        clearInterval(crono)
        iniciarCrono.disabled = false
      }
      segundos--
      if(segundos == -1){
        segundos = 59
        minutos--
      }
      if(minutos == 0 && segundos == 0){
        clearInterval(crono)
        iniciarCrono.disabled = false
      }
      let formatoVisor = (minutos < 10 ? `0${minutos}` : minutos)+ ":" + (segundos < 10 ? `0${segundos}`: segundos)
      visorRegre.innerHTML = `${formatoVisor}`
    }
  }// Execulta se selecionar 15 minutos
  else if(selecaoTempo.selectedIndex == 3){
    minutos = 15
    segundos = 0
    visorRegre.innerHTML = `${minutos}:0${segundos}`
    iniciarCrono.disabled = true
    crono = setInterval(comecarCrono, 1000)
    function comecarCrono(){
      if(selecaoTempo.selectedIndex != 3){
        clearInterval(crono)
        iniciarCrono.disabled = false
      }
      segundos--
      if(segundos == -1){
        segundos = 59
        minutos--
      }
      if(minutos == 0 && segundos == 0){
        clearInterval(crono)
        iniciarCrono.disabled = false
      }
      if(selecaoTempo.selectedIndex == 0 || selecaoTempo.selectedIndex == 1 || selecaoTempo.selectedIndex == 2){
        clearInterval(crono)
      }
      let formatoVisor = (minutos < 10 ? `0${minutos}` : minutos)+ ":" + (segundos < 10 ? `0${segundos}`: segundos)
      visorRegre.innerHTML = `${formatoVisor}`
    }
  }  
}
iniciarCrono.addEventListener("click", rodarCrono)
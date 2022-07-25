let visor = document.querySelector("#visorCronometro")
let iniciar = document.querySelector("#iniciar")
let parar = document.querySelector("#parar")
let zerar = document.querySelector("#zerar")
let horas = 0
let minutos = 0
let segundos = 0
let cronometro

visor.innerHTML = `00:00:00`

// Função para iniciar Cronometro
function iniciarCronometro(){
  cronometro = setInterval(cronometrar, 1000)
    function cronometrar(){
      segundos++

      if(segundos == 60){
        segundos = 0
        minutos++
      }
      if(minutos == 60){
        minutos = 0
        horas++
      }
      
      let formatoDoCronometro = (horas < 10 ? `0${horas}`: horas) + ":" + (minutos < 10 ? `0${minutos}` : minutos)+ ":" + (segundos < 10 ? `0${segundos}`: segundos)

      visor.innerHTML = `${formatoDoCronometro}`
  }
  
}

//Função para parar Cronometro
function pararCronometro(){
  clearInterval(cronometro)
}

//Função para zerar Cronometro
function zerarCronometro(){
  clearInterval(cronometro)
  horas = 0
  minutos = 0
  segundos = 0

  visor.innerHTML = `00:00:00`
}

iniciar.addEventListener("click", iniciarCronometro)
parar.addEventListener("click", pararCronometro)
zerar.addEventListener("click", zerarCronometro)
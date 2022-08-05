let visor = document.querySelector("#visorCronometro")
let iniciar = document.querySelector("#iniciar")
let parar = document.querySelector("#parar")
let zerar = document.querySelector("#zerar")
let minutos = 0
let segundos = 0
let milesegundos = 0
let cronometro

visor.innerHTML = `00:00:00`

// Função para iniciar Cronometro
function iniciarCronometro(){
  iniciar.disabled = true
  cronometro = setInterval(cronometrar, 17)
    function cronometrar(){
      milesegundos++
      if(milesegundos == 60){
        milesegundos = 0
        segundos++
      }
      if(segundos == 60){
        segundos = 0
        minutos++
      }
      if(minutos == 60){
        minutos = 0
      }
      
      let formatoDoCronometro =(minutos < 10 ? `0${minutos}` : minutos)+ ":" + (segundos < 10 ? `0${segundos}`: segundos)+ ":" + (milesegundos < 10 ? `0${milesegundos}` : milesegundos)

      visor.innerHTML = `${formatoDoCronometro}`
  }
  
}

//Função para parar Cronometro
function pararCronometro(){
  clearInterval(cronometro)
  iniciar.disabled = false
}

//Função para zerar Cronometro
function zerarCronometro(){
  clearInterval(cronometro)
  horas = 0
  minutos = 0
  segundos = 0
  iniciar.disabled = false
  visor.innerHTML = `00:00:00`
}

iniciar.addEventListener("click", iniciarCronometro)
parar.addEventListener("click", pararCronometro)
zerar.addEventListener("click", zerarCronometro)
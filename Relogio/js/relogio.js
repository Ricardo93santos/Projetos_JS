function mostrarHoras(){
  const newDate = new Date()
  let horas = newDate.getHours()
  let minutos = newDate.getMinutes()
  let segundos = newDate.getSeconds()
  let relogio = document.querySelector("#relogio")

  horas > `10` ? horas = horas : horas = `0${horas}`
  minutos > `10` ? minutos = minutos : minutos = `0${minutos}`
  segundos > `10` ? segundos = segundos : segundos = `0${segundos}`

  relogio.innerHTML = `${horas}:${minutos}:${segundos}`
}

let timer=setInterval(mostrarHoras,1000);

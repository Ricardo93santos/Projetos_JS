const BT_RELOGIO = document.querySelector("#bt-relogio")
const BT_CRONOMETRO = document.querySelector("#bt-cronometro")
const BT_CRONOMETRO_REGRESSIVO = document.querySelector("#bt-cronometro-regressivo")

BT_RELOGIO.addEventListener("click", addRelogio)
BT_CRONOMETRO.addEventListener("click", addCronometro)
BT_CRONOMETRO_REGRESSIVO.addEventListener("click", addCronometroRegressivo)

function addRelogio(){
  let relogioDigital = document.querySelector("#relogio-digital")
  let cronomet = document.querySelector("#cronometro")
  let cronometroRegressivo = document.querySelector("#cronometro-regressivo")

  relogioDigital.style.display = "block"
  cronomet.style.display="none"
  cronometroRegressivo.style.display="none"
}
function addCronometro(){
  let relogioDigital = document.querySelector("#relogio-digital")
  let cronomet = document.querySelector("#cronometro")
  let cronometroRegressivo = document.querySelector("#cronometro-regressivo")

  relogioDigital.style.display = "none"
  cronomet.style.display="block"
  cronometroRegressivo.style.display="none"
}
function addCronometroRegressivo(){
  let relogioDigital = document.querySelector("#relogio-digital")
  let cronomet = document.querySelector("#cronometro")
  let cronometroRegressivo = document.querySelector("#cronometro-regressivo")

  relogioDigital.style.display = "none"
  cronomet.style.display="none"
  cronometroRegressivo.style.display="block"
}
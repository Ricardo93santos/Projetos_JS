window.addEventListener("load", addEventos);

function addEventos(){
  var btn = document.querySelector("#calcularIMC")
  var btn2 = document.querySelector("#calcularTemp")
  var btn3 = document.querySelector("#calcularMoeda")
  var btn4 = document.querySelector("#calcularDistancia")
  //Funções add das calculadoras
  btn.addEventListener("click", calcularIMC)
  btn2.addEventListener("click", calcularTemperatura)
  btn3.addEventListener("click", calcularMoeda)
  btn4.addEventListener("click", calcularDistancia)

  //Eventos para adicionar e remover as calculadoras
  var calculadoraIMC = document.querySelector("#calculadoraIMC")
  var calculadoraTemp = document.querySelector("#calculadoraTemp")
  var calculadoraMoeda = document.querySelector("#calculadoraMoeda")
  var calculadoraDist = document.querySelector("#calculadoraDist")

  calculadoraIMC.addEventListener("click", addIMC)
  calculadoraTemp.addEventListener("click", addTemperatura)
  calculadoraMoeda.addEventListener("click", addMoeda)
  calculadoraDist.addEventListener("click", addDistancia)
}

//Funções para fazer os calculos
function calcularIMC(){
  let peso = document.querySelector("#peso").value
  let altura = document.querySelector("#altura").value
  let res = document.querySelector("#resIMC")  
  let imc = peso/(altura**2)

  if(imc<18.5){
    res.innerHTML = `Seu IMC é ${imc.toFixed(2)}. Você está com magreza!`;
  }else if(imc > 18.4 && imc <= 24.9){
    res.innerHTML = `Seu IMC é ${imc.toFixed(2)}. Você está com o peso ideal!`;
  } else if(imc >24.8 && imc <= 29.9){
    res.innerHTML = `Seu IMC é ${imc.toFixed(2)}. Você está com sobrepeso!`;
  } else if(imc > 29.8 && imc <= 39.9){
    res.innerHTML = `Seu IMC é ${imc.toFixed(2)}. Você está com o obesidade!`;
  } else{
    res.innerHTML = `Seu IMC é ${imc.toFixed(2)}. Você está com o obesidade grave!`;
  }

}

function calcularTemperatura(){
  let graus = document.querySelector("#graus").value
  let temperature = document.querySelector("#temperature")
  let res = document.querySelector("#resTemp")

  if(temperature.selectedIndex == 0){
    let fahrenheit = (graus*1.8)+32
    res.innerHTML =`${graus}°C são ${fahrenheit.toFixed(2)}°F`
  }else{
    let celcius = (graus-32)/1.8
    res.innerHTML = `${graus}°F são ${celcius.toFixed(2)}°C`
  }
}

function calcularMoeda(){
  let res = document.querySelector("#resMoeda")
  let radiosDeMoeda = document.getElementsByName("deMoeda")
  let radiosParaMoeda = document.getElementsByName("paraMoeda")
  let valorMoeda = document.querySelector("#valorMoeda").value
  //Variáveis para escolher de qual moeda deve ser convertida
  let deDolar = radiosDeMoeda[0]
  let deReal = radiosDeMoeda[1]
  let deEuro = radiosDeMoeda[2]
  //Variáveis para escolher para qual moeda ser convertida
  let paraDolar = radiosParaMoeda[0]
  let paraReal = radiosParaMoeda[1]
  let paraEuro = radiosParaMoeda[2]

  //Dolar para
  if(deDolar.checked && paraReal.checked){
    let resValor = valorMoeda*5.06
    res.innerHTML= `R$${resValor.toFixed(2)} Reais`
  }else if(deDolar.checked && paraEuro.checked){
    let resValor = valorMoeda*0.88
    res.innerHTML= `€${resValor.toFixed(2)} Euros`
  }else if(deDolar.checked && paraDolar.checked){
    res.innerHTML= `Escolha moedas diferentes`
  }//Real para
  else if(deReal.checked && paraDolar.checked){
    let resValor = valorMoeda*0.20
    res.innerHTML= `$${resValor.toFixed(2)} Dolares`
  } else if(deReal.checked && paraEuro.checked){
    let resValor = valorMoeda*0.17
    res.innerHTML= `€${resValor.toFixed(2)} Euros`
  }else if(deReal.checked && paraReal.checked){
    res.innerHTML= `Escolha moedas diferentes`
  }//Euro Para
  else if(deEuro.checked && paraDolar.checked){
    let resValor = valorMoeda*1.13
    res.innerHTML= `$${resValor.toFixed(2)} Dolares`
  }else if(deEuro.checked && paraReal.checked){
    let resValor = valorMoeda*5.73
    res.innerHTML= `R$${resValor.toFixed(2)} Reais`
  }else if(deEuro.checked && paraEuro.checked){
    res.innerHTML= `Escolha moedas diferentes`
  }
}

function calcularDistancia(){
  let distancia = document.querySelector("#distancia").value
  let quilometroToMilhas = document.querySelector("#quilometroToMilhas")
  let res = document.querySelector("#resDistancia")

  if(quilometroToMilhas.selectedIndex == 0){
    let milhas = distancia/1.609
    res.innerHTML = `${milhas.toFixed(2)} Mi`
  }else{
    let quilometros = distancia*1.609
    res.innerHTML = `${quilometros.toFixed(2)} Km`
  }
}

//Função para remover e add as calculadoras
function addIMC(){
  var contIMC = document.querySelector("#IMC")
  var contTemperatura = document.querySelector("#temperatura")
  var contMoedas = document.querySelector("#moedas")
  var contDistancias = document.querySelector("#distancias")

  contIMC.style.display = "block"
  contTemperatura.style.display = "none"
  contMoedas.style.display = "none"
  contDistancias.style.display = "none"
}

function addTemperatura(){
  var contIMC = document.querySelector("#IMC")
  var contTemperatura = document.querySelector("#temperatura")
  var contMoedas = document.querySelector("#moedas")
  var contDistancias = document.querySelector("#distancias")

  contTemperatura.style.display = "block"
  contIMC.style.display = "none"
  contMoedas.style.display = "none"
  contDistancias.style.display = "none"
}

function addMoeda(){
  var contIMC = document.querySelector("#IMC")
  var contTemperatura = document.querySelector("#temperatura")
  var contMoedas = document.querySelector("#moedas")
  var contDistancias = document.querySelector("#distancias")

  contMoedas.style.display = "block"
  contIMC.style.display = "none"
  contTemperatura.style.display = "none"
  contDistancias.style.display = "none"
}
function addDistancia(){
  var contIMC = document.querySelector("#IMC")
  var contTemperatura = document.querySelector("#temperatura")
  var contMoedas = document.querySelector("#moedas")
  var contDistancias = document.querySelector("#distancias")

  contDistancias.style.display = "block"
  contIMC.style.display = "none"
  contMoedas.style.display = "none"
  contTemperatura.style.display = "none"
}
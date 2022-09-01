const html = document.querySelector('html')
const dark_check = document.querySelector("#toggle-check")

dark_check.addEventListener("change", function(){
  html.classList.toggle("dark-mode")
})
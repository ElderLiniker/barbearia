const form = document.querySelector(".formulario")
const cliqueimascara = document.querySelector(".mascara-formulario")
const localizar = document.querySelector(".button-iframe")
const meuiframe= document.querySelector("iframe")
const mascaraiframe = document.querySelector(".mascara")


function cliqueinobotao(){
    form.style.left ="50%"
    form.style.transform = "translateX(-50%)"
    cliqueimascara.style.visibility = "visible"
}

function reverter(){
    cliqueimascara.style.visibility = "hidden"
    form.style.left = "-300px"
    form.style.transform = "translateX(0)"
    



}

   
    


cliqueimascara.addEventListener("click", reverter)
localizar.addEventListener("click", iframestyle)
mascaraiframe.addEventListener("click", reverteriframe)









/*
const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".segunda-mascara ")


function cliqueinobotao(){
form.style.left = "50%"
form.style.transform = "translateX(-50%)"
mascara.style.visibility = "visible"}


function reverter(){
    mascara.style.visibility = "hidden"
    form.style.left = "-300px"
    form.style.transform = "translateX(0)"
    
}*/


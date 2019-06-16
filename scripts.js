let enviarBtn = document.querySelector("#enviar");
let texto = document.querySelector(".texto");

function enviar(){
    texto.style.display = 'block';
    texto.style.color = "#bf00ff";
}
enviarBtn.onclick = enviar;
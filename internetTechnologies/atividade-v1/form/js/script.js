const desc = document.querySelector(".comentario");

console.log(desc);

desc.addEventListener("keypress", function(e) {
    console.log("digitou!");
    const inputLength = desc.value.length;
    const maxChars = 14;

    if (inputLength >= maxChars) {
        e.preventDefault();
    }
});

function alertMessageTextarea() {
    alert('Conte-nos sua historia, o porque mereçe fazer parte da empresa LearnWay e seu conhecimentos, habilidades e qualidades! ')
}
function alertAjuda() {
    alert('Minimo de 20 caracteres e maximo de 144!')
}
function alertMensage() {
    alert('Atente-se a opção abaixo')
}
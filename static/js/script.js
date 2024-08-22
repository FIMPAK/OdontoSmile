let slideIndex = 0;

function showSlide(n) {
const slides = document.getElementsByClassName("slide");
if (n >= slides.length) {slideIndex = 0;}
if (n < 0) {slideIndex = slides.length
1;}
for (let i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
slides[slideIndex].style.display = "block";
}
function nextSlide() {
showSlide(slideIndex += 1);
}

function prevSlide() {
    if (slideIndex === 0){
        showSlide(slideIndex = slides.length - 1);
        console.log(slides.length);
    }
    else {
        showSlide(slideIndex -= 1);
    }
}

showSlide(slideIndex);

document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todas as células com a classe "dia-com-consulta"
    var botoes = document.getElementsByClassName("dia-com-consulta");

    // Adiciona o evento de clique a cada célula
    for (var i = 0; i < botoes.length; i++) {
        botoes[i].addEventListener('click', function() {
            // URL para redirecionamento (exemplo de URL, ajuste conforme necessário)
            var dia = this.innerText.trim(); // Obtém o texto do dia dentro da célula
            var url = '/detalhes-da-consulta/' + dia; // Substitua por sua URL desejada

            // Redireciona para a URL
            window.location.href = url;
        });
    }
});

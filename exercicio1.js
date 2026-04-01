// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

// Output
let resultado = document.querySelector('#resultado');

// Evento do botão
const botao_calcular = document.querySelector('#calcular');

botao_calcular.addEventListener('click', calculaForcaAtracao)


function calculaForcaAtracao(e) {

    // Pega os valores
    // Seleciona os inputs
    let massa_one = parseFloat(document.querySelector('#massa1').value  );
    let massa_two = parseFloat(document.querySelector('#massa2').value);
    let distancia = parseFloat(document.querySelector('#distancia').value);
    let gravidade = parseFloat(document.querySelector('#constante').value);


    if (!isNaN(massa_one) && !isNaN(massa_two) && !isNaN(distancia)) {

        const forca_atracao = (gravidade * massa_one * massa_two)/ (distancia * distancia);

        // Mostrar no campo de resultado
        resultado.value = forca_atracao;
    }

}

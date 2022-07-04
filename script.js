
function calcular(){
    const num1 = Number(document.querySelector('input.nota1').value);
    const num2 = Number(document.querySelector('input.nota2').value);
    const num3 = Number(document.querySelector('input.nota3').value);

    let media = (num1 + num2 + num3) / 3;

    let resultado = document.querySelector('div.resultado');
    
    if (media >= 7 && media <= 10){
        resultado.innerHTML = `<p>Sua media escolar é <strong>${media.toFixed(1)}</strong> pontos. <br> Voce está <strong>aprovado(a) com Sucesso!</strong></p>`;
    }
    if (media >= 5 && media <= 6.9){
        resultado.innerHTML = `<p>Sua media escolar é <strong>${media.toFixed(1)}</strong> pontos. <br> Voce está <strong>aprovado(a)</strong>, mas precisa melhorar!`;
    }
    if (media >= 0 && media <= 4.9){
        resultado.innerHTML = `<p>Sua media escolar é <strong>${media.toFixed(1)}</strong> pontos. <br> Voce não alcançou a média, então está <strong>reprovado(a)!</strong>`;
    }else{
        resultado.innerHTML = `*ERRO: O valor da nota é Inválido!*`;
    };
};

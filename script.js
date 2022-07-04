
function calcular(){
    let num1 = Number(document.querySelector('input.nota1').value);
    let num2 = Number(document.querySelector('input.nota2').value);
    let num3 = Number(document.querySelector('input.nota3').value);

    let media = (num1 + num2 + num3) / 3;

    let resultado = document.querySelector('div.resultado');
    resultado.innerHTML = `<p>Sua media escolar é <strong>${media.toFixed(1)}</strong> pontos.</p>`

}
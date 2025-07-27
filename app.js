alert('Bem-vindo ao Game Número Secreto!');

let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
tentativas = 1;

while (chute != numeroSecreto) {
    let entrada = prompt(`Digite um número entre 1 a ${numeroMaximo}: `);
    chute = parseInt(entrada);

    if (isNaN(chute) || entrada === null || entrada.trim() === ''){
        alert('Por favor, digite um número válido!');
        continue;
    }

    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor do que o ${chute}!`);
        } else {
            alert(`O número secreto é maior do que o ${chute}!`);
        }
        tentativas ++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

alert(`Você acertou! O número secreto é ${numeroSecreto} com ${tentativas} ${palavraTentativa}!!!!`);
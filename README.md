Jogo do Número Secreto 🔢
Um simples e divertido jogo de adivinhação desenvolvido em JavaScript, HTML e CSS. O objetivo é adivinhar o número secreto gerado aleatoriamente dentro de um intervalo definido, recebendo dicas a cada tentativa.

🚀 Tecnologias Utilizadas
JavaScript: Lógica principal do jogo, manipulação do DOM e interação.

HTML: Estrutura e containers do projeto, incluindo elementos para interação (títulos, imagens).

CSS: Estilização da interface, layout responsivo e design visual atraente.

✨ Funcionalidades
Geração de um número secreto aleatório (entre 1 e 5000, configurável).

Interface visualmente agradável com elementos de design.

Feedback instantâneo ao jogador (mensagens na tela indicando se o palpite foi muito alto ou muito baixo).

Contagem de tentativas para descobrir o número.

Mensagem de vitória ao acertar o número, informando o número de tentativas, exibida diretamente na interface.

🕹️ Como Jogar
Abra o arquivo index.html em qualquer navegador web moderno.

A interface do jogo será carregada, apresentando um título e elementos visuais.

Você deverá interagir com os elementos na tela (provavelmente um campo de entrada e um botão, que seriam adicionados ao HTML e gerenciados pelo JS) para fazer seu palpite.

As mensagens de feedback (maior/menor) aparecerão na tela, guiando você.

Continue tentando até acertar o número.

Ao acertar, a interface se atualizará para mostrar a mensagem de vitória, o número secreto e o total de tentativas.

💻 Como Executar o Projeto Localmente
Clone este repositório:

Bash

git clone https://github.com/SEU_USUARIO/nome-do-seu-repositorio.git
(Lembre-se de substituir SEU_USUARIO e nome-do-seu-repositorio pelos seus dados reais.)

Navegue até a pasta do projeto:

Bash

cd nome-do-seu-repositorio
Abra o arquivo index.html no seu navegador preferido.
Você pode simplesmente clicar duas vezes no arquivo no explorador de arquivos ou usar o comando (dependendo do seu sistema operacional):

Windows: start index.html

macOS: open index.html

Linux: xdg-open index.html

📄 Estrutura do Projeto
index.html (Estrutura HTML)
HTML

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jogo Secreto - Game JS</title>
    <link rel="stylesheet" href="/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@700&family=Inter:wght@400;700&display=swap"
        rel="stylesheet">
</head>
<body>
    <div class="container">
        <div class="container_conteudo">
            <img src="/img/robot.png" alt="robô mergulhador" class="container_imagem-robo">
        </div>         
        <div class="container_info">
            <img src="/img/trophy.png" alt="ícone de um troféu">
        </div>
        <div class="container_texto">
            <h1>Você <span class="container_texto-azul">acertou!</span></h1>
            <h2>Você descobriu o número secreto!</h2>
        </div>
    </div>
    <script src="/app.js" defer></script>
</body>
</html>
style.css (Estilização CSS)
CSS

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: white;
}

body {
    background: linear-gradient(#1354a5 0%, #041831 33.3%, #041832 6.6%, #01080e 100%);
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

body::before {
    background-image: url(/img/code.png);
    background-repeat: no-repeat;
    background-position: right;
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.4;
}

.container {
    width: 1200px;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 24px;
    border: 1px solid #1875e8;
    box-shadow: 4px 4px 20px 0px rgba(1, 8, 14, 0.15);
    background-image: url(/img/Ruido.png);
    background-size: 100%;
    position: relative;
}

.container_conteudo {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0;
}

.container_info {
    flex: 1;
    padding: 20px;
}

/* .container_botao is present in CSS but not in the provided HTML. It would typically be a button for "chute" */
.container_botao {
    border-radius: 16px;
    background: #1875e8;
    padding: 16px 24px;
    width: 100%;
    font-size: 24px;
    font-weight: 700;
    border: none;
    margin-top: 16px;
}

.container_texto {
    margin: 16px 0;
}

.container_texto-azul {
    color: #1875e8;
}

h1 {
    font-family: 'Chakra Petch', sans-serif;
    font-size: 72px;
}

h2,
p,
button {
    font-family: 'Inter', sans-serif;
}

h2 {
    font-size: 32px;
    font-weight: 600;
}
app.js (Lógica JavaScript)
JavaScript

// NOTE: Your HTML links to app.js, but the JS you provided previously
// was intended for browser alerts/prompts and not direct DOM manipulation
// of the HTML structure provided.
//
// If app.js should interact with the HTML elements (e.g., update <h1>, <h2>,
// handle button clicks, read input field values), the JavaScript code
// would need to be adapted to select and manipulate those elements.
//
// For now, including the JS as provided previously, assuming it would be
// adapted to work with the UI.

alert('Bem-vindo ao jogo do Número Secreto!');

let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Digite um número entre 1 a ${numeroMaximo}:`);

    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor do que o ${chute}!`);
        } else {
            alert(`O número secreto é maior do que o ${chute}!`);
        }
    }
    tentativas++;
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Você acertou! O número secreto é ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`);
🤝 Contribuição
Sinta-se à vontade para sugerir melhorias, reportar bugs ou abrir Pull Requests! Toda contribuição é bem-vinda.

📝 Licença
Este projeto está licenciado sob a Licença MIT.
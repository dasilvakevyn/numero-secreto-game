# Jogo do Número Secreto 🔢
Um simples e divertido jogo de adivinhação desenvolvido em JavaScript, HTML e CSS. O objetivo é adivinhar o número secreto gerado aleatoriamente dentro de um intervalo definido, recebendo dicas a cada tentativa.

## 🚀 Tecnologias Utilizadas
* **JavaScript:** Lógica principal do jogo, manipulação do DOM e interação.
* **HTML:** Estrutura e containers do projeto, incluindo elementos para interação (títulos, imagens).
* **CSS:** Estilização da interface, layout responsivo e design visual atraente.

## ✨ Funcionalidades
* Geração de um número secreto aleatório (entre 1 e 5000, configurável).
* Interface visualmente agradável com elementos de design.
* Verifica se a entrada não for um número válido, pedindo para tentar novamente sem consumir uma tentativa.
* Feedback instantâneo ao jogador (mensagens na tela indicando se o palpite foi muito alto ou muito baixo).
* Contagem de tentativas para descobrir o número.
* Mensagem de vitória ao acertar o número, informando o número de tentativas, exibida diretamente na interface.

## 🕹️ Como Jogar
1.  **Abra o arquivo `index.html`** em qualquer navegador web moderno.
2.  A interface do jogo será carregada, apresentando um título e elementos visuais.
3.  Você deverá interagir com os elementos na tela (provavelmente um campo de entrada e um botão, que seriam adicionados ao HTML e gerenciados pelo JS) para fazer seu palpite.
4. **Se você digitar algo que não seja um número, o jogo avisará e pedirá uma nova entrada, sem contar como tentativa.**
5.  Continue tentando até acertar o número.
6.  As mensagens de feedback (maior/menor) aparecerão na tela, guiando você.
7.  Continue tentando até acertar o número.
8.  Ao acertar, a interface se atualizará para mostrar a mensagem de vitória, o número secreto e o total de tentativas.

## 💻 Como Executar o Projeto Localmente
1.  **Clone este repositório:**

    ```bash
    git clone [https://github.com/SEU_USUARIO/nome-do-seu-repositorio.git](https://github.com/SEU_USUARIO/nome-do-seu-repositorio.git)
    ```
    (Lembre-se de substituir `SEU_USUARIO` e `nome-do-seu-repositorio` pelos seus dados reais.)

2.  **Navegue até a pasta do projeto:**

    ```bash
    cd nome-do-seu-repositorio
    ```

3.  **Abra o arquivo `index.html` no seu navegador preferido.**
    Você pode simplesmente clicar duas vezes no arquivo no explorador de arquivos ou usar o comando (dependendo do seu sistema operacional):
    * **Windows:** `start index.html`
    * **macOS:** `open index.html`
    * **Linux:** `xdg-open index.html`

## 📄 Estrutura do Projeto

### `index.html` (Estrutura HTML)
Para ver a estrutura HTML do projeto, clique [aqui](https://github.com/dasilvakevyn/numero-secreto-game/blob/main/index.html).

### `style.css` (Estilização CSS)
Para ver a Estilização CSS do projeto, clique [aqui](https://github.com/dasilvakevyn/numero-secreto-game/blob/main/style.css).

### `app.js` (Lógica JavaScript)
```
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
```
## 🤝 Contribuição
Sinta-se à vontade para sugerir melhorias, reportar bugs ou abrir Pull Requests! Toda contribuição é bem-vinda.

## 📝 Licença
Este projeto está licenciado sob a Licença MIT.
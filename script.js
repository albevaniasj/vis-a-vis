// Variáveis globais para o jogo
let currentStage = 0;
const storyText = document.getElementById("story");
const gameScreen = document.getElementById("game-screen");

function startGame() {
  currentStage = 1;
  updateStory();
}

function updateStory() {
  switch (currentStage) {
    case 1:
      storyText.innerHTML = `
                Macarena e Zulema estão na floresta. Você ouve passos ao longe. 
                O que elas devem fazer?
            `;
      updateOptions([
        { text: "Correr para o norte", action: () => nextStage(2) },
        { text: "Esconder-se atrás das árvores", action: () => nextStage(3) },
      ]);
      break;
    case 2:
      storyText.innerHTML = `
                Elas correm para o norte, mas ouvem cães se aproximando. 
                O que fazer agora?
            `;
      updateOptions([
        { text: "Subir em uma árvore", action: () => nextStage(4) },
        { text: "Continuar correndo", action: () => nextStage(5) },
      ]);
      break;
    case 3:
      storyText.innerHTML = `
                Escondidas, elas encontram uma pá enterrada. 
                Devem pegar a pá ou fugir sem ela?
            `;
      updateOptions([
        { text: "Pegar a pá", action: () => nextStage(6) },
        { text: "Fugir sem a pá", action: () => nextStage(7) },
      ]);
      break;
    case 4:
      storyText.innerHTML = `
                Subindo na árvore, elas veem o mapa no chão. 
                Descer para pegar o mapa ou ficar escondidas?
            `;
      updateOptions([
        { text: "Descer para pegar o mapa", action: () => nextStage(8) },
        { text: "Ficar escondidas", action: () => nextStage(7) },
      ]);
      break;
    case 5:
      storyText.innerHTML = `
                Elas continuam correndo, mas a polícia as encontra. 
                Fim de jogo!
            `;
      updateOptions([{ text: "Recomeçar", action: () => startGame() }]);
      break;
    case 6:
      storyText.innerHTML = `
                Com a pá, elas desenterram o dinheiro. Agora, precisam fugir para Oasis.
                Parabéns, missão cumprida!
            `;
      updateOptions([{ text: "Jogar novamente", action: () => startGame() }]);
      break;
    case 7:
      storyText.innerHTML = `
                Sem a pá, elas não conseguem desenterrar o dinheiro.
                A missão falhou!
            `;
      updateOptions([{ text: "Tentar novamente", action: () => startGame() }]);
      break;
    case 8:
      storyText.innerHTML = `
                Com o mapa em mãos, elas correm e encontram o local do dinheiro.
                Fim de jogo. Parabéns, missão cumprida!
            `;
      updateOptions([{ text: "Jogar novamente", action: () => startGame() }]);
      break;
    default:
      startGame();
  }
}

function updateOptions(options) {
  gameScreen.innerHTML = `
        <h1>Fuga de Macarena e Zulema</h1>
        <p id="story">${storyText.innerHTML}</p>
    `;
  options.forEach((option) => {
    const button = document.createElement("button");
    button.innerText = option.text;
    button.onclick = option.action;
    gameScreen.appendChild(button);
  });
}

function nextStage(stage) {
  currentStage = stage;
  updateStory();
}

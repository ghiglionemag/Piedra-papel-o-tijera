export function initPlayPage(conteiner) {
  const divEl = document.querySelector(".root");

  divEl.innerHTML = `
  <div class="title-conteiner">
  <my-text tag="h3">Presioná jugar
  y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</my-text>
  </div>
  <my-button class="start-button">Jugar</my-button>
  <options-comp></options-comp>
  `;

  const style = document.createElement("style");
  style.innerText = `
  .root{
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: space-around;
    min-width: 375px;
    min-height: 672px;
    background-color: pink;
  }
  .title-conteiner{
    width: 284px;
    height: 204px;
    text-align: center;
  }
  .options-conteiner{ 
  }
  `;
  divEl.appendChild(style);

  const buttonEl = divEl.querySelector(".start-button");
  buttonEl.addEventListener("click", () => {
    conteiner.goTo("/game");
  });

  return divEl;
}

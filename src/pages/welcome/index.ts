export function initWelcomePage(conteiner) {
  const divEl = document.querySelector(".root");

  divEl.innerHTML = `
  <div class="title-conteiner">
  <my-text tag="h1">Piedra, papel o tijera</my-text>
  </div>
  <my-button class="start-button">Empezar</my-button>
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
  }
s  `;
  divEl.appendChild(style);

  const buttonEl = divEl.querySelector(".start-button");
  buttonEl.addEventListener("click", () => {
    conteiner.goTo("/play");
  });

  return divEl;
}

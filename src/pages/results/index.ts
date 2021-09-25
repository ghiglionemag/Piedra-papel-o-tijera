import { state } from "../../state";

export function initResultsPage(conteiner) {
  const divEl = document.querySelector(".root");

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
    .score-conteiner{
      display: flex;
      flex-direction: column;
      width: 259px;
      height: 217px;
      padding: 15px 30px;
      background-color: #FFFFFF;
      border: 10px solid #000000;
      border-radius: 10px;
    }
    `;

  let result;
  if (state.whoWins()) {
    result = "win";
  } else {
    result = "loose";
  }

  divEl.innerHTML = `
    <star-comp></star-comp>
    <div class="score-conteiner"> 
    <my-text tag="h2">Puntaje</my-text>
    <my-text tag="p" id="your-scrore">Vos:${state.getScore().loose}</my-text>
    <my-text tag="p" id="computer-scrore">Máquina:${
      state.getScore().win
    }</my-text>
    </div>
    <my-button class="re-starButton">Volver a jugar</my-button>
    `;

  const buttonReStartEl = divEl.querySelector(".re-starButton");
  buttonReStartEl.addEventListener("click", () => {
    conteiner.goTo("/welcome");
  });
  
  divEl.appendChild(style);
  state.saveData;
  return divEl;
}

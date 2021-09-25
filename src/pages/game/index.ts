import { state } from "../../state";

export function initGamePage(conteiner) {
  const divEl = document.querySelector(".root");

  divEl.innerHTML = `
    <count-down></count-down>
    <div class="options"> 
    <options-comp></options-comp>
    </div> 
  `;
  console.log(state.data.currentGame);

  const options = divEl.querySelector(".options").children;
  for (const option of options) {
    option.addEventListener("optionEvent", (e: any) => {
      const typeSelected = e.detail.type;
      state.setMove(typeSelected);
      state.computerMove();
      state.saveData();
      conteiner.goTo("/results");
    });
  }

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
  
  `;

  divEl.appendChild(style);

  return divEl;
}

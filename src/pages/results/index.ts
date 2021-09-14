export function initResultsPage(conteiner) {
  const divEl = document.querySelector(".root");

  divEl.innerHTML = `
    <star-comp></star-comp>
    <div class="score-conteiner"> 
    <my-text tag="h2">Perdiste</my-text>
    <my-text tag="p">Vos:${``}</my-text>
    <my-text tag="p">Máquina:${``}</my-text>
    </div>
    <my-button class="re-starButton">Volver a jugar</my-button>
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

    const buttonEl = divEl.querySelector(".re-starButton");
    buttonEl.addEventListener("click", () => {
      conteiner.goTo("/welcomes");
    });

  divEl.appendChild(style);
  return divEl;

  
}

export class Star extends HTMLElement {
  constructor() {
    super();
    this.render();
  }
  render() {
    const shadow = this.attachShadow({ mode: "open" });

    const startWinURL = require("url:../../img/starWin.svg");
    const startLoseURL = require("url:../../img/starLose.svg");
    const divEl = document.createElement("div");
    divEl.className = "root";

    divEl.innerHTML = `
    <img class="star"  src=${startWinURL}>
    <my-text tag="h3" class="centered">Perdiste</my-text>
    </img>
    <!---img class="star"  src=${startLoseURL}--->
      `;
    const style = document.createElement("style");
    style.innerHTML = `
      .root{
        text-align: center;
        position: relative;
      }
      .star{
        width: 259px;
        height: 259px;
      }
      .centered {
        position: absolute;
        top: 48%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
          `;


    shadow.appendChild(divEl);
    shadow.appendChild(style);
  }
}
customElements.define("star-comp", Star);

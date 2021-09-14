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
    <img class="stars"  src=${startWinURL}>
    <!---img class="stars"  src=${startLoseURL}--->
      `;
    const style = document.createElement("style");
    style.innerHTML = `
      .stars{
        width: 254px;
        height: 259px;
      }
          `;

    //button.textContent = this.textContent;

    shadow.appendChild(divEl);
    shadow.appendChild(style);
  }
}
customElements.define("star-comp", Star);

import { initRouter } from "../../router";
import { state } from "../../state";

export class Options extends HTMLElement {
  shadow: ShadowRoot;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const style = document.createElement("style");
    style.innerText = `
        .root{
          display: flex;
          flex-direction: row; 
          justify-content: space-between;
          width: 322px;
        }
        .option{
          background: #456BD9;
          border: 0.1875em solid #0F1C3F;
          border-radius: 50%;
          box-shadow: 0.375em 0.375em 0 0 rgba(15, 28, 63, 0.125);
          height: 100px;
          width: 100px;
          text-align: center;
          }
        .option:hover {
          background: green;
          height: 110px;
          width: 110px;
        }
        .tijera,
        .piedra,
        .papel{
          height: 60px;
          width: 60px;
          padding: 15%;
        }
        
        
            `;

    this.shadow.appendChild(style);
    this.render();
  }
  addListeners() {
    const options = this.shadow.querySelectorAll(".option");
    for (const option of options) {
      option.addEventListener("click", (e) => {
        const param = option.id;
        const event = new CustomEvent("optionEvent", {
          detail: {
            type: param,
          },
        });
        this.dispatchEvent(event);
      });
    }
  }

  render() {
    const tijeraURL = require("url:../../img/tijeraImg.svg");
    const piedraURL = require("url:../../img/piedraImg.svg");
    const papelURL = require("url:../../img/papelImg.svg");

    const divEl = document.createElement("div");
    divEl.className = "root";

    divEl.innerHTML = `
    <button class="option" id= "tijera"><img class="tijera" src=${tijeraURL}></button>
    <button class="option" id= "piedra"><img class="piedra" src=${piedraURL}></button>
    <button class="option" id= "papel"><img class="papel" src=${papelURL}></button>
        `;

    this.shadow.appendChild(divEl);
    if (location.pathname.includes("game")) {
      this.addListeners();
    }
  }
}
customElements.define("options-comp", Options);

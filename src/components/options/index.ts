export class Options extends HTMLElement {
  constructor() {
    super();
    this.render();
  }
  render() {
    const shadow = this.attachShadow({ mode: "open" });

    const tijeraURL = require("url:../../img/tijeraImg.svg");
    const piedraURL = require("url:../../img/piedraImg.svg");
    const papelURL = require("url:../../img/papelImg.svg");

    const divEl = document.createElement("div");
    divEl.className = "root";

    divEl.innerHTML = `
    <div class="circle tijera"><img class="tijera-img" src=${tijeraURL}></div>
    <div class="circle piedra"><img class="piedra-img" src=${piedraURL}></div>
    <div class="circle papel"><img class="papel-img" src=${papelURL}></div>
        `;
    const style = document.createElement("style");
    style.innerHTML = `
        .root{
          display: flex;
          flex-direction: row; 
          justify-content: space-between;
          width: 322px;
        }
        .circle{
          background: #456BD9;
          border: 0.1875em solid #0F1C3F;
          border-radius: 50%;
          box-shadow: 0.375em 0.375em 0 0 rgba(15, 28, 63, 0.125);
          height: 100px;
          width: 100px;
          text-align: center;
          }
        .tijera-img,
        .piedra-img,
        .papel-img{
          height: 60px;
          width: 60px;
          padding: 15%;
        }
        
        
            `;

    shadow.appendChild(divEl);
    shadow.appendChild(style);
  }
}
customElements.define("options-comp", Options);

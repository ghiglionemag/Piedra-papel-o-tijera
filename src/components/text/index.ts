export class Text extends HTMLElement {
  shadow: ShadowRoot;
  tagName: string;
  tags: string[] = ["h1", "h2", "h3", "p"];
  tag: string = "p";
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });

    if (this.tags.includes(this.getAttribute("tag"))) {
      this.tag = this.getAttribute("tag") || this.tag;
    }
    this.render();
  }
  render() {
    const style = document.createElement("style");
    style.innerHTML = `
    h1{
      font-family: 'Anton', sans-serif;
      font-size: 80px;
      line-height: 61px;
      font-weight: bold;
      padding: 0px 30px;
      background-color: green;
    }
    h2{
     font-size: 55px;
     line-height: 61px;
     background-color: green;
     margin: 0px;
    }
    h3{
     font-family: 'Noto Sans JP', sans-serif;
     font-weight: 600;
     font-size: 40px;
     line-height: 100%;
    }
    p{
      font-family: 'Noto Sans JP', sans-serif;
      font-size: 18px;
      text-align: right;
    }
    `;
    const rootEl = document.createElement(this.tag);
    rootEl.textContent = this.textContent;
    this.shadow.appendChild(style);
    this.shadow.appendChild(rootEl);
  }
}
customElements.define("my-text", Text);

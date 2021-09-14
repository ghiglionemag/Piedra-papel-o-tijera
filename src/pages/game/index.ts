export function initGamePage(conteiner) {
  const divEl = document.querySelector(".root");

  divEl.innerHTML = `
    <count-down></count-down> 
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
  
  `;
  divEl.appendChild(style);

  return divEl;
}

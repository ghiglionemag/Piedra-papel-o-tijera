function n(n,e,t,o){Object.defineProperty(n,e,{get:t,set:o,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=e.parcelRequiref4be;null==r&&((r=function(n){if(n in t)return t[n].exports;if(n in o){var e=o[n];delete o[n];var r={id:n,exports:{}};return t[n]=r,e.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+n+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(n,e){o[n]=e},e.parcelRequiref4be=r),r.register("7PhYn",(function(e,t){var o,r;n(e.exports,"resolve",(()=>r),(n=>r=n)),n(e.exports,"register",(()=>o),(n=>o=n));var i={};o=function(n){for(var e=Object.keys(n),t=0;t<e.length;t++)i[e[t]]=n[e[t]]},r=function(n){var e=i[n];if(null==e)throw new Error("Could not resolve bundle with id "+n);return e}})),r("7PhYn").register(JSON.parse('{"di8mO":"index.5141db99.js","eEl03":"tijeraImg.743b6342.svg","61pDh":"piedraImg.03bd75e4.svg","cLrEl":"papelImg.b3736569.svg","93YEL":"starWin.1eea6986.svg","idZHu":"starLose.342a139d.svg"}'));class i extends HTMLElement{constructor(){super(),this.tags=["h1","h2","h3","p"],this.tag="p",this.shadow=this.attachShadow({mode:"open"}),this.tags.includes(this.getAttribute("tag"))&&(this.tag=this.getAttribute("tag")||this.tag),this.render()}render(){const n=document.createElement("style");n.innerHTML="\n    h1{\n      font-family: 'Anton', sans-serif;\n      font-size: 80px;\n      line-height: 61px;\n      font-weight: bold;\n      padding: 0px 30px;\n    }\n    h2{\n     font-size: 55px;\n     line-height: 61px;\n     margin: 0px;\n    }\n    h3{\n     font-family: 'Noto Sans JP', sans-serif;\n     font-weight: 600;\n     font-size: 40px;\n     line-height: 100%;\n    }\n    p{\n      font-family: 'Noto Sans JP', sans-serif;\n      font-size: 18px;\n      text-align: right;\n    }\n    ";const e=document.createElement(this.tag);e.textContent=this.textContent,this.shadow.appendChild(n),this.shadow.appendChild(e)}}customElements.define("my-text",i);class s extends HTMLElement{constructor(){super(),this.render()}render(){const n=this.attachShadow({mode:"open"}),e=document.createElement("button");e.className="root";const t=document.createElement("style");t.innerHTML="\n            .root{\n                min-width: 322px; \n                line-height: 55px;\n                margin: 12px 0px;\n                border-radius: 20px;\n                font-size: 22px;\n                text-align: center;\n                font-family: 'Anton', sans-serif;\n            }\n            @media (min-width: 899px){\n                .root{\n                  margin-left: 10px;\n                  \n                }\n              }\n        ",e.textContent=this.textContent,n.appendChild(e),n.appendChild(t)}}customElements.define("my-button",s),r.register("46LJL",(function(n,e){n.exports=r("kVZsc").getBundleURL("di8mO")+r("7PhYn").resolve("eEl03")})),r.register("kVZsc",(function(e,t){var o;n(e.exports,"getBundleURL",(()=>o),(n=>o=n));var r={};function i(n){return(""+n).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}o=function(n){var e=r[n];return e||(e=function(){try{throw new Error}catch(e){var n=(""+e.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(n)return i(n[2])}return"/"}(),r[n]=e),e}})),r.register("8yOPS",(function(n,e){n.exports=r("kVZsc").getBundleURL("di8mO")+r("7PhYn").resolve("61pDh")})),r.register("kgMAs",(function(n,e){n.exports=r("kVZsc").getBundleURL("di8mO")+r("7PhYn").resolve("cLrEl")}));class a extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){const n=document.createElement("style");n.innerText="\n        .root{\n          display: flex;\n          flex-direction: row; \n          justify-content: space-between;\n          width: 322px;\n        }\n        .option{\n          background: #456BD9;\n          border: 0.1875em solid #0F1C3F;\n          border-radius: 50%;\n          box-shadow: 0.375em 0.375em 0 0 rgba(15, 28, 63, 0.125);\n          height: 100px;\n          width: 100px;\n          text-align: center;\n          }\n        .option:hover {\n          background: green;\n          height: 110px;\n          width: 110px;\n        }\n        .tijera,\n        .piedra,\n        .papel{\n          height: 60px;\n          width: 60px;\n          padding: 15%;\n        }\n        \n        \n            ",this.shadow.appendChild(n),this.render()}addListeners(){const n=this.shadow.querySelectorAll(".option");for(const e of n)e.addEventListener("click",(n=>{const t=e.id,o=new CustomEvent("optionEvent",{detail:{type:t}});this.dispatchEvent(o)}))}render(){const n=r("46LJL"),e=r("8yOPS"),t=r("kgMAs"),o=document.createElement("div");o.className="root",o.innerHTML=`\n    <button class="option" id= "tijera"><img class="tijera" src=${n}></button>\n    <button class="option" id= "piedra"><img class="piedra" src=${e}></button>\n    <button class="option" id= "papel"><img class="papel" src=${t}></button>\n        `,this.shadow.appendChild(o),location.pathname.includes("game")&&this.addListeners()}}customElements.define("options-comp",a);class c extends HTMLElement{constructor(){super(),this.render()}render(){const n=this.attachShadow({mode:"open"}),e={info:{color:"green"},warning:{color:"orange",threshold:10},alert:{color:"red",threshold:5}};let t=0,o=3,r=null,i=e.info.color;const s=document.createElement("div");function a(n){Math.floor(n/60);let e=n%60;return e<10&&(e=`${e}`),`${e}`}s.innerHTML=`\n    <div class="base-timer">\n      <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">\n        <g class="base-timer__circle">\n          <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>\n          <path\n            id="base-timer-path-remaining"\n            stroke-dasharray="283"\n            class="base-timer__path-remaining ${i}"\n            d="\n              M 50, 50\n              m -45, 0\n              a 45,45 0 1,0 90,0\n              a 45,45 0 1,0 -90,0\n            "\n          ></path>\n        </g>\n      </svg>\n      <span id="base-timer-label" class="base-timer__label">\n      ${a(o)}\n      </span>\n    </div>\n    `,console.log(),r=setInterval((()=>{t=t+=1,o=3-t,n.getElementById("base-timer-label").innerHTML=a(o),function(){const e=`${(283*function(){const n=o/3;return n-1/3*(1-n)}()).toFixed(0)} 283`;n.getElementById("base-timer-path-remaining").setAttribute("stroke-dasharray",e)}(),function(t){const{alert:o,warning:r,info:i}=e;t<=o.threshold?(n.getElementById("base-timer-path-remaining").classList.remove(r.color),n.getElementById("base-timer-path-remaining").classList.add(o.color)):t<=r.threshold&&(n.getElementById("base-timer-path-remaining").classList.remove(i.color),n.getElementById("base-timer-path-remaining").classList.add(r.color))}(o),0===o&&(clearInterval(r),s.innerHTML='\n      <div class="root">\n      <my-text tag="h2"> Se acabó tu tiempo</my-text>\n      <my-button class="reinit-button"> Reiniciar<my-button>\n      </div>\n      ',s.querySelector(".reinit-button").addEventListener("click",(()=>{location.reload()})))}),1e3);const c=document.createElement("style");c.innerHTML="\n    .root{ \n      display: flex;\n      flex-direction: column; \n      align-items: center;\n      justify-content: space-around;\n      \n  \n    }\n    .base-timer {\n        position: relative;\n        width: 300px;\n        height: 300px;\n      }\n      \n      .base-timer__svg {\n        transform: scaleX(-1);\n      }\n      \n      .base-timer__circle {\n        fill: none;\n        stroke: none;\n      }\n      \n      .base-timer__path-elapsed {\n        stroke-width: 7px;\n        stroke: grey;\n      }\n      \n      .base-timer__path-remaining {\n        stroke-width: 7px;\n        stroke-linecap: round;\n        transform: rotate(90deg);\n        transform-origin: center;\n        transition: 1s linear all;\n        fill-rule: nonzero;\n        stroke: currentColor;\n      }\n      \n      .base-timer__path-remaining.green {\n        color: rgb(65, 184, 131);\n      }\n      \n      .base-timer__path-remaining.orange {\n        color: orange;\n      }\n      \n      .base-timer__path-remaining.red {\n        color: red;\n      }\n      \n      .base-timer__label {\n        position: absolute;\n        width: 300px;\n        height: 300px;\n        top: 0;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        font-size: 48px;\n      }\n    ",n.appendChild(c),n.appendChild(s)}}customElements.define("count-down",c),r.register("bPIoh",(function(n,e){n.exports=r("kVZsc").getBundleURL("di8mO")+r("7PhYn").resolve("93YEL")})),r.register("4B4z3",(function(n,e){n.exports=r("kVZsc").getBundleURL("di8mO")+r("7PhYn").resolve("idZHu")}));class l extends HTMLElement{constructor(){super(),this.render()}render(){const n=this.attachShadow({mode:"open"}),e=r("bPIoh"),t=r("4B4z3"),o=document.createElement("div");o.className="root",o.innerHTML=`\n    <img class="star"  src=${e}>\n    <my-text tag="h3" class="centered">Perdiste</my-text>\n    </img>\n    \x3c!---img class="star"  src=${t}---\x3e\n      `;const i=document.createElement("style");i.innerHTML="\n      .root{\n        text-align: center;\n        position: relative;\n      }\n      .star{\n        width: 259px;\n        height: 259px;\n      }\n      .centered {\n        position: absolute;\n        top: 48%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n      }\n          ",n.appendChild(o),n.appendChild(i)}}customElements.define("star-comp",l);const d={data:{currentGame:{computerPlay:"",myPlay:""},history:[]},getState(){return localStorage.getItem("data")&&(this.data=JSON.parse(localStorage.getItem("data"))),this.data},setMove(n){this.data.currentGame.myPlay=n,this.saveData()},PushToHistory(n){this.data.history.push(n)},whoWins(){const n=this.data.currentGame.computerPlay,e=this.data.currentGame.myPlay;return["tijera"===e&&"papel"===n,"papel"===e&&"piedra"===n,"piedra"===e&&"tijera"===n].includes(!0)?(this.PushToHistory(!0),!0):(this.PushToHistory(!1),!1)},computerMove(){const n=["tijera","papel","piedra"];let e=n[Math.floor(3*Math.random())+0];if(e===this.data.currentGame.myPlay){e=n[Math.floor(3*Math.random())+0]}return this.saveData(),this.data.currentGame.computerPlay=e,e},getScore(){let n=0,e=0;for(const t of this.data.history)!0===t&&(n+=1),!1===t&&(e+=1);return{win:n,loose:e}},saveData(){localStorage.setItem("data",JSON.stringify(this.data))},cleanData(){localStorage.setItem("data",JSON.stringify({currentGame:{computerPlay:"",myPlay:"",winner:!0},history:[]}))}};const p=[{path:/\/welcome/,component:function(n){const e=document.querySelector(".root");e.innerHTML='\n  <div class="title-conteiner">\n  <my-text tag="h1">Piedra, papel o tijera</my-text>\n  </div>\n  <my-button class="start-button">Empezar</my-button>\n  <options-comp></options-comp>\n  ';const t=document.createElement("style");return t.innerText="\n  .root{\n    display: flex;\n    flex-direction: column; \n    align-items: center;\n    justify-content: space-around;\n    min-width: 375px;\n    min-height: 672px;\n    background-color: pink;\n  }\n  .title-conteiner{\n    width: 284px;\n    height: 204px;\n  }\ns  ",e.appendChild(t),e.querySelector(".start-button").addEventListener("click",(()=>{n.goTo("/instrucciones")})),e}},{path:/\/instrucciones/,component:function(n){const e=document.querySelector(".root");e.innerHTML='\n  <div class="title-conteiner">\n  <my-text tag="h3">Presioná jugar\n  y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</my-text>\n  </div>\n  <my-button class="start-button">Jugar</my-button>\n  <options-comp></options-comp>\n  ';const t=document.createElement("style");return t.innerText="\n  .root{\n    display: flex;\n    flex-direction: column; \n    align-items: center;\n    justify-content: space-around;\n    min-width: 375px;\n    min-height: 672px;\n    background-color: pink;\n  }\n  .title-conteiner{\n    width: 284px;\n    height: 204px;\n    text-align: center;\n  }\n  .options-conteiner{ \n  }\n  ",e.appendChild(t),e.querySelector(".start-button").addEventListener("click",(()=>{n.goTo("/game")})),e}},{path:/\/game/,component:function(n){const e=document.querySelector(".root");e.innerHTML='\n    <count-down></count-down>\n    <div class="options"> \n    <options-comp></options-comp>\n    </div> \n  ',console.log(d.data.currentGame);const t=e.querySelector(".options").children;for(const e of t)e.addEventListener("optionEvent",(e=>{const t=e.detail.type;d.setMove(t),d.computerMove(),d.saveData(),n.goTo("/results")}));const o=document.createElement("style");return o.innerText="\n  .root{\n    display: flex;\n    flex-direction: column; \n    align-items: center;\n    justify-content: space-around;\n    min-width: 375px;\n    min-height: 672px;\n    background-color: pink;\n  }\n  \n  ",e.appendChild(o),e}},{path:/\/results/,component:function(n){const e=document.querySelector(".root"),t=document.createElement("style");let o;return t.innerText="\n    .root{\n      display: flex;\n      flex-direction: column; \n      align-items: center;\n      justify-content: space-around;\n      min-width: 375px;\n      min-height: 672px;\n      background-color: pink;\n    }\n    .score-conteiner{\n      display: flex;\n      flex-direction: column;\n      width: 259px;\n      height: 217px;\n      padding: 15px 30px;\n      background-color: #FFFFFF;\n      border: 10px solid #000000;\n      border-radius: 10px;\n    }\n    ",o=d.whoWins()?"win":"loose",e.innerHTML=`\n    <star-comp></star-comp>\n    <div class="score-conteiner"> \n    <my-text tag="h2">Puntaje</my-text>\n    <my-text tag="p" id="your-scrore">Vos:${d.getScore().loose}</my-text>\n    <my-text tag="p" id="computer-scrore">Máquina:${d.getScore().win}</my-text>\n    </div>\n    <my-button class="re-starButton">Volver a jugar</my-button>\n    `,e.querySelector(".re-starButton").addEventListener("click",(()=>{n.goTo("/welcome")})),e.appendChild(t),d.saveData,e}}];!function(n){function e(n){history.pushState({},"",n),console.log("hola"),t(n)}function t(t){console.log("El handleRoute recibió una nueva ruta",t);for(const o of p)if(o.path.test(t)){const t=o.component({goTo:e});n.firstChild&&n.firstChild.remove(t)}}location.host.includes("github.io")?e("/Piedra-papel-o-tijera/welcome"):t(location.pathname),window.onpopstate=function(){t(location.pathname)}}(document.querySelector(".root"));
//# sourceMappingURL=index.5141db99.js.map

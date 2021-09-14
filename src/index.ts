import "./components/text";
import "./components/button";
import "./components/options";
import "./components/countDown";
import "./components/start";
import { initRouter } from "./router";

function main() {
  const root = document.querySelector(".root");
  initRouter(root);
}
main();

//let counter = 0;

//const intervalId = setInterval(() => {
//  counter++;
//  console.log(Math.random());
// if (counter > 2) {
//   clearInterval(intervalId);
// }
// }, 1000);

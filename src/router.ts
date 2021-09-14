import { initWelcomePage } from "./pages/welcome";
import { initPlayPage } from "./pages/play";
import { initGamePage } from "./pages/game";
import { initResultsPage } from "./pages/results";

const routes = [
  {
    path: /\/welcome/,
    component: initWelcomePage,
  },
  {
    path: /\/play/,
    component: initPlayPage,
  },
  {
    path: /\/game/,
    component: initGamePage,
  },
  {
    path: /\/results/,
    component: initResultsPage,
  },
];

export function initRouter(conteiner: any) {
  function goTo(path) {
    history.pushState({}, "", path);
    console.log("hola");
    handleRoute(path);
  }

  function handleRoute(route) {
    console.log("El handleRoute recibió una nueva ruta", route);

    for (const r of routes) {
      if (r.path.test(route)) {
        const el = r.component({goTo : goTo});

        if (conteiner.firstChild) {
          conteiner.firstChild.remove(el);
        }
       //conteiner.appendChild(el);
      }
    }
  }

  if (location.pathname == "/") {
    goTo("/welcome");
  } else {
    handleRoute(location.pathname);
  }

  window.onpopstate = function () {
    handleRoute(location.pathname);
  };
}

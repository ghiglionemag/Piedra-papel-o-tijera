import { initWelcomePage } from "./pages/welcome";
import { initPlayPage } from "./pages/instrucciones";
import { initGamePage } from "./pages/game";
import { initResultsPage } from "./pages/results";

const routes = [
  {
    path: /\/Piedra-papel-o-tijera/,
    component: initWelcomePage,
  },
  {
    path: /\/Piedra-papel-o-tijera\/welcome/,
    component: initWelcomePage,
  },
  {
    path: /\/Piedra-papel-o-tijera\/instrucciones/,
    component: initPlayPage,
  },
  {
    path: /\/Piedra-papel-o-tijera\/game/,
    component: initGamePage,
  },
  {
    path: /\/Piedra-papel-o-tijera\/results/,
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
        const el = r.component({ goTo: goTo });

        if (conteiner.firstChild) {
          conteiner.firstChild.remove(el);
        }
        //conteiner.appendChild(el);
      }
    }
  }

  if (location.host.includes("github.io")) {
    goTo("/Piedra-papel-o-tijera/welcome");
  } else {
    handleRoute(location.pathname);
  }

  window.onpopstate = function () {
    handleRoute(location.pathname);
  };
}

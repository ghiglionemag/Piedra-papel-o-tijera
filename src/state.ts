type Jugada = "piedra" | "papel" | "tijera";
type Game = {
    computerPlay: Jugada,
    myPlay: Jugada;
}
const state = {
    data: {
        currentGame: {
            computerPlay: "",
            myPlay: "",
        },
        history: [],
    },
    setMove(move: Jugada) {
        const currentState = this.setState();
        currentState.currentGame.myPlay;
    },
    pushToHistory(play: Game) {
        const currentState = this.setState();
        currentState.history(play);
    },
    whoWin(myPlay: Jugada, computerPlay: Jugada) {
        const ganeConTijeras = myPlay == "tijera" && computerPlay == "papel";
        const ganeConPieda = myPlay == "piedra" && computerPlay == "tijera";
        const ganeConPapel = myPlay == "papel" && computerPlay == "piedra";
        const ganador = [ganeConPapel, ganeConPieda, ganeConTijeras].includes(true);

    }
}
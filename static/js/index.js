import game from "./game/game.js";

console.log('index.js')

const gameStart  = new game();

await gameStart.getHtml();
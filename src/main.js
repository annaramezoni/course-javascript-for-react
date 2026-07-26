import "/src/components/styles/settings/colors.css"; //variables with colors
import "/src/components/styles/generic/reset.css"; //reset
import "/src/components/styles/elements/base.css"; //general css styles

import CardGame from "./components/CardGame";

const $root = document.querySelector("#root ");
const $htmlCardGame = CardGame();

console.log($htmlCardGame);

$root.insertAdjacentHTML("beforeend", $htmlCardGame);

import "/src/components/styles/settings/colors.css"; //variables with colors
import "/src/components/styles/generic/reset.css"; //reset
import "/src/components/styles/elements/base.css"; //general css styles

import BoardGame from "./objects/BoardGame";

const $root = document.querySelector("#root ");
const $htmlBoardGame = BoardGame(6);

$root.insertAdjacentHTML("beforeend", $htmlBoardGame);

import "/src/components/styles/settings/colors.css"; //variables with colors
import "/src/components/styles/generic/reset.css"; //reset
import "/src/components/styles/elements/base.css"; //general css styles

import BoardGame from "./objects/BoardGame";
import PlayerName from "./components/PlayerScore/PlayerName";

const $root = document.querySelector("#root ");

$root.insertAdjacentHTML(
  "beforeend",
  `
    ${PlayerName("Player1")}
    ${PlayerName("Player2")}
    ${BoardGame(6)}
    `,
);

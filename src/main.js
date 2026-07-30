import "/src/components/styles/settings/colors.css"; //variables with colors
import "/src/components/styles/generic/reset.css"; //reset
import "/src/components/styles/elements/base.css"; //general css styles

import BoardGame from "./objects/BoardGame";
import ScoreBoard from "./objects/ScoreBoard";

const $root = document.querySelector("#root ");

$root.insertAdjacentHTML(
  "beforeend",
  `
    ${ScoreBoard()}
    ${BoardGame(2)}
    `,
);

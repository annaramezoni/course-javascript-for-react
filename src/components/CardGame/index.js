import "./style.css";

//JSX
function CardGame(icon = "alura-pixel", alt = "Logo da Alura") {
  return `
    <article class="card-game">
        <img src="images/${icon}.png" alt="${alt}"/>
    </article>
`;
}

export default CardGame;

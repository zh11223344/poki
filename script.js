const games = [
    {
        title: "Adventure Quest",
        description: "Embark on an epic journey!",
        image: "https://via.placeholder.com/200x150?text=Adventure+Quest",
        url: "#"
    },
    {
        title: "Puzzle Mania",
        description: "Solve challenging puzzles!",
        image: "https://via.placeholder.com/200x150?text=Puzzle+Mania",
        url: "#"
    },
    {
        title: "Racing Rush",
        description: "Speed through thrilling tracks!",
        image: "https://via.placeholder.com/200x150?text=Racing+Rush",
        url: "#"
    },
    {
        title: "Space Shooter",
        description: "Blast enemies in space!",
        image: "https://via.placeholder.com/200x150?text=Space+Shooter",
        url: "#"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const gamesContainer = document.querySelector(".games");

    games.forEach(game => {
        const gameCard = document.createElement("a");
        gameCard.href = game.url;
        gameCard.className = "game-card";
        gameCard.innerHTML = `
            <img src="${game.image}" alt="${game.title}">
            <h3>${game.title}</h3>
            <p>${game.description}</p>
        `;
        gamesContainer.appendChild(gameCard);
    });
});

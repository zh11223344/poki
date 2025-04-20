const games = [
    {
        title: "Adventure Quest",
        description: "Embark on an epic journey through mystical lands!",
        category: "Adventure",
        image: "https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg",
        url: "game.html?game=adventure-quest"
    },
    {
        title: "Puzzle Mania",
        description: "Solve challenging puzzles to test your brain!",
        category: "Puzzle",
        image: "https://images.pexels.com/photos/716398/pexels-photo-716398.jpeg",
        url: "game.html?game=puzzle-mania"
    },
    {
        title: "Racing Rush",
        description: "Speed through thrilling tracks in high-speed cars!",
        category: "Racing",
        image: "https://images.pexels.com/photos/163236/cars-luxury-sport-road-163236.jpeg",
        url: "game.html?game=racing-rush"
    },
    {
        title: "Space Shooter",
        description: "Blast enemies in an interstellar battle!",
        category: "Shooter",
        image: "https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg",
        url: "game.html?game=space-shooter"
    },
    {
        title: "Jungle Trek",
        description: "Explore dense jungles in search of treasure!",
        category: "Adventure",
        image: "https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg",
        url: "game.html?game=jungle-trek"
    },
    {
        title: "Brain Teaser",
        description: "Challenge your mind with tricky puzzles!",
        category: "Puzzle",
        image: "https://images.pexels.com/photos/220694/pexels-photo-220694.jpeg",
        url: "game.html?game=brain-teaser"
    },
    {
        title: "Nitro Blitz",
        description: "Race against time in this adrenaline-pumping game!",
        category: "Racing",
        image: "https://images.pexels.com/photos/3782734/pexels-photo-3782734.jpeg",
        url: "game.html?game=nitro-blitz"
    },
    {
        title: "Alien Invasion",
        description: "Defend Earth from extraterrestrial threats!",
        category: "Shooter",
        image: "https://images.pexels.com/photos/739090/pexels-photo-739090.jpeg",
        url: "game.html?game=alien-invasion"
    },
    {
        title: "Pixel Runner",
        description: "Dash through retro-style levels in this arcade hit!",
        category: "Arcade",
        image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg",
        url: "game.html?game=pixel-runner"
    },
    {
        title: "Castle Defense",
        description: "Strategize to protect your kingdom from invaders!",
        category: "Strategy",
        image: "https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg",
        url: "game.html?game=castle-defense"
    },
    {
        title: "Neon Breaker",
        description: "Smash blocks in this vibrant arcade classic!",
        category: "Arcade",
        image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg",
        url: "game.html?game=neon-breaker"
    },
    {
        title: "War Tactics",
        description: "Lead your army to victory with clever strategies!",
        category: "Strategy",
        image: "https://images.pexels.com/photos/1638237/pexels-photo-1638237.jpeg",
        url: "game.html?game=war-tactics"
    }
];

function displayGames(filteredGames) {
    const gamesContainer = document.querySelector(".games");
    gamesContainer.innerHTML = "";

    filteredGames.forEach(game => {
        const gameCard = document.createElement("a");
        gameCard.href = game.url;
        gameCard.className = "game-card bg-white shadow-md";
        gameCard.innerHTML = `
            <img src="${game.image}" alt="${game.title}" class="rounded-t-lg">
            <h3 class="text-gray-800">${game.title}</h3>
        `;
        gamesContainer.appendChild(gameCard);
    });
}

function searchGames() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const filteredGames = games.filter(game => game.title.toLowerCase().includes(query));
    displayGames(filteredGames);
}

document.addEventListener("DOMContentLoaded", () => {
    displayGames(games);

    document.getElementById("searchInput").addEventListener("input", searchGames);
});

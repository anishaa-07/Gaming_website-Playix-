// ===== ELEMENTS =====
const grid = document.getElementById("gameGrid");
const player = document.getElementById("player");
const frame = document.getElementById("frame");
const closeFrame = document.getElementById("closeFrame");
const backHome = document.getElementById("backHome");

// ===== RENDER GAMES =====
function renderGames() {
  grid.innerHTML = "";

  games.forEach((game) => {
    const card = document.createElement("div");
    card.className = "game-card";

    // 🔑 KEY LINE: GIF always visible
    card.style.setProperty(
  "--gif",
  `url('${game.gif || "https://i.imgur.com/8Qf8RzE.jpg"}')`
);

    // Card content (NO img tags)
    card.innerHTML = `
      <div class="game-category">${game.category}</div>
      <div class="game-title">${game.title}</div>
    `;

    card.addEventListener("click", () => openGame(game));
    grid.appendChild(card);
  });
}

// ===== OPEN GAME =====
function openGame(game) {
  if (game.embed) {
    frame.src = game.url;
    player.style.display = "flex";
  } else {
    window.open(game.url, "_blank");
  }
}

// ===== CLOSE PLAYER =====
function closePlayer() {
  frame.src = "";
  player.style.display = "none";
}

if (closeFrame) closeFrame.addEventListener("click", closePlayer);
if (backHome) backHome.addEventListener("click", closePlayer);

// ===== INITIAL LOAD =====
renderGames();




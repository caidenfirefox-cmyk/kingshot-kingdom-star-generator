const starNames = [
  "Sunforge",
  "Moonwell",
  "Ironcrest",
  "Thornkeep",
  "Starfall",
  "Crownward",
  "Gilded Grove",
  "Riverglass",
  "Stormspire",
  "Dawnwatch",
  "Amber Vale",
  "Silverreach",
  "Runehold",
  "Frostgate",
  "Emberfall",
  "Hearthbound",
  "Northlight",
  "Verdant Crown",
  "Ashen Bastion",
  "Skyhook"
];

const starTypes = [
  "Prosperity",
  "Defense",
  "Logistics",
  "Expansion",
  "Economy",
  "Militia",
  "Mystic",
  "Civic",
  "Trade",
  "Royal"
];

const themes = {
  any: [
    "gold",
    "forest",
    "stone",
    "magic",
    "defense",
    "expansion"
  ],
  gold: [
    "Trade",
    "Economy",
    "Luxury",
    "Taxation",
    "Merchant"
  ],
  forest: [
    "Growth",
    "Nature",
    "Harvest",
    "Harmony",
    "Wilds"
  ],
  stone: [
    "Fortify",
    "Stability",
    "Guard",
    "Bastion",
    "Stronghold"
  ],
  magic: [
    "Arcana",
    "Mystic",
    "Ritual",
    "Warding",
    "Astral"
  ],
  defense: [
    "Watch",
    "Shield",
    "Ward",
    "Crest",
    "Guard"
  ],
  expansion: [
    "Route",
    "Pioneer",
    "Frontier",
    "Outer",
    "Venture"
  ]
};

const rarityPalette = {
  Common: { border: "#8aa4d7" },
  Uncommon: { border: "#67d08f" },
  Rare: { border: "#7a9bff" },
  Epic: { border: "#b87cff" },
  Legendary: { border: "#ffd76a" }
};

const difficultyMap = {
  1: "Peaceful",
  2: "Rising",
  3: "Balanced",
  4: "Hard",
  5: "Epic"
};

const scoreMap = {
  1: 60,
  2: 110,
  3: 180,
  4: 260,
  5: 360
};

const starGrid = document.getElementById("star-grid");
const template = document.getElementById("star-card-template");

const inputs = {
  count: document.getElementById("star-count"),
  difficulty: document.getElementById("difficulty"),
  theme: document.getElementById("theme"),
  kingdomName: document.getElementById("kingdom-name")
};

const outputs = {
  title: document.getElementById("kingdom-title"),
  totalScore: document.getElementById("total-score"),
  alignment: document.getElementById("alignment"),
  bestStar: document.getElementById("best-star"),
  focus: document.getElementById("focus"),
  tier: document.getElementById("tier")
};

function randomFrom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function pickRarity(level) {
  const rarities = ["Common", "Uncommon", "Rare", "Epic", "Legendary"];
  if (level <= 1) return "Common";
  if (level === 2) return "Uncommon";
  if (level === 3) return "Rare";
  if (level === 4) return "Epic";
  return "Legendary";
}

function generateKingdomName(baseName) {
  const prefixes = ["Moon", "Sun", "Iron", "Cinder", "Stone", "Crystal", "Dawn", "Emerald", "Silver", "Royal"];
  const suffixes = ["Crest", "Keep", "Vale", "Dominion", "Reach", "Watch", "Shore", "Haven", "Gate", "Union"];

  if (!baseName || !baseName.trim()) {
    const generated = `${randomFrom(prefixes)}${randomFrom(suffixes)}`;
    return generated;
  }

  return baseName.trim();
}

function getThemeList(theme) {
  if (theme === "any") {
    return Object.values(themes).flat();
  }
  return themes[theme] || themes.any;
}

function createStar(rank, difficulty, themeList) {
  const name = randomFrom(starNames);
  const type = randomFrom(starTypes);
  const modifier = randomFrom(themeList);
  const rarity = pickRarity(rank);
  const power = difficulty * (rank + 2) + Math.floor(Math.random() * 14);
  const bonus = `${modifier} +${(power + rank * 3)}% kingdom output`;

  return {
    name: `${name} ${modifier}`,
    type,
    rarity,
    power,
    bonus,
    value: rank + difficulty,
    tag: `${modifier} Line`
  };
}

function generateStars() {
  const count = Math.max(3, Math.min(18, Number(inputs.count.value) || 7));
  const difficulty = Number(inputs.difficulty.value) || 3;
  const selectedTheme = inputs.theme.value || "any";
  const themeList = getThemeList(selectedTheme);
  const kingdomName = generateKingdomName(inputs.kingdomName.value);

  const stars = Array.from({ length: count }, (_, index) => {
    const rank = Math.min(5, Math.max(1, Math.round((index + 1) / Math.max(1, count / 5))));
    return createStar(rank, difficulty, themeList);
  });

  const totalScore = stars.reduce((sum, star) => sum + star.power, 0);
  const bestStar = stars.reduce((best, star) => (star.power > best.power ? star : best), stars[0]);
  const focus = selectedTheme === "any" ? randomFrom(["Prosperity", "Defense", "Economy", "Expansion"]) : selectedTheme;
  const tier = totalScore > 320 ? "Legendary" : totalScore > 220 ? "Epic" : totalScore > 120 ? "Strong" : "Growing";
  const alignment = difficultyMap[difficulty] || "Balanced";

  outputs.title.textContent = `${kingdomName} Dominion`;
  outputs.totalScore.textContent = totalScore;
  outputs.alignment.textContent = alignment;
  outputs.bestStar.textContent = bestStar.name;
  outputs.focus.textContent = focus;
  outputs.tier.textContent = tier;

  starGrid.innerHTML = "";

  stars.forEach((star) => {
    const fragment = template.content.cloneNode(true);
    const card = fragment.querySelector(".star-card");
    const rarity = fragment.querySelector(".star-rarity");
    const value = fragment.querySelector(".star-value");
    const name = fragment.querySelector(".star-name");
    const type = fragment.querySelector(".star-type");
    const bonus = fragment.querySelector(".star-bonus");
    const tag = fragment.querySelector(".star-tag");
    const power = fragment.querySelector(".star-power");

    card.style.borderColor = rarityPalette[star.rarity]?.border || "#8ca2d0";
    rarity.textContent = star.rarity;
    value.textContent = `+${star.value}`;
    name.textContent = star.name;
    type.textContent = star.type;
    bonus.textContent = star.bonus;
    tag.textContent = star.tag;
    power.textContent = `${star.power} power`;

    starGrid.appendChild(fragment);
  });

  return { stars, totalScore, bestStar, tier };
}

function randomizeValues() {
  inputs.count.value = String(Math.floor(Math.random() * 10) + 5);
  inputs.difficulty.value = String(Math.floor(Math.random() * 5) + 1);
  inputs.theme.value = randomFrom(["any", "gold", "forest", "stone", "magic", "defense", "expansion"]);
  inputs.kingdomName.value = randomFrom([
    "Mooncrest",
    "Sunfall",
    "Ironmere",
    "Cinderhold",
    "Hearthstone",
    "Silverveil",
    "Northwatch",
    "Emerald Crown"
  ]);
  generateStars();
}

async function copySummary() {
  const summary = `${outputs.title.textContent}\nTotal score: ${outputs.totalScore.textContent}\nAlignment: ${outputs.alignment.textContent}\nBest star: ${outputs.bestStar.textContent}\nFocus: ${outputs.focus.textContent}\nTier: ${outputs.tier.textContent}`;

  try {
    await navigator.clipboard.writeText(summary);
    const btn = document.getElementById("copy-btn");
    const previous = btn.textContent;
    btn.textContent = "Copied!";
    setTimeout(() => {
      btn.textContent = previous;
    }, 1200);
  } catch (error) {
    console.error("Copy failed", error);
  }
}

document.getElementById("generate-btn").addEventListener("click", generateStars);
document.getElementById("randomize-btn").addEventListener("click", randomizeValues);
document.getElementById("copy-btn").addEventListener("click", copySummary);

generateStars();

window.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && document.activeElement.matches("input, select")) {
    generateStars();
  }
});


let coins = 0;
let upgrades = 0;
let upgradeCost = 50;

const coinDisplay = document.getElementById("beecoins");
const upgradeDisplay = document.getElementById("upgrades");
const beeBtn = document.getElementById("bee-btn");
const buyUpgradeBtn = document.getElementById("buy-upgrade");

function updateUI() {
  coinDisplay.textContent = coins.toFixed(1);
  upgradeDisplay.textContent = upgrades;
  buyUpgradeBtn.textContent = `Kup Zbieracza Nektaru (koszt: ${upgradeCost} BEEcoins)`;
}

beeBtn.addEventListener("click", () => {
  coins += 1;
  updateUI();
});

buyUpgradeBtn.addEventListener("click", () => {
  if (coins >= upgradeCost) {
    coins -= upgradeCost;
    upgrades++;
    upgradeCost = Math.floor(upgradeCost * 1.5);
    updateUI();
  }
});

setInterval(() => {
  coins += upgrades * 0.5; // automatyczne zbieranie
  updateUI();
}, 1000);

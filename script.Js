let points = 0;
let pointsPerClick = 1;
let upgradeCost = 10;

const pointsDisplay = document.getElementById('points');
const clickButton = document.getElementById('clickButton');
const upgradeButton = document.getElementById('upgradeButton');
const upgradeCostDisplay = document.getElementById('upgradeCost');
const adminCommandInput = document.getElementById('adminCommand');
const executeCommandButton = document.getElementById('executeCommand');

clickButton.addEventListener('click', function() {
    points += pointsPerClick;
    updateDisplay();
});

upgradeButton.addEventListener('click', function() {
    if (points >= upgradeCost) {
        points -= upgradeCost;
        pointsPerClick *= 2;
        upgradeCost *= 2;
        updateDisplay();
    }
});

executeCommandButton.addEventListener('click', function() {
    const command = adminCommandInput.value.trim().toLowerCase();
    handleAdminCommand(command);
    adminCommandInput.value = '';
});

function updateDisplay() {
    pointsDisplay.textContent = points;
    upgradeCostDisplay.textContent = upgradeCost;
    upgradeButton.disabled = points < upgradeCost;
}

function handleAdminCommand(command) {
    if (command.startsWith('add points')) {
        const amount = parseInt(command.split(' ')[2]);
        if (!isNaN(amount)) {
            points += amount;
            updateDisplay();
        }
    } else if (command === 'reset points') {
        points = 0;
        updateDisplay();
    } else if (command.startsWith('set click value')) {
        const value = parseInt(command.split(' ')[3]);
        if (!isNaN(value)) {
            pointsPerClick = value;
            updateDisplay();
        }
    } else {
        alert('Invalid command');
    }
}

updateDisplay();

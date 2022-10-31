function rollDice() {
    let goldCoins = 0;
    for(let i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        alert('You rolled a ' + roll);
        if(roll === 1) {
            alert('game over, no more rolls');
            break;
        }
        if (roll < 5) {
            continue;
        }
        alert('congratulations you win ' + roll + ' coins');
        goldCoins += roll;
    }
    alert('you have won a total of ' + goldCoins + ' gold coins');
}
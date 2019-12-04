const fs = require('fs');

const calculateFuel = (mass) => {
    const fuel = Math.floor(mass / 3) - 2;

    if(fuel <= 0) {
        return 0;
    } else {
        return fuel + calculateFuel(fuel);
    }
};


fs.readFile('./input.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    }

    const seperatedInput = data.split('\n');
    let totalFuel = 0;

    for(i = 0; i < seperatedInput.length; i++) {
        totalFuel += calculateFuel(parseInt(seperatedInput[i]));
    }

    console.log(totalFuel);
});

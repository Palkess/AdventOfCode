const fs = require('fs');

let listData = [];

const intcode_interpreter = (intcodeList, currentIndex) => {

    switch(intcodeList[currentIndex]) {
        case 1:
            intcodeList[intcodeList[currentIndex + 3]] = intcodeList[intcodeList[currentIndex + 1]] + intcodeList[intcodeList[currentIndex + 2]];
            break;
        case 2:
            intcodeList[intcodeList[currentIndex + 3]] = intcodeList[intcodeList[currentIndex + 1]] * intcodeList[intcodeList[currentIndex + 2]];
            break;
        case 99:
            return intcodeList; 
        default:
            break;
    } 
    
    return intcode_interpreter(intcodeList, currentIndex + 4);
};

const intcode_interpreter_findNounAndVerb = (intcodeList) => {
    for(n = 0; n < 100; n++) {
        for(v = 0; v < 100; v++) {

            let testList = Array.from(intcodeList);

            testList[1] = n;

            testList[2] = v

            intcode_interpreter(testList, 0);

            if(testList[0] === 19690720) {
                console.log(100 * n + v);
                return;
            }
        }
    }
};

fs.readFile('./input.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    }

    let dataInList = data.split(',').map(Number);

    // Part One
    listData = intcode_interpreter(Array.from(dataInList), 0);
    let output = "";

    for(i = 0; i < listData.length; i++) {
        output += `${listData[i]},`;
    }

    console.log(output);

    // Part Two
    intcode_interpreter_findNounAndVerb(dataInList);
});
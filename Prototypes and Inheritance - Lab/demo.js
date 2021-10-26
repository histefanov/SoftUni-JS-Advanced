function eggBattle(input) {
    let firstPlayerEggs = Number(input[0]);
    let secondPlayerEggs = Number(input[1]);
    let cmd;

    for (let i = 2; i < input.length; i++) {
        cmd = input[i];

        if (cmd === 'one') {
            secondPlayerEggs--;
        } else if (cmd === 'two') {
            firstPlayerEggs--;
        } else if (cmd === 'End of battle') {
            break;
        }
        
        if (firstPlayerEggs <= 0) {
            console.log(`Player one is out of eggs. Player two has ${secondPlayerEggs} eggs left.`);
            break;
        } else if (secondPlayerEggs <= 0) {
            console.log(`Player two is out of eggs. Player one has ${firstPlayerEggs} eggs left.`);
            break;
        }
    }

    if (cmd === 'End of battle') {
        console.log(`Player one has ${firstPlayerEggs} eggs left.`);
        console.log(`Player two has ${secondPlayerEggs} eggs left.`);
    }


    // let index = 2;
    // let cmd = input[index];

    // while (cmd !== 'End of battle') {
    //     if (cmd === 'one') {
    //         secondPlayerEggs--;
    //     } else if (cmd === 'two') {
    //         firstPlayerEggs--;
    //     }

    //     if (firstPlayerEggs <= 0) {
    //         console.log(`Player one is out of eggs. Player two has ${secondPlayerEggs} eggs left.`);
    //         break;
    //     } else if (secondPlayerEggs <= 0) {
    //         console.log(`Player two is out of eggs. Player one has ${firstPlayerEggs} eggs left.`);
    //         break;
    //     }

    //     index++;
    //     cmd = input[index];
    // }

    // if (cmd === 'End of battle') {
    //     console.log(`Player one has ${firstPlayerEggs} eggs left.`);
    //     console.log(`Player two has ${secondPlayerEggs} eggs left.`);
    // }
}

eggBattle([
    5,
    4,
    'one',
    'two',
    'one',
    'two',
    'two',
    'End of battle'
]);
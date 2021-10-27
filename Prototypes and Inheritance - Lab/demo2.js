function eggStore(input) {
    let totalEggs = Number(input[0]);
    let index = 1;
    let command = input[index];
    index++;
    let eggs = Number(input[index]);
    index++;
    let soldEggs = 0;

    while (command !== 'Close') {
        if (command === 'Buy') {
            if (totalEggs >= eggs) {
                totalEggs -= eggs;
                soldEggs += eggs;
            } else {
                console.log('Not enough eggs in store!');
                console.log(`You can buy only ${totalEggs}.`);
                break;
            }
        } else if (command === 'Fill') {
            totalEggs += eggs;
        }

        command = input[index];
        index++;
        eggs = Number(input[index]);
        index++;
    }

    if (command === 'Close') {
        console.log('Store is closed!');
        console.log(`${soldEggs} eggs sold.`);
    }
}

eggStore([
    13,
    'Buy',
    8,
    'Fill',
    3,
    'Buy',
    10
])
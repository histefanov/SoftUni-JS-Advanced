function createJuice(input) {
    const juices = { bulkAmount: {}, bottles: {} };

    for (const entry of input) {
        const [juice, amount] = entry.split('=>').map((token) => token.trim());

        if (!juices.bulkAmount[juice]) {
            juices.bulkAmount[juice] = 0;
        }
        juices.bulkAmount[juice] += Number(amount);

        if (juices.bulkAmount[juice] >= 1000) {
            const newBottles = Math.floor(juices.bulkAmount[juice] / 1000);

            if (!juices.bottles[juice]) {
                juices.bottles[juice] = 0;
            }
            juices.bottles[juice] += newBottles;

            juices.bulkAmount[juice] -= newBottles * 1000;
        }
    }

    return Object.entries(juices.bottles)
        .map((tokens) => `${tokens[0]} => ${tokens[1]}`)
        .join('\n');
}

const result = createJuice(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']);

console.log(result);
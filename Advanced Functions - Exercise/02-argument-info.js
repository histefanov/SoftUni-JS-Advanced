function argInfo(...args) {
    const data = {}
    const argTypes = [];

    for (const arg of args) {
        const type = typeof arg;

        if (!data[type]) {
            data[type] = 0;
        }

        data[type]++;
        argTypes.push(`${type}: ${arg}`);
    }

    const summary = Object.keys(data)
        .sort((a, b) => data[b] - data[a])
        .map((type) => `${type} = ${data[type]}`);

    return argTypes.concat(summary).join('\n');
}

console.log(argInfo('cat', 42, function () { console.log('Hello world!'); }))
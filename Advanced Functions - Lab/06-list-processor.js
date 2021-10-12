function listProcessor(input) {
    let list = [];

    const funcs = {
        add: (string) => list.push(string),
        remove: (string) => list = list.filter((w) => w != string),
        print: () => console.log(list.join(','))
    }

    for (const entry of input) {
        if (entry == 'print') {
            funcs.print();
        } else {
            const [cmd, value] = entry.split(' ');
            funcs[cmd](value);
        }       
    }
}

listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print']);
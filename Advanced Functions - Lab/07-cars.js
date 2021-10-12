// The worst spaghetti code i've ever written:

function carFactory(input) {
    const cars = {};
    const children = {};
    const printQueue = [];

    const factory = {
        create: (name) => {
            cars[name] = {};
        },
        set: (name, key, value) => {
            cars[name][key] = value;
        },
        print: (name) => {
            console.log(
                Object.keys(cars[name]).map((key) => `${key}:${cars[name][key]}`).join(',')
            )
        }
    }

    for (const entry of input) {
        const [operation, name, ...args] = entry.split(' ');
        if (operation == 'print') {
            printQueue.push(name);
            continue;
        }
        if (args[0] == 'inherit') {
            children[name] = args[1];
        }
        factory[operation](name, args[0], args[1]);
    }

    for (const child of Object.keys(children)) {
        const parent = children[child];
        Object.assign(cars[child], cars[parent]);
    }

    for (const printName of printQueue) {
        factory.print(printName);
    }
}

carFactory(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2']
)


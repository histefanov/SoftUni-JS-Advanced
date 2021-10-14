function managerSolution() {
    const recipes = {
        apple: {carbohydrate: 1, flavour: 2},
        lemonade: {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        eggs: {protein: 5, fat: 1, flavour: 1},
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
    }

    const supply = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    const operations = {
        restock: (microelement, qty) => {
            supply[microelement] += qty;
            return 'Success';
        },
        prepare: (food, qty) => {
            const ingredients = Object.keys(recipes[food]);
            const deficientIngredient = ingredients.find((i) => recipes[food][i] * qty > supply[i]);

            if (!deficientIngredient) {
                ingredients.forEach((i) => supply[i] -= recipes[food][i] * qty);
                return 'Success';
            } else {
                return `Error: not enough ${deficientIngredient} in stock`;
            }
        },
        report: () => Object.keys(supply)
            .map((i) => `${i}=${supply[i]}`)
            .join(' ')
    }

    function manager(input) {
        const [cmd, arg, qty] = input.split(' ');
        return operations[cmd](arg, Number(qty));
    }

    return manager;
}

let manager = managerSolution (); 
console.log(manager("restock flavour 50"));
console.log(manager("restock carbohydrate 50"));
console.log(manager("restock protein 50"));
console.log(manager("restock fat 50")); // Success 
console.log(manager("prepare lemonade 2"));
console.log(manager("report")); // Error: not enough carbohydrate in stock 

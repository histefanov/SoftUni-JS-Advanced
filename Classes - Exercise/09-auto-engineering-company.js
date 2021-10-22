function createRegister(input) {
    const register = {}; 

    for (const entry of input) {
        const [brand, model, carsCount] = entry.split('|').map((e) => e.trim());

        if (!register[brand]) {
            register[brand] = {};
        }

        if (!register[brand][model]) {
            register[brand][model] = 0;
        }
        register[brand][model] += Number(carsCount);
    }

    return Object.keys(register)
        .map((brand) => {
            const models = Object.entries(register[brand])
                .map((model) => `###${model[0]} -> ${model[1]}`)
                .join('\n');
            
            return `${brand}\n${models}`;
        })
        .join('\n');
}
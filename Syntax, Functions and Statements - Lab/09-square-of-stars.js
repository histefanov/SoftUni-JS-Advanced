function stars(n) {
    if (!n) {
        n = 5;
    }

    for (let i = 0; i < n; i++) {
        console.log('* '.repeat(n));
    }
}

stars(8);
stars(5);
stars();
function sumInRange(n, m) {
    const num1 = Number(n);
    const num2 = Number(m);
    let sum = 0;

    for (let i = num1; i <= num2; i++) {
        sum += i;
    }

    console.log(sum);
}

sumInRange('1', '5');
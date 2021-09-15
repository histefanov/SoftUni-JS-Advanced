function calc(a, b, operator) {
    let result;
    switch (operator) {
        case '+': result = a + b; break;
        case '-': result = a - b; break;
        case '*': result = a * b; break;
        case '/': result = a / b; break;
        case '%': result = a % b; break;
        case '**': result = a ** b; break;
    }

    console.log(result);
}

calc(3, 5, '+');
calc(6, 9, '-');
calc(420, 69, '**');
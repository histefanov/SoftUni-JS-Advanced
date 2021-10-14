function add(num) {
    let sum = num;

    function calc(n) {
        sum += n;
        return calc;
    }

    calc.toString = () => sum;

    return calc;
}   

console.log(add(1)(6)(3).toString());
function aggregate(params) {
    let sum = params.reduce((prev, next) => prev + next);
    let inverseSum = 0;
    params.forEach((x) => inverseSum += 1 / x);
    let str = params.join('');
    
    console.log(sum);
    console.log(inverseSum);
    console.log(str);
}

aggregate([2, 4, 8, 16])
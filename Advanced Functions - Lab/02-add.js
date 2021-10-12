function solution(input) {
    const number = input;
    return (a) => number + a; 
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
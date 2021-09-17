const arr = [1, 2, 3, 4];
const slicedArr = arr.slice(1, 3);
slicedArr[2] = 10;

console.log(arr);
console.log(slicedArr);

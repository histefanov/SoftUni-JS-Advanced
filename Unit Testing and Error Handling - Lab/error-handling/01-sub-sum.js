function subSum(arr, start, end) {
    if (!Array.isArray(arr)) {
        return NaN;
    }

    start = start < 0 ? 0 : start;
    end = end > arr.length - 1 ? arr.length - 1 : end;

    return arr.slice(start, end + 1).map(Number).reduce((a, b) => a + b, 0);
}

console.log(subSum([], 1, 2));
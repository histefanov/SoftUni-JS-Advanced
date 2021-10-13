function sortArray(inputArray, sorting) {
    return inputArray.sort(sorting == 'asc' ? sortAsc : sortDesc);

    function sortAsc(a, b) {
        return a - b;
    }
    
    function sortDesc(a, b) {
        return b - a;
    }
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
function modify() {
    let initString = '';

    return {
        append: (string) => initString += string,
        removeStart: (n) => initString = initString.slice(n),
        removeEnd: (n) => initString = initString.slice(0, -n),
        print: () => console.log(initString)
    }
}

let secondZeroTest = modify();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();
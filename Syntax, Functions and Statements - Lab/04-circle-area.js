function circleArea(rad) {
    const paramType = typeof(rad);
    let result;

    if (paramType === 'number') {
        const area = Math.PI * rad ** 2;
        result = area.toFixed(2);
    } else {
        result = `We can not calculate the circle area, because we receive a ${paramType}.`;
    }
    
    console.log(result);
}

circleArea(5);
circleArea('abc');
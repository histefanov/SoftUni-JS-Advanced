function santaHoliday(input) {
    let days = Number(input[0]);
    let type = input[1];
    let feedback = input[2]; // <---- Оценката след престоя

    let totalPrice = 0;

    if (type === 'room for one person') {
        totalPrice = (days - 1) * 18;
        // В този случай нямаме нужда от вложени проверки, защото не ползва намаление без значение от броя на дните.
    } else if (type === 'apartment') {
        totalPrice = (days - 1) * 25;

        if (days < 10) {
            totalPrice = totalPrice - ((totalPrice * 30) / 100);
        } else if (days >= 10 && days <= 15) {
            totalPrice = totalPrice - ((totalPrice * 35) / 100);
        } else {
            totalPrice = totalPrice - ((totalPrice * 50) / 100);
        }
    } else if (type === 'president apartment') {
        totalPrice = (days - 1) * 35;

        if (days < 10) {
            totalPrice = totalPrice - ((totalPrice * 10) / 100);
        } else if (days >= 10 && days <= 15) {
            totalPrice = totalPrice - ((totalPrice * 15) / 100);
        } else {
            totalPrice = totalPrice - ((totalPrice * 20) / 100);
        }
    }

    if (feedback === 'positive') {
        totalPrice = totalPrice + ((totalPrice * 25) / 100);
    } else if (feedback === 'negative') {
        totalPrice = totalPrice - ((totalPrice * 10) / 100);
    }

    console.log(totalPrice.toFixed(2));
}

santaHoliday(['14', 'apartment', 'positive']);
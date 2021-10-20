function tickets(ticketData, sortingParameter) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    const tickets = ticketData
        .map((entry) => {
            const [destination, price, status] = entry.split('|');
            return new Ticket(destination, price, status)})
        .sort((a, b) => {
            if (sortingParameter == 'price') {
                return a[sortingParameter] - b[sortingParameter];
            }
            return a[sortingParameter].localeCompare(b[sortingParameter]);
        });

    return tickets
}

tickets(['Philadelphia|94.20|available',
 'New York City|95.99|available',
 'New York City|95.99|sold',
 'Boston|126.20|departed'],
'destination')
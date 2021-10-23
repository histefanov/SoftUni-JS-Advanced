class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {
            child: 150,
            student: 300,
            collegian: 500
        }
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        if (!this.priceForTheCamp.hasOwnProperty(condition)) {
            throw new Error('Unsuccessful registration at the camp.');
        }

        if (this.listOfParticipants.some((p) => p.name == name)) {
            return `The ${name} is already registered at the camp.`;
        }

        if (money < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`;
        }

        this.listOfParticipants.push({
            name,
            condition,
            power: 100,
            wins: 0
        });

        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant(name) {
        const participant = this.listOfParticipants.find((p) => p.name == name);

        if (participant == undefined) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }

        this.listOfParticipants.splice(this.listOfParticipants.indexOf(participant), 1);

        return `The ${name} removed successfully.`;
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        if (typeOfGame == 'WaterBalloonFights') {
            const playerOne = this.listOfParticipants.find((p) => p.name == participant1);
            const playerTwo = this.listOfParticipants.find((p) => p.name == participant2);

            if (!playerOne || !playerTwo) {
                throw new Error(`Invalid entered name/s.`);
            }

            if (playerOne.condition != playerTwo.condition) {
                throw new Error(`Choose players with equal condition.`);
            }

            if (playerOne.power > playerTwo.power) {
                playerOne.wins++;
                return `The ${playerOne.name} is winner in the game ${typeOfGame}.`;
            } else if (playerOne.power < playerTwo.power) {
                playerTwo.wins++;
                return `The ${playerTwo.name} is winner in the game ${typeOfGame}.`;
            } else {
                return `There is no winner.`;
            }
        } else if (typeOfGame == 'Battleship') {
            const player = this.listOfParticipants.find((p) => p.name == participant1);

            if (player == undefined) {
                throw new Error(`Invalid entered name/s.`);
            }

            player.power += 20;
            
            return `The ${player.name} successfully completed the game ${typeOfGame}.`;
        }
    }

    toString() {
        const result = [`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`];

        this.listOfParticipants
            .sort((a, b) => b.wins - a.wins)
            .forEach((p) => result.push(`${p.name} - ${p.condition} - ${p.power} - ${p.wins}`));

        return result.join('\n');
    }
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());


function createPerson(firstName, lastName) {
    const person = {
        firstName,
        lastName,
        fullName: ''
    }

    const fullNamePattern = /^(\w+ \w+)$/;

    Object.defineProperty(person, 'fullName', {
        get() {
            return this.firstName + ' ' + this.lastName;
        },
        set(value) {          
            if (fullNamePattern.test(value)) {
                const [fn, ln] = value.split(' ');
                this.firstName = fn;
                this.lastName = ln;
            }         
        },
        enumerable: true,
        configurable: true
    })

    return person;
}

const person = createPerson("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla
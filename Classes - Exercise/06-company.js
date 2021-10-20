class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(...params) {
        const [name, salary, position, department] = params;

        if (params.some((p) => !p) || Number(salary) < 0) {
            throw new Error("Invalid input!");
        }

        if (!this.departments[department]) {
            this.departments[department] = [];
        }
        this.departments[department].push({
            name,
            salary: Number(salary),
            position
        })

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        const bestDepartment = Object.keys(this.departments)
            .map((name) => {
                return {
                    name,
                    avgSalary: (this.departments[name]
                        .map((employee) => employee.salary)
                        .reduce((a, b) => a + b)) / this.departments[name].length
                }
            })
            .sort((a, b) => b.avgSalary - a.avgSalary)[0];
        
        let result = `Best Department is: ${bestDepartment.name}
Average salary: ${bestDepartment.avgSalary.toFixed(2)}`;

        this.departments[bestDepartment.name]
            .sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name))
            .forEach((e) => result += `\n${e.name} ${e.salary} ${e.position}`);

        return result;
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());

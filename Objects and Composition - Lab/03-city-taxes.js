function createTown(name, population, treasury) {
  const city = {
    name,
    population,
    treasury,
    taxRate: 10,
    collectTaxes: function () {
      this.treasury += Math.floor(this.population * this.taxRate);
    },
    applyGrowth: function (percentage) {
      this.population = Math.floor(this.population * (1 + percentage / 100));
    },
    applyRecession: function (percentage) {
      this.treasury -= Math.ceil((this.treasury * percentage) / 100);
    },
  };

  return city;
}

const city = createTown("Tortuga", 7000, 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);

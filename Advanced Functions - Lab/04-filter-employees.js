function filterEmployees(data, criteria) {
    let employees = JSON.parse(data);

    if (criteria != 'all') {
        const [indicator, value] = criteria.split('-');
        employees = employees.filter((e) => e[indicator] == value)
    }

    return employees
        .map((e, index) => `${index}. ${e.first_name} ${e.last_name} - ${e.email}`)
        .join('\n');
}

const result = filterEmployees(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'gender-Female')

console.log(result);
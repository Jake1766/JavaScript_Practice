const people = [
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

const findTheOldest = function(people) {
    oldest = people[0];
    const currentYear = new Date().getFullYear();


    for(i in people){
        person = people[i];

        if(person.yearOfDeath == undefined){
            person.yearOfDeath = currentYear;

        }

        
        let age = person.yearOfDeath - person.yearOfBirth

        if(age > (oldest.yearOfDeath - oldest.yearOfBirth)){
            oldest = people[i];
        }
        
    }
    // console.log(oldest);
    return oldest;
};

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;

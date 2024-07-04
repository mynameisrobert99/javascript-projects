let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1

};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2
};

let Leroy = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function() {
       let steps = Math.floor(Math.random() * 11);
       console.log(`${this.name} took ${steps} steps.`);
       return steps;
   }
};

let Almina = {
   name: "Almina",
   species: "elephant",
   mass: 550,
   age: 1,
   astronautID: 5,
   move: function() {
       let steps = Math.floor(Math.random() * 11);
       console.log(`${this.name} took ${steps} steps.`);
       return steps;
   }
};

let Brad = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function() {
       let steps = Math.floor(Math.random() * 11);
       console.log(`${this.name} took ${steps} steps.`);
       return steps;
   }
};

let crew = [superChimpOne, salamander, Brad, Leroy, Almina];

crew.forEach(animal => {
   console.log(`Name: ${animal.name}, Species: ${animal.species}, Mass: ${animal.mass} kg, Age: ${animal.age} years, Astronaut ID: ${animal.astronautID}`);
});

function race(crew) {
   let steps = crew.map(animal => animal.steps());
   let maxSteps = Math.max(...steps);
   let winners = crew.filter(animal => animal.steps() === maxSteps);
   
   if (winners.length > 1) {
       console.log("It's a tie between:");
       winners.forEach(winner => console.log(winner.name));
   } else {
       console.log(`The winner is ${winners[0].name}!`);
   }
}

race(crew);
// After you have created the other object literals, add the astronautID property to each one.

// Add a move method to each animal object

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!

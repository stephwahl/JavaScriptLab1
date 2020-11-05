//declare and initialize variable with appropriate values

const name = "Gamora Zen Whoberi Ben Titan";
const age = 40;
const birthday = "November 20";
let detroitGC = false;
const lifeEvents = [
  "I was born to an unnamed pair of Zehoberei parents.",
  "I am the adopted daughter of Thanos, and the last of my species.",
  "My powers include superhuman strength and agility and an accelerated healing factor.",
  "I am a member of the group known as the Infinity Watch."
];

// Write an if/else statement that runs one of two console.log methods.
if (detroitGC === true) {
  console.log(
    `My name is ${name} and I am a student at Grand Circus in Detroit, Michigan.  I am currently ${age} years old and my birthday is on ${birthday}.`
  );
} else {
  console.log(
    `My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
}

// Write a for loop that starts at 0 and iterates by increments of 1 while i is less than the
// length of the lifeEvents array. Each iteration of the loop should log a new sentence
// from the lifeEvents array. You should only have one console.log method.

let start = 0;

for (let item of lifeEvents) {
  if (item <= lifeEvents.length) {
    start++;
  }
  console.log(item);
}

// Declare and initialize a variable named counter to the value of 0.

let counter = 0

// Write a while loop that loops while true.
    //Declare a variable named randomNumber that is initialized to a random integer between 1 and 10. Google search how to do this.
    //Write an if/else statement that has two conditions
        //If randomNumber is not equal to 5
            //Increment counter
            //Use a console.log method to say: “randomNumber !== 5”
        //Else
            //Increment counter
            //Use a console.log method to say: “5 === 5. It took counter iterations to randomly generate the number 5.”
            //Break


while (counter <= 50) {
    let randomNumber = Math.floor((Math.random() * 10) + 1);

    if (randomNumber !== 5) {
    counter++; 
    console.log(`${randomNumber} !== 5`); 
    }  
     else {
        counter++;
        console.log(`${randomNumber} === 5.  It took ${counter} iterations to randomly generate the number 5.`);
        break;
    }
 }
// Declare and initialize the variables for exercise 1 here:
let engineIndicatorLight = 'red blinking';
let spaceSuitOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;


// BEFORE running the code, predict what will be printed to the console by the following statements:

// I predict it will say 'engine lights are off'

if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("engines are off");
}




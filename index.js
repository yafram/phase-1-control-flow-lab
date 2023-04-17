
function scuberGreetingForFeet(distance) {
  let greeting;
  if (distance <= 400) {
    greeting = "This one is on me!";
  } else if (distance > 400 && distance <= 2000) {
    greeting = "That will be twenty bucks.";
  } else if (distance > 2000 && distance <=2500) {
    greeting = "I will gladly take your thirty bucks.";
  } else {
    greeting = "No can do.";
  }
  return greeting;   
}
 

function ternaryCheckCity(message) {
  return (message === "NYC" ? "Ok, sounds good." : "No go.")

}

function switchOnCharmFromTip(tipAmount) {
   
  switch (tipAmount) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
          
  }
}

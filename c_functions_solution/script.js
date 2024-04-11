
/* 
  ftnSalutation is a conventional JS function
  it returns an array of strings where each
  element (or index) of the array consists
  of the salutations to pupulate inputSelect
  found in index.html
*/
function ftnSalutation(){
  //  implement your statement(s) here
  return new Array("Mr.", "Mrs.", "Ms.", "Dr.");
}

/* 
  ftnGreeting is written as an ARROW function
  it uses the passed-in parameters to form
  a greeting to be returned to the function that
  calls it
*/
const ftnGreeting = (salutation, user) => {
    //  implement your statement(s) here
    const msg = "Hi " + salutation + " " + user + "! We received your submission.";
    return msg;
}

/*
Complete the challenge statement below
Create the function validateInputs below
Hint: 
- validateInputs accepts two arguments (choice, name)
- name should include a default value name=""
- validateInputs returns false if either choice or name is incorrectly filled
- validateInputs returns true if both choice and name are correctly filled
*/
function validateInputs(choice, name = ""){

  // If the choice is empty OR the name is empty, return to the caller prematurely
  if(choice == "" && name == "")
    return false;

  // If the choice is empty OR the name is empty, return to the caller prematurely
  if(choice == "" || name == "")
  return;

  return true;

  // Older working but longer method:
  // if(choice == "") // Alternative: if(choice.length == 0)
  //   return;

  // if(name == "") // Alternative: if(name.length == 0)
  //   return;

}

// Refactor the function to use a switch statement
// None:    "Thank you. No preference selected."
// Chicken: "The main course served is Chicken Cordon Bleu."
// Beef:    "The main course served is Beef Wellington."
// Others:  "We will contact you separately to arrange."

function ftnRadioMeal(meal){
  document.getElementById("displayPreference").textContent = meal;

  // Using switch statement to provide the appropriate feedback to the user
  switch (meal) { // key is the meal passed-in
    
    case "None":
      document.getElementById("displayPreference").textContent = "No preference selected.";
      break;
    
    case "Beef":
      document.getElementById("displayPreference").textContent = "The main course served is Beef Wellington.";
      break;
    
    case "Chicken":
      document.getElementById("displayPreference").textContent = "The main course served is Chicken Cordon Bleu.";
      break;
    
    default:
      document.getElementById("displayPreference").textContent = "We will contact you separately.";
      break;
  }
}
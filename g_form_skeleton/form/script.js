// 10. element.setAttribute()
// Setting the Attributes of HTML select input

// Create the array to populate selectDom
<<<<<<< HEAD
// Method #1
const arrTopics = new Array("Methods", "Properties", "Event Listeners");

// Method #2
// const arrTopics = ["Methods", "Properties", "Event Listeners"];

// Create the array to store selected values (for submission)
const arrSelected = new Array();

// Declare constant selectDom to refer to <select> of id = "selectTopics"
const selectDom = document.getElementById("selectTopics");

// Set the attributes of selectDom
// selectDom.options[0] = new Option("Please select an option", "");
// selectDom.options[0].setAttribute("disabled", true);
selectDom.setAttribute("multiple", true)

// Populate the options in selectDom
// Method #1: for loop:
// for (let index = 0; index < arrTopics.length; index++) {
//     selectDom.options.add(new Option(arrTopics[index], arrTopics[index]));
    
// }

// Method #2: forEach Method
arrTopics.forEach(topic => {
    selectDom.options.add(new Option(topic, topic));
})

for (let index = 0; index < arrTopics.length; index++) {
    selectDom.options[index].setAttribute("class", "btn btn-primary d-block m-2");
}

// 11. element.getAttribute()
// get the Attributes's value(s) of selected options
selectDom.addEventListener("change", () => {

    const collection = selectDom.selectedOptions;

    const listSelected = document.getElementById("listSelected");
    
    for (let index = 0; index < collection.length; index++) {
    
    // Use getAttribute() to assign the selected option's value to const itemValue
    const itemValue = collection[index].getAttribute("value");

    // const to check if item is already selected
    const found = arrSelected.find(item => item == itemValue);
        
    // If the topic is not selected yet
    if(!found) {

        // append the value to arrSelected
        arrSelected.push(itemValue);

        // append and display the selected option in listSelected
        const listItem = document.createElement("li");
        listItem.style.listStyle = "none";
        const itemText = document.createTextNode(itemValue);
        listItem.appendChild(itemText);
        listSelected.appendChild(listItem);
    }
}
})
=======

// Create the array to store selected values (for submission)

// Declare constant selectDom to refer to <select> of id = "selectTopics"

// Set the attributes of selectDom

// Populate the options in selectDom

// 11. element.getAttribute()
// get the Attributes's value(s) of selected options
>>>>>>> 5968c26f2f0ea33c2e77aaacb318a1b489a22414

// 12. element.addEventListener()
// Adding an event listener to a button

// Clear the selection from listSelected and arrSelected
// Use the splice method to remove all elements in an array

<<<<<<< HEAD
btnClearSelection.addEventListener("click", () => {
    document.getElementById("listSelected").innerHTML = "";
    arrSelected.splice(0, arrSelected.length);
    console.log(arrSelected);
})

// Challenge Statement:

// 1. Change script.js to allow only 1 selected item
=======
>>>>>>> 5968c26f2f0ea33c2e77aaacb318a1b489a22414

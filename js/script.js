function randomNum() {
    return Math.floor(Math.random() * (10 - 1) + 1)
}

let spin = randomNum()



/*----- app's state (variables) -----*/
let matches = 0

// local variable to track number of matches


/*----- cached element references -----*/
const button = document.getElementById('spin-btn')
const cell1 = document.getElementById('cell1')
const cell2 = document.getElementById('cell2')
const cell2 = document.getElementById('cell3')
const message = document.getElementById('message')
const match = document.getElementById('matches')


/*----- event listeners -----*/
button.addEventListener('click', slot)


/*----- functions -----*/



function displayMessage() {
    message.innerHTML
}

function slot() {
    cell1.innerHTML = randomNum()
    cell2.innerHTML = randomNum()

    checkMatch()
}

// function displayMatch() {
//     matches + 1
// }

// displayMatch(matches);




function checkMatch() {
    let val1 = cell1.innerHTML
    let val2 = cell2.innerHTML
    if (val1 === val2) {
        message.innerHTML = "Winner!!"
        matches = matches + 1 
        match.innerHTML = matches
        // match.innerHTML = (matches + 1)
        // Update element in the DOM
        // match.innerHTML = (matches + 1)
    } else {
        message.innerHTML = "Try Again!"
    }


}
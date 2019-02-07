function randomNum() {
    return Math.floor(Math.random() * (8 - 1) + 1)
}

let spin = randomNum()



/*----- app's state (variables) -----*/
let matches = 0
// let gameOver = (matches)
// local variable to track number of matches


/*----- cached element references -----*/
const spinners = document.getElementsByClassName('spinner')
const button = document.getElementById('spin-btn')
const resetBtn = document.getElementById('reset-btn')
const cell1 = document.getElementById('cell1')
const cell2 = document.getElementById('cell2')
const cell3 = document.getElementById('cell3')

const message = document.getElementById('message')
const match = document.getElementById('matches')


/*----- event listeners -----*/
button.addEventListener('click', slot)
resetBtn.addEventListener('click', reset)

/*----- functions -----*/


        function winner() {
            message.style.fontSize = "400%"
            message.style.backgroundColor = "aqua"
            message.style.color = "purple"
            
        }
        function endOfGame() {
            message.style.color = "red"
            message.style.fontSize = "250%"
        }
        
        function tryAgain() {
            message.style.fontSize = "150%"
            message.style.backgroundColor = "grey"
            message.style.color = "white"
        }
        
        function gameOver() {
            message.innerHTML = 'GAME OVER!'
            endOfGame()
            // message.style.background = "red"
            button.disabled = true
        }
        function reset() {
            
            tryAgain()
            cell1.innerHTML = 0
            cell2.innerHTML = 0
            cell3.innerHTML = 0
            message.innerHTML = ''
            match.innerHTML = ''
            button.disabled = false
            matches = 0
            for (let i of spinners) {
                i.style.backgroundColor = "aqua"
                i.style.color = "black"
                i.style.fontWeight = "350"
                i.style.fontSize = "330%"
            }
        }
        
        
        function displayMessage() {
            message.innerHTML
        }
        
        function slot() {
            cell1.innerHTML = randomNum()
            cell2.innerHTML = randomNum()
            cell3.innerHTML = randomNum()
            matches < 15 ? checkMatch() : gameOver()
        }
        
        function checkMatch() {
            let val1 = cell1.innerHTML
            let val2 = cell2.innerHTML
            let val3 = cell3.innerHTML
            if (val1 === val2 && val1 === val3 && val2 === val3) {
                message.innerHTML = "JACKPOT!!"
                winner()
                matches = matches + 3
                match.innerHTML = matches
                
                
                for (let i of spinners) {
                    i.style.backgroundColor = "purple"
                    i.style.color = "white"
                    i.style.fontWeight = "900"
                    i.style.fontSize = "500%"
                }
                
            } else if (val1 === val2 || val1 === val3 || val2 === val3) {
                message.innerHTML = "MATCHED 2"
                matches = matches + 1
                match.innerHTML = matches
                
    } else {
        tryAgain()
        message.innerHTML = "Try Again!"
        for (let i of spinners) {
            i.style.backgroundColor = "aqua"
            i.style.color = "black"
            i.style.fontWeight = "350"
            i.style.fontSize = "330%"

        }
    }


}
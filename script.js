let wonLost = document.getElementById('wonLost')
let wonlostOver = document.getElementById('wonlostOver')
let computeerScore = document.getElementById('computeerScore')
let playerScore = document.getElementById('playerScore')
let gameover = document.getElementById('gameover')
let leftMove = document.getElementById('leftMove')
let hideContainer = document.querySelector('.hideContainer')


let button = document.querySelectorAll('button')


let btnClickCount = 0
button.forEach(Element => {
    Element.addEventListener('click', function(e) {
        let btnValue = Element.value
        checker(btnValue)
        btnClickCount++
        if(btnClickCount == 10){
            btnClickCount = 0
            hideContainer.style.display = 'none'
            gameover.classList.add('active')
        }
        leftMove.innerText = 10 - btnClickCount
        restartBtn.addEventListener('click', Element => {
            btnClickCount = 0
            hideContainer.style.display = 'block'
            gameover.classList.remove('active')
            playerScore.innerText = winCount
            computeerScore.innerText = lostCount
            winCount = 0
            lostCount = 0
            wonLost.innerText = 'Click to Play'
        })
        // console.log(btnClickCount)
    })
})


let winCount = 0
let lostCount = 0
function checker(btnValue){
    let randomNumber = Math.floor(Math.random() * 3)
    if (btnValue == randomNumber) {
        // console.log('win')
        wonLost.innerText = 'You Won'
        winCount++
        playerScore.innerText = winCount
        
    } else {
        // console.log('lost')
        wonLost.innerText = 'Computer Won'
        lostCount++
        computeerScore.innerText = lostCount
    }
    // console.log(winCount)
    // console.log(lostCount)

    if(winCount >= lostCount){
        wonlostOver.innerText = 'Game Over You Won'
    }
    else if(winCount <= lostCount){
        wonlostOver.innerText = 'Game Over You Lost'
    }else if (winCount == lostCount){
        wonlostOver.innerText = 'Game Tie'
    }
}
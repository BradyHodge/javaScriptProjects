let score = 0;
let timeLeft = 10;
let timerInterval;
let gameStarted = false;

function startGame() {
    if (gameStarted) return;

    gameStarted = true;
    score = 0;
    timeLeft = 10;
    document.getElementById('score').textContent = score;
    document.getElementById('timer').textContent = timeLeft;
    timerInterval = setInterval(updateTimer, 1000);
}

function circleClicked(event) {
    if (!gameStarted) {
        startGame();
    }
    score++;
    document.getElementById('score').textContent = score;    
    moveCircle(event);
    
}

function moveCircle(event) {
    if (event) {
        event.stopPropagation();
    }
    const circle = document.querySelector('.circle');
    const x = Math.random() * (400 - 50);
    const y = Math.random() * (400 - 50);
    circle.style.left = x + 'px';
    circle.style.top = y + 'px';
}

function updateTimer() {
    timeLeft--;
    document.getElementById('timer').textContent = timeLeft;
    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        gameStarted = false;
        
        let highScore = localStorage.getItem('highScore');
    if (highScore === null) {
        highScore = 0;
    } else {
        highScore = parseInt(highScore);
    }

    
    if (score > highScore) {
        
        localStorage.setItem('highScore', score);
        alert('New high score! Your score is: ' + score);
    } else {
        alert('Game over! Your score is: ' + score + '. High score: ' + highScore);
    }
    }
}

document.querySelector('.circle').addEventListener('click', circleClicked);

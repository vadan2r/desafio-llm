const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const marioImage = new Image();
marioImage.src = 'assets/mario.png';

const gravity = 0.5;
const jumpStrength = 10;
let isJumping = false;
let marioY = canvas.height / 2;
let marioVelocityY = 0;

const obstacles = [];
const obstacleWidth = 50;
const obstacleHeight = 100;
let frame = 0;

function startGame() {
    document.addEventListener('keydown', handleKeyDown);
    gameLoop();
}

function handleKeyDown(event) {
    if (event.code === 'Space' && !isJumping) {
        isJumping = true;
        marioVelocityY = -jumpStrength;
    }
}

function updateGame() {
    if (isJumping) {
        marioVelocityY += gravity;
        marioY += marioVelocityY;

        if (marioY >= canvas.height / 2) {
            marioY = canvas.height / 2;
            isJumping = false;
        }
    }

    if (frame % 100 === 0) {
        createObstacle();
    }

    updateObstacles();
    detectCollisions();
}

function createObstacle() {
    const obstacleX = canvas.width;
    obstacles.push({ x: obstacleX, y: canvas.height - obstacleHeight, width: obstacleWidth, height: obstacleHeight });
}

function updateObstacles() {
    for (let i = obstacles.length - 1; i >= 0; i--) {
        obstacles[i].x -= 5;

        if (obstacles[i].x + obstacles[i].width < 0) {
            obstacles.splice(i, 1);
        }
    }
}

function detectCollisions() {
    for (const obstacle of obstacles) {
        if (marioY + 50 > obstacle.y && marioY < obstacle.y + obstacle.height && obstacle.x < 100) {
            alert('Game Over!');
            document.location.reload();
        }
    }
}

function drawGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(marioImage, 50, marioY, 50, 50);

    for (const obstacle of obstacles) {
        ctx.fillStyle = 'red';
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    }
}

function gameLoop() {
    updateGame();
    drawGame();
    frame++;
    requestAnimationFrame(gameLoop);
}

window.onload = startGame;
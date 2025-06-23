const canvas = document.getElementById('rouletteCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 600;

let angle = 0;
let speed = 0.05;
let ballRadius = 10;
let ballAngle = 0;
let ballSpeed = 0.1;
let ballBouncing = true;

function drawWheel() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(angle);

    // Draw the wheel
    ctx.fillStyle = '#ffcc00';
    ctx.beginPath();
    ctx.arc(0, 0, 250, 0, Math.PI * 2);
    ctx.fill();

    // Draw the segments
    for (let i = 0; i < 36; i++) {
        ctx.save();
        ctx.rotate((Math.PI * 2) / 36 * i);
        ctx.fillStyle = i % 2 === 0 ? '#ff0000' : '#000000';
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(250, 0);
        ctx.arc(0, 0, 250, 0, (Math.PI * 2) / 36);
        ctx.fill();
        ctx.restore();
    }

    ctx.restore();
}

function drawBall() {
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(ballAngle);
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(0, -240, ballRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
}

function update() {
    angle += speed;
    if (ballBouncing) {
        ballAngle += ballSpeed;
        if (ballAngle > Math.PI * 2) {
            ballAngle = 0;
        }
    }
}

function animate() {
    update();
    drawWheel();
    drawBall();
    requestAnimationFrame(animate);
}

animate();
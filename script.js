const canvas = document.getElementById("snakeCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const snakeHead = new Image();
snakeHead.src = "snakehead.png";

class Snake {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.length = 40 + Math.random() * 60;
    this.angle = Math.random() * Math.PI * 2;
    this.speed = 1 + Math.random() * 1.5;
    this.color = `hsl(${Math.random() * 120}, 100%, 50%)`;
    this.offset = Math.random() * 1000;
    this.body = [];
  }

  update(t) {
    this.angle += Math.sin(t / 1000 + this.offset) * 0.05;
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;

    // Save body positions for trail effect
    this.body.unshift({ x: this.x, y: this.y });
    if (this.body.length > this.length) {
      this.body.pop();
    }

    if (this.x < 0 || this.x > canvas.width) this.angle += Math.PI;
    if (this.y < 0 || this.y > canvas.height) this.angle += Math.PI;
  }

  draw(t) {
    ctx.beginPath();
    for (let i = 0; i < this.body.length; i++) {
      const p = this.body[i];
      const wobble = Math.sin(i + t / 500 + this.offset) * 5;
      const dx = p.x + wobble;
      const dy = p.y + wobble;
      if (i === 0) ctx.moveTo(dx, dy);
      else ctx.lineTo(dx, dy);
    }
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw head image at current position
    if (snakeHead.complete) {
      ctx.drawImage(snakeHead, this.x - 16, this.y - 16, 32, 32);
    }
  }
}

const snakes = [];
for (let i = 0; i < 20; i++) {
  snakes.push(new Snake());
}

function animate(t) {
  ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (const snake of snakes) {
    snake.update(t);
    snake.draw(t);
  }

  requestAnimationFrame(animate);
}

animate(0);

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

ctx.imageSmoothingEnabled = false;

const SPRITE_WIDTH = 128;
const SPRITE_HEIGHT = 128;
const SCALE = 1.5;
const SPEED = 2;

const WALK_FRAMES = [0, 1, 2, 3];

let x = 200;
let y = 200;
let direction = 0; // 0 = bas, 1 = haut, 2 = gauche, 3 = droite
let step = 0;
let moving = false;

let frameTimer = 0;
const FRAME_LIMIT = 8;

const keys = {};

// Capture des touches de direction
window.addEventListener("keydown", e => keys[e.key] = true);
window.addEventListener("keyup", e => keys[e.key] = false);

const sprite = new Image();
sprite.src = "img/sprite.png";

const bg = new Image();
bg.src = "img/pelouse.png";

let bgPattern;
bg.onload = () => bgPattern = ctx.createPattern(bg, "repeat");

// Compensation par direction (à ajuster si nécessaire)
const offsetX = [0, 0, 5, -5];  // bas, haut, gauche, droite
const offsetY = [0, 0, 0, 0];   // ici pas de décalage vertical

// Calcul des limites du canvas
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

function update() {
  moving = false;

  if (keys.ArrowDown) {
    if (y + SPRITE_HEIGHT * SCALE + SPEED <= canvasHeight) {  // Vérifie si le bas du sprite dépasse le canvas
      y += SPEED;
      direction = 0;
      moving = true;
    }
  }
  if (keys.ArrowUp) {
    if (y - SPEED >= 0) {  // Vérifie si le haut du sprite dépasse le canvas
      y -= SPEED;
      direction = 1;
      moving = true;
    }
  }
  if (keys.ArrowLeft) {
    if (x - SPEED >= 0) {  // Vérifie si le sprite dépasse le bord gauche
      x -= SPEED;
      direction = 2;
      moving = true;
    }
  }
  if (keys.ArrowRight) {
    if (x + SPRITE_WIDTH * SCALE + SPEED <= canvasWidth) {  // Vérifie si le sprite dépasse le bord droit
      x += SPEED;
      direction = 3;
      moving = true;
    }
  }

  if (moving) {
    frameTimer++;
    if (frameTimer >= FRAME_LIMIT) {
      step = (step + 1) % WALK_FRAMES.length;
      frameTimer = 0;
    }
  } else {
    step = 0;
    frameTimer = 0;
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (bgPattern) {
    ctx.fillStyle = bgPattern;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  const frameX = WALK_FRAMES[step];

  ctx.drawImage(
    sprite,
    frameX * SPRITE_WIDTH,
    direction * SPRITE_HEIGHT,
    SPRITE_WIDTH,
    SPRITE_HEIGHT,
    x + offsetX[direction],
    y + offsetY[direction],
    SPRITE_WIDTH * SCALE,
    SPRITE_HEIGHT * SCALE
  );
}

function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}

sprite.onload = loop;

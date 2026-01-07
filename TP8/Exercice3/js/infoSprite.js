
const infoSprite = {
    0:{
        x:0,
        y:0,
        w:136,
        h:145,
    },
    1:{
        x:140,
        y:0,
        w:192,
        h:145,
    },
    2:{
        x:336,
        y:0,
        w:328,
        h:145,
    },
    3:{
        x:668,
        y:0,
        w:332,
        h:145,
    },
    4:{
        x:0,
        y:148,
        w:332,
        h:144,
    },
    5:{
        x:335,
        y:148,
        w:329,
        h:144,
    },
    6:{
        x:668,
        y:148,
        w:332,
        h:144,
    },
    7:{
        x:0,
        y:296,
        w:332,
        h:144,
    },
    8:{
        x:336,
        y:296,
        w:328,
        h:144,
    },
    9:{
        x:668,
        y:296,
        w:332,
        h:144,
    },
    10:{
        x:0,
        y:442,
        w:332,
        h:144,
    },
    11:{
        x:335,
        y:442,
        w:329,
        h:144,
    },
    12:{
        x:668,
        y:442,
        w:332,
        h:144,
    }
}



// === Code principal de l'animation ===
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const spriteImg = new Image();
    spriteImg.src = 'img/goutte.png';  // ← Change ici si ton image s'appelle autrement !

    let currentAnimation = null;  // Une seule goutte à la fois

    class RippleAnimation {
      constructor(clickX, clickY) {
        this.x = clickX;
        this.y = clickY;
        this.frame = 0;
        this.frameTimer = 0;
        this.frameDelay = 4;  // Vitesse : baisse à 3 pour plus rapide, monte à 6 pour plus lent
      }

      update() {
        this.frameTimer++;
        if (this.frameTimer >= this.frameDelay) {
          this.frameTimer = 0;
          this.frame++;
        }
        return this.frame <= 12;  // Animation finit à la frame 12
      }

      draw() {
        if (this.frame > 12) return;

        const info = infoSprite[this.frame];
        if (!info) return;

        // Centrage parfait sur le point de clic
        const drawX = this.x - info.w / 2;
        const drawY = this.y - info.h / 2;

        ctx.drawImage(
          spriteImg,
          info.x, info.y,
          info.w, info.h,
          drawX, drawY,
          info.w, info.h
        );
      }
    }

    function gameLoop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (currentAnimation) {
        const stillActive = currentAnimation.update();
        currentAnimation.draw();

        if (!stillActive) {
          currentAnimation = null;  // Animation terminée → on libère
        }
      }

      requestAnimationFrame(gameLoop);
    }

    // Clic → nouvelle animation (remplace l'ancienne)
    canvas.addEventListener('click', (e) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      currentAnimation = new RippleAnimation(clickX, clickY);
    });

    // Démarrage quand l'image est chargée
    spriteImg.onload = () => {
      console.log("Image de la goutte chargée avec succès !");
      requestAnimationFrame(gameLoop);
    };

    spriteImg.onerror = () => {
      console.error("Erreur : impossible de charger l'image 'goutte.png'. Vérifie le nom et le chemin.");
    };
  

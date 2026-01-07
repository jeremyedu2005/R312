const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');

        // États initiaux
        let x = 50;
        let y = 50;
        let width = 50;
        let height = 50;
        let colors = ['yellow', 'red', 'blue', 'green'];
        let colorIndex = 0; // commence par jaune
        let isFilled = true; // plein au début
        let isVisible = true;

        function drawRectangle() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            if (!isVisible) return; // rien à dessiner si invisible

            ctx.fillStyle = colors[colorIndex];
            ctx.strokeStyle = colors[colorIndex];
            ctx.lineWidth = 3;

            if (isFilled) {
                ctx.fillRect(x, y, width, height);
            } else {
                ctx.strokeRect(x, y, width, height);
            }
        }

        // Dessin initial
        drawRectangle();

        // Bouton Largeur
        document.getElementById('largeur').addEventListener('click', () => {
            width += 10;
            if (width > 200) {
                width = 10;
            }
            drawRectangle();
        });

        // Bouton Hauteur
        document.getElementById('hauteur').addEventListener('click', () => {
            height += 10;
            if (height > 200) {
                height = 10;
            }
            drawRectangle();
        });

        // Bouton Couleur
        document.getElementById('couleur').addEventListener('click', () => {
            colorIndex = (colorIndex + 1) % colors.length;
            drawRectangle();
        });

        // Bouton Style (plein ↔ contour)
        document.getElementById('style').addEventListener('click', () => {
            isFilled = !isFilled;
            drawRectangle();
        });

        // Bouton Visibilité
        document.getElementById('visibilite').addEventListener('click', () => {
            isVisible = !isVisible;
            drawRectangle();
        });
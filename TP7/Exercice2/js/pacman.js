const ctx = document.getElementById('canvas').getContext('2d');
        // Corps jaune
        ctx.beginPath();
        ctx.arc(100, 100, 80, 0.2 * Math.PI, 1.8 * Math.PI);
        ctx.lineTo(115, 100);
        ctx.fillStyle = 'yellow';
        ctx.fill();
        // Oeil
        ctx.beginPath();
        ctx.arc(120, 70, 10, 0, 2 * Math.PI);
        ctx.fillStyle = 'black';
        ctx.fill();
        // Point blanc
        ctx.beginPath();
        ctx.arc(190, 100, 10, 0, 2 * Math.PI);
        ctx.fillStyle = 'white';
        ctx.fill();

        // Deuxième point blanc (ajouté)
        ctx.beginPath();
        ctx.arc(150, 100, 10, 0, 2 * Math.PI); // Deuxième point blanc
        ctx.fillStyle = 'white';
        ctx.fill();


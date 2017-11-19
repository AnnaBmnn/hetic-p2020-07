let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");
var coords = {x: 0, y: 200, x_2: 0, y_2: 200, x_3: 0, y_3: 200};
var direct = {ball1: 1, ball2: 1, ball3: -1};

context.canvas.width = document.getElementById("yellow").clientWidth;
context.canvas.height = document.getElementById("yellow").clientHeight;

// Créé la variable image
let image = new Image();

image.src = "/img/balle_de_tennis.png";
function loop() {
    window.requestAnimationFrame(loop);
    // Mise à jour des coordonnées
    coords.x += 2 * direct.ball1;
    coords.x_2 += 4 * direct.ball2;
    coords.x_3 += 3 * direct.ball3;
    coords.y = (canvas.height - (80 * window.devicePixelRatio)) - Math.abs(Math.cos(+new Date() / 300)) * 300;
    coords.y_2 = (canvas.height - (80 * window.devicePixelRatio)) - Math.abs(Math.cos(+new Date() / 500)) * 200;
    coords.y_3 = (canvas.height - (80 * window.devicePixelRatio)) - Math.abs(Math.cos(+new Date() / 400)) * 300;
    context.clearRect(0, 0, canvas.width, canvas.height);
    // Limite
    if ((coords.x > canvas.width - (80) && direct.ball1 === 1) || (coords.x < 0 && direct.ball1 === -1)) {
        direct.ball1 *= -1;
    }
    // Limite
    if ((coords.x_2 > canvas.width - (80) && direct.ball2 === 1) || (coords.x_2 < 0 && direct.ball2 === -1)) {
        direct.ball2 *= -1;
    }

    if ((coords.x_3 > canvas.width - (80) && direct.ball3 === 1) || (coords.x_3 < 0 && direct.ball3 === -1)) {
        direct.ball3 *= -1;
    }

    // Dessin de la balle
    context.drawImage(image, coords.x, coords.y, 90, 80);
    context.drawImage(image, coords.x_2, coords.y_2, 90, 80);
    context.drawImage(image, coords.x_3, coords.y_3, 90, 80);

}

window.requestAnimationFrame(loop);
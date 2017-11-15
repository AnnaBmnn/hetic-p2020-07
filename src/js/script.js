let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");
var coords = {x: 0, y: 200, x_2: 0, y_2: 200 , x_3: 0, y_3: 200};

context.canvas.width = document.body.clientWidth;
context.canvas.heigth = document.body.clientHeigth;
// Créé la variable image
let image = new Image();

image.src = "/img/balle_de_tennis.png";

function loop()
{
    window.requestAnimationFrame(loop);
    // Mise à jour des coordonnées
    coords.x += 2;
    coords.x_2 += 4;
    coords.x_3 -= 3;
    coords.y = (canvas.height - 114) - Math.abs(Math.cos(+new Date() / 300)) * 500;
    coords.y_2 = (canvas.height - 114) - Math.abs(Math.cos(+new Date() / 500)) * 200;
    coords.y_3 = (canvas.height - 114) - Math.abs(Math.cos(+new Date() / 400)) * 300;
    context.clearRect(0, 0, canvas.width, canvas.height);
    // Limite
    if (coords.x > canvas.width + 50) {
        coords.x = -50;
    }
    // Limite
    if (coords.x_2 > canvas.width + 50) {
        coords.x_2 = -50;
    }

    if (coords.x_3 < -50) {
        coords.x_3 = canvas.width + 50;
    }

    // Dessin de la balle
    context.drawImage(image, coords.x, coords.y, 90, 80);
    context.drawImage(image, coords.x_2 - 100, coords.y_2, 90, 80);
    context.drawImage(image, coords.x_3 - 100, coords.y_3, 90, 80);

}

window.requestAnimationFrame(loop);
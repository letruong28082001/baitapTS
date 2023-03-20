var listImages = [
    'img1.jpg',
    'img2.jpg',
    'img3.jpg',
    'img4.jpg',
    'img5.jpg',
    'img6.jpg',
    'img7.jpg',
    'img8.jpg',
    'img9.jpg',
    'img10.jpg',
];
var startClick = document.querySelector('#start');
var stopClick = document.querySelector('#stop');
var loopRandom;
var runValRandom;
var randomListImages;
function randomLoop() {
    return Math.floor(Math.random() * listImages.length);
}
;
if (startClick) {
    startClick.onclick = function (e) {
        startClick.disabled = true;
        runValRandom = setInterval(function () {
            var Images = document.querySelector('.images');
            randomListImages = randomLoop();
            while (loopRandom === randomListImages) {
                randomListImages = randomLoop();
            }
            loopRandom = randomListImages;
            Images && (Images.src = './images/' + listImages[randomListImages] + '');
            return Images;
        }, 500);
    };
}
if (stopClick) {
    stopClick.onclick = function () {
        if (startClick) {
            startClick.removeAttribute('disabled');
            clearInterval(runValRandom);
        }
    };
}

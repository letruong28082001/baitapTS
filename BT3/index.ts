const listImages: string[] = [
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
const startClick = document.querySelector<HTMLInputElement>('#start');
const stopClick = document.querySelector<HTMLInputElement>('#stop');
let loopRandom: number;
let runValRandom: number;
let randomListImages: number;
function randomLoop() {
    return Math.floor(Math.random() * listImages.length);
};
if (startClick) {
    startClick.onclick = function (e: MouseEvent) {
        startClick.disabled = true;
        runValRandom = setInterval(function () {
            const Images = document.querySelector<HTMLImageElement>('.images');
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
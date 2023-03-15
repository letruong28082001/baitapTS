const inputContent: HTMLInputElement | null = document.querySelector('#inputContent');
const outputContent: HTMLDivElement | null = document.querySelector('.output');
const italicText: HTMLInputElement | null = document.querySelector('#italic');
const boldText: HTMLInputElement | null = document.querySelector('#bold');
const underlineText: HTMLInputElement | null = document.querySelector('#underline');
const bgColor: HTMLInputElement | null = document.querySelector('#backgroundColor');
const textColor: HTMLInputElement | null = document.querySelector('#textColor');

if (inputContent && outputContent) {
    inputContent.onkeyup = (event: KeyboardEvent) => {
        outputContent.textContent = (event.target as HTMLInputElement).value;
    }
}

function handleType(fontType: string, type: string): void {
    if (outputContent) {
        if (outputContent.style[fontType] === type) {
            outputContent.style[fontType] = 'unset';
        }
        else {
            outputContent.style[fontType] = type;
        }
    }
};

if (italicText) {
    italicText.onclick = () => {
        handleType('fontStyle', 'italic');
    }
}
if (boldText) {
    boldText.addEventListener('click', function () {
        handleType('fontWeight', 'bold');
    });
}
if (underlineText) {
    underlineText.addEventListener('click', function () {
        handleType('textDecoration', 'underline');
    })
}
if (textColor && outputContent) {
    textColor.oninput = function (e) {
        outputContent.style.color = (e.target as HTMLInputElement).value;
    };
}
if (bgColor && outputContent) {
    bgColor.oninput = function (e) {
        outputContent.style.background = (e.target as HTMLInputElement).value;
    };
}





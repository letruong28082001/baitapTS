const btnBoldTextLeft: HTMLInputElement | null = document.querySelector('.buttonBoldTextLeft');
const btnBoldTextRight: HTMLInputElement | null = document.querySelector('.buttonBoldTextRight');
const btnResetLeft: HTMLInputElement | null = document.querySelector('.resetLeft');
const btnResetRight: HTMLInputElement | null = document.querySelector('.resetRight');
const btnItalicTextLeft: HTMLInputElement | null = document.querySelector('.buttonItalicTextLeft');
const btnItalicTextRight: HTMLInputElement | null = document.querySelector('.buttonItalicTextRight');
const inputLeft: HTMLInputElement | null = document.querySelector('#input_left');
const inputRight: HTMLInputElement | null = document.querySelector('#input_right');
const btnSendLeft: HTMLButtonElement | null = document.querySelector('#btn_send_left');
const btnSendRight: HTMLButtonElement | null = document.querySelector('#btn_send_right');
const outputLeft: HTMLOutputElement | null = document.querySelector('.output_left');
const outputRight: HTMLOutputElement | null = document.querySelector('.output_right');

function convertBoldText(e): void {
    if (inputLeft || inputRight) {
        if (e.style.fontWeight === 'bold') {
            e.style.fontWeight = 'normal';
        } else {
            e.style.fontWeight = 'bold';
        }
    }
};

function convertItalicText(e): void {
    if (inputLeft || inputRight) {
        if (e.style.fontStyle === 'italic') {
            e.style.fontStyle = 'normal';
        } else {
            e.style.fontStyle = 'italic';
        }
    }
};

if (btnBoldTextLeft) {
    btnBoldTextLeft.onclick = (): void => {
        convertBoldText(inputLeft);
    };
}
if (btnBoldTextRight) {
    btnBoldTextRight.onclick = (): void => {
        convertBoldText(inputRight);
    };
}
if (btnItalicTextLeft) {
    btnItalicTextLeft.onclick = (): void => {
        convertItalicText(inputLeft);
    };
}
if (btnItalicTextRight) {
    btnItalicTextRight.onclick = (): void => {
        convertItalicText(inputRight);
    };
}
let left: string[] = [];
let right: string[] = [];
function sendHandle(e, from, to) {
    if (e.value !== '' && outputLeft && outputRight) {
        const style = e.getAttribute('style');
        left = [...left, `<p class='content_output-${from} ${to}' style ='${style}'>${e.value}</p>`];
        right = [...right, `<p class='content_output-${to} ${from}' style ='${style}'>${e.value}</p>`];
        outputLeft.innerHTML = left.join('');
        outputRight.innerHTML = right.join('');
    }
    e.value = '';
}


if (btnSendLeft) {
    btnSendLeft.onclick = (e) => {
        e.preventDefault();
        sendHandle(inputLeft, 'left', 'right');
    };
}
if (btnSendRight) {
    btnSendRight.onclick = (e) => {
        e.preventDefault();
        sendHandle(inputRight, 'right', 'left');
    };
}
if (btnResetLeft && outputLeft) {
    btnResetLeft.onclick = () => {
        outputLeft.innerHTML = '';
        left = [];
    };
}
if (btnResetRight && outputRight) {
    btnResetRight.onclick = () => {
        outputRight.innerHTML = '';
        right = [];
    };
}
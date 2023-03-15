var inputContent = document.querySelector('#inputContent');
var outputContent = document.querySelector('.output');
var italicText = document.querySelector('#italic');
var boldText = document.querySelector('#bold');
var underlineText = document.querySelector('#underline');
var bgColor = document.querySelector('#backgroundColor');
var textColor = document.querySelector('#textColor');
if (inputContent && outputContent) {
    inputContent.onkeyup = function (event) {
        outputContent.textContent = event.target.value;
    };
}
function handleType(fontType, type) {
    if (outputContent) {
        if (outputContent.style[fontType] === type) {
            outputContent.style[fontType] = 'unset';
        }
        else {
            outputContent.style[fontType] = type;
        }
    }
}
;
if (italicText) {
    italicText.onclick = function (event) {
        handleType('fontStyle', 'italic');
    };
}
if (boldText) {
    boldText.addEventListener('click', function () {
        handleType('fontWeight', 'bold');
    });
}
if (underlineText) {
    underlineText.addEventListener('click', function () {
        handleType('textDecoration', 'underline');
    });
}
if (textColor && outputContent) {
    textColor.oninput = function (e) {
        outputContent.style.color = e.target.value;
    };
}
if (bgColor && outputContent) {
    bgColor.oninput = function (e) {
        outputContent.style.background = e.target.value;
    };
}

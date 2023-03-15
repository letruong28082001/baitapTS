var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var btnBoldTextLeft = document.querySelector('.buttonBoldTextLeft');
var btnBoldTextRight = document.querySelector('.buttonBoldTextRight');
var btnResetLeft = document.querySelector('.resetLeft');
var btnResetRight = document.querySelector('.resetRight');
var btnItalicTextLeft = document.querySelector('.buttonItalicTextLeft');
var btnItalicTextRight = document.querySelector('.buttonItalicTextRight');
var inputLeft = document.querySelector('#input_left');
var inputRight = document.querySelector('#input_right');
var btnSendLeft = document.querySelector('#btn_send_left');
var btnSendRight = document.querySelector('#btn_send_right');
var outputLeft = document.querySelector('.output_left');
var outputRight = document.querySelector('.output_right');
function convertBoldText(e) {
    if (inputLeft || inputRight) {
        if (e.style.fontWeight === 'bold') {
            e.style.fontWeight = 'normal';
        }
        else {
            e.style.fontWeight = 'bold';
        }
    }
}
;
function convertItalicText(e) {
    if (inputLeft || inputRight) {
        if (e.style.fontStyle === 'italic') {
            e.style.fontStyle = 'normal';
        }
        else {
            e.style.fontStyle = 'italic';
        }
    }
}
;
if (btnBoldTextLeft) {
    btnBoldTextLeft.onclick = function () {
        convertBoldText(inputLeft);
    };
}
if (btnBoldTextRight) {
    btnBoldTextRight.onclick = function () {
        convertBoldText(inputRight);
    };
}
if (btnItalicTextLeft) {
    btnItalicTextLeft.onclick = function () {
        convertItalicText(inputLeft);
    };
}
if (btnItalicTextRight) {
    btnItalicTextRight.onclick = function () {
        convertItalicText(inputRight);
    };
}
var left = [];
var right = [];
function sendHandle(e, from, to) {
    if (e.value !== '' && outputLeft && outputRight) {
        var style = e.getAttribute('style');
        left = __spreadArray(__spreadArray([], left, true), ["<p class='content_output-".concat(from, " ").concat(to, "' style ='").concat(style, "'>").concat(e.value, "</p>")], false);
        right = __spreadArray(__spreadArray([], right, true), ["<p class='content_output-".concat(to, " ").concat(from, "' style ='").concat(style, "'>").concat(e.value, "</p>")], false);
        outputLeft.innerHTML = left.join('');
        outputRight.innerHTML = right.join('');
    }
    e.value = '';
}
if (btnSendLeft) {
    btnSendLeft.onclick = function (e) {
        e.preventDefault();
        sendHandle(inputLeft, 'left', 'right');
    };
}
if (btnSendRight) {
    btnSendRight.onclick = function (e) {
        e.preventDefault();
        sendHandle(inputRight, 'right', 'left');
    };
}
if (btnResetLeft && outputLeft) {
    btnResetLeft.onclick = function () {
        outputLeft.innerHTML = '';
        left = [];
    };
}
if (btnResetRight && outputRight) {
    btnResetRight.onclick = function () {
        outputRight.innerHTML = '';
        right = [];
    };
}

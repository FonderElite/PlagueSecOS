function restapi() {
    return fetch('https://api.github.com/users/plaguesec')
        .then(function (res) { return res.json(); })
        .then(function (res) {
        return res;
    });
}
var reponame = document.getElementById('');
var totalrepos = document.getElementById('');
console.log(restapi());
/*Testing Github's rest api*/
document.addEventListener('DOMContentLoaded', function (event) {
    // array with texts to type in typewriter
    var dataText = ["We bring diseases to your system.", "We are Plague-Sec.", "We are just people who love hacking.", "Be one with Plague-Sec and wreak havoc the system."];
    // type one text in the typwriter
    // keeps calling itself until the text is finished
    var typeWriter = function (text, i, fnCallback) {
        // chekc if text isn't finished yet
        if (i < (text.length)) {
            // add next character to h1
            document.getElementById("typep").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true">|</span>';
            // wait for a while and call this function again for next character
            setTimeout(function () {
                typeWriter(text, i + 1, fnCallback);
            }, 100);
        }
        // text finished, call callback if there is a callback function
        else if (typeof fnCallback == 'function') {
            // call callback after timeout
            setTimeout(fnCallback, 700);
        }
    };
    // start a typewriter animation for a text in the dataText array
    var StartTextAnimation = function (i) {
        if (typeof dataText[i] == 'undefined') {
            setTimeout(function () {
                StartTextAnimation(0);
            }, 20000);
        }
        // check if dataText[i] exists
        if (i < dataText[i].length) {
            // text exists! start typewriter animation
            typeWriter(dataText[i], 0, function () {
                // after callback (and whole text has been animated), start next text
                StartTextAnimation(i + 1);
            });
        }
    };
    // start the text animation
    StartTextAnimation(0);
});

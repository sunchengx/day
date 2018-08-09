var body = document.querySelector("body");

function Require(arr, fn) {
    arr.forEach(function(v, i) {
        var scr = document.createElement("script");
        scr.setAttribute("src", v);
        body.appendChild(scr);
    });
}

function Define(arr, fn) {
    return function arr() {
        fn
    }
}
Require(["./js/a.js", "./js/b.js"])
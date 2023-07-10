const cookie = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");

cookie.onclick = function() {
    let clicks = clickerCounter.textContent++;
    if (clicks % 2 == 0) {
        cookie.width = 200;
    } else {
        cookie.width = 300;
    }
}
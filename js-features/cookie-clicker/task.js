const cookie = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");

cookie.addEventListener("mousedown", function() {
    cookie.style.width = "150px";
});

cookie.addEventListener("mouseup", function() {
    cookie.style.width = "200px";
});

cookie.addEventListener("click", function() {
    clickerCounter.textContent++;
});




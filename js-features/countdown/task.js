const timer = document.getElementById("timer");

function updateTimer() {
    if (timer.textContent === '0') {
        clearInterval(idInterval);
        return alert("Вы победили в конкурсе!");
    }

    timer.textContent--;
}

const idInterval = setInterval(updateTimer, 1000);

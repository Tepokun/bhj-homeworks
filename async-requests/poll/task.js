const title = document.getElementById('poll__title');
const answersList = document.getElementById('poll__answers');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.addEventListener('readystatechange', show);
xhr.send();

function show(event) {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const data = JSON.parse(xhr.responseText).data;
        title.innerText = data.title;

        for (const answer of data.answers) {
            const btn = document.createElement('button');
            btn.className = 'poll__answer';
            btn.textContent = answer;
            btn.addEventListener('click', () => alert('Спасибо, ваш голос засчитан!'));
            answersList.appendChild(btn);
        }
    }
}

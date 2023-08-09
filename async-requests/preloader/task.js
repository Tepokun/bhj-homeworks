const loader = document.getElementById('loader');
const list = document.getElementById('items');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.addEventListener('readystatechange', show);
xhr.send();

function show(event) {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            loader.classList.remove('loader_active');
            const data = JSON.parse(xhr.responseText).response.Valute;

            for (const valute in data) {
                const item = `
                    <div class="item">
                        <div class="item__code">${data[valute].CharCode}</div>
                        <div class="item__value">${data[valute].Value}</div>
                        <div class="item__currency">руб.</div>
                    </div>`;
                list.insertAdjacentHTML('beforeend', item);
            }
        } else {
            console.error('Произошла ошибка при выполнении запроса:', xhr.statusText);
            list.innerHTML = '<div class="error">Ошибка загрузки данных</div>';
        }
    }
}


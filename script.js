function showMessage(message) {
    console.log(message);
}

function logCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    console.log(`${hours}:${minutes}:${seconds}`);
}

function resetBackgroundColor() {
    document.body.style.backgroundColor = 'white';
    showMessage('Цвет фона сброшен на белый');
}

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
    showMessage(`Цвет фона изменен на: ${color}`);
}

function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) {
        if (element.classList.contains('d-none')) {
            element.classList.remove('d-none');
            showMessage(`Элемент ${selector} показан`);
        } else {
            element.classList.add('d-none');
            showMessage(`Элемент ${selector} скрыт`);
        }
    }
}

function handleUtmTerm() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmTerm = urlParams.get('utm_term');
    const h1Element = document.querySelector('.col-md-9 h1.mb-4');

    if (utmTerm && h1Element) {
        h1Element.textContent = decodeURIComponent(utmTerm);
        showMessage(`Заголовок изменен на: ${utmTerm}`);
    }
}

function setupHeaderEvents() {
    const h1Element = document.querySelector('.col-md-9 h1.mb-4');
    if (h1Element) {
        h1Element.addEventListener('click', () => {
            alert('Вы кликнули на заголовок - так держать!');
            showMessage('Клик по заголовку');
        });

        h1Element.addEventListener('mouseover', () => {
            showMessage('Наведение на заголовок');
        });

        h1Element.addEventListener('mouseout', () => {
            showMessage('Курсор убран с заголовка');
        });
    }
}

function setupPracticeButton() {
    const practicesTable = document.querySelector('#practices .table-responsive table');
    if (!practicesTable) {
        return;
    }

    const button = document.createElement('button');
    button.textContent = 'Посмотреть практики второго семестра';
    button.className = 'btn btn-primary mb-3 me-2';

    const secondTermTopics = [
        "Базовое бэкенд-приложение",
        "HTTP-запросы",
        "JSON и работа с ним",
        "HTTP-ответы",
        "Проектирование API",
        "Роутинг и его настройка",
        "NoSQL базы данных",
        "Обеспечение авторизации и доступа пользователей",
        "Работа сторонних сервисов уведомления и авторизации",
        "Основы ReactJS",
        "Работа с компонентами динамической DOM",
        "Использование хуков в React",
        "Основы микросервисной архитектуры",
        "Разработка классических модулей веб-приложений",
        "Разработка классических модулей веб-приложений"
    ];

    button.addEventListener('click', () => {
        const tbody = practicesTable.querySelector('tbody');
        if (tbody) {
            tbody.innerHTML = secondTermTopics.map((topic, index) => `
                <tr>
                    <td>${index + 1}</td>
                    <td>${topic}</td>
                    <td>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="attendance${index + 1}">
                        </div>
                    </td>
                    <td>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="completion${index + 1}">
                        </div>
                    </td>
                </tr>
            `).join('');
            showMessage('Темы второго семестра загружены');
        }
    });

    const tableResponsive = document.querySelector('#practices .table-responsive');
    if (tableResponsive) {
        tableResponsive.parentNode.insertBefore(button, tableResponsive);
        showMessage('Кнопка смены тем добавлена');
    }
}

function setupPhotoEvents() {
    const studentPhoto = document.querySelector('.col-md-9 img.rounded-circle');

    if (studentPhoto) {
        studentPhoto.addEventListener('mouseover', () => {
            studentPhoto.style.transform = 'rotate(360deg)';
            showMessage('Фото начало вращение');
        });

        studentPhoto.addEventListener('mouseout', () => {
            studentPhoto.style.transform = 'rotate(0deg)';
            showMessage('Фото вернулось в исходное положение');
        });

        studentPhoto.addEventListener('click', (e) => {
            e.stopPropagation();
            studentPhoto.src = 'src/img/teacher.jpg';
            showMessage('Фото заменено на фото преподавателя');
        });

        studentPhoto.addEventListener('dblclick', (e) => {
            e.stopPropagation();
            e.preventDefault();
            alert('Не налегай, у меня не так много любимых преподавателей');
            showMessage('Двойной клик по фото');
        });
    }
}

function setupParagraphAnimation() {
    const paragraph = document.querySelector('.col-md-9 p');
    if (paragraph) {
        paragraph.classList.add('animated-paragraph');

        paragraph.addEventListener('click', () => {
            paragraph.classList.toggle('highlighted');
            showMessage('Цвет параграфа изменен');
        });
    }
}

function setupLecturesButton() {
    const lecturesSection = document.querySelector('#lectures');
    if (!lecturesSection) {
        return;
    }

    const button = document.createElement('button');
    button.textContent = 'Показать лекции';
    button.className = 'btn btn-success mb-3';

    const lecturesTable = lecturesSection.querySelector('.table-responsive table');
    if (lecturesTable) {
        lecturesTable.style.display = 'none';
        lecturesTable.classList.add('lectures-table');

        button.addEventListener('click', () => {
            const isHidden = lecturesTable.style.display === 'none';
            if (isHidden) {
                lecturesTable.style.display = 'table';
                setTimeout(() => {
                    lecturesTable.classList.add('visible');
                }, 10);
                button.textContent = 'Скрыть лекции';
            } else {
                lecturesTable.classList.remove('visible');
                setTimeout(() => {
                    lecturesTable.style.display = 'none';
                }, 500);
                button.textContent = 'Показать лекции';
            }
            showMessage(`Таблица лекций ${isHidden ? 'показана' : 'скрыта'}`);
        });

        const tableResponsive = lecturesSection.querySelector('.table-responsive');
        lecturesSection.insertBefore(button, tableResponsive);
    }
}

function setupFormAnimation() {
    const form = document.querySelector('form');
    if (!form) {
        return;
    }

    const messageDiv = document.createElement('div');
    messageDiv.className = 'form-message mt-3';
    messageDiv.textContent = 'Форма отправлена!';
    form.appendChild(messageDiv);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        messageDiv.classList.add('visible');
        showMessage('Форма отправлена');

        setTimeout(() => {
            messageDiv.classList.remove('visible');
        }, 3000);

        form.reset();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setupHeaderEvents();
    setupPracticeButton();
    setupPhotoEvents();
    setupParagraphAnimation();
    setupLecturesButton();
    setupFormAnimation();
    showMessage('Все обработчики событий установлены');
});

// Примеры вызова функций в консоли браузера:
// showMessage("Тестовое сообщение");
// logCurrentTime();
// resetBackgroundColor();
// changeBackgroundColor('red');
// toggleVisibility('.content');
// handleUtmTerm();

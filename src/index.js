function openModal(serviceType) {
    var myModal = new bootstrap.Modal(document.getElementById('modal'));
    document.getElementById("serviceType").value = serviceType;
    myModal.show();
}

function closeModal() {
    var myModal = bootstrap.Modal.getInstance(document.getElementById('modal'));
    myModal.hide();
    document.getElementById('error-messages').innerHTML = '';
    document.getElementById('service-form').reset();
}

// Функция для проверки формы перед отправкой
function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var country = document.getElementById('country').value;

    var errors = [];

    // Проверяем каждое поле
    if (name === '') {
        errors.push('Пожалуйста, введите ваше имя.');
    }

    if (email === '') {
        errors.push('Пожалуйста, введите ваш email.');
    }

    if (phone === '') {
        errors.push('Пожалуйста, введите ваш номер телефона.');
    }

    if (country === '') {
        errors.push('Пожалуйста, выберите страну.');
    }

    // Если есть ошибки, показываем их
    if (errors.length > 0) {
        var errorContainer = document.getElementById('error-messages');
        errorContainer.innerHTML = errors.join('<br>');
        return false;
    } else {
        window.location.href = 'form.html';
        return false;
    }
}


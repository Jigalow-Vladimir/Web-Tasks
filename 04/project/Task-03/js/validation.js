document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  const nameInput = form.querySelector('input[name="name"]');
  const ageInput = form.querySelector('input[name="age"]');
  const emailInput = form.querySelector('input[name="email"]');
  const websiteInput = form.querySelector('input[name="website"]');
  const messageInput = form.querySelector('textarea[name="message"]');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // зупинити відправку

    let valid = true;
    clearErrors();

    // Name
    const nameValue = nameInput.value.trim();
    if (!/^[A-Za-zА-Яа-яЇїІіЄєҐґ'’ -]{2,30}$/.test(nameValue)) {
      showError(nameInput, '*Ім’я має містити 2-30 символів: літери, пробіли, дефіс.');
      valid = false;
    }

    // Age
    const ageValue = parseInt(ageInput.value, 10);
    if (isNaN(ageValue) || ageValue < 18 || ageValue > 130) {
      showError(ageInput, '*Вік повинен бути в межах 18-130.');
      valid = false;
    }

    // Email
    const emailValue = emailInput.value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
      showError(emailInput, '*Некоректна електронна адреса.');
      valid = false;
    }

    // Website
    const websiteValue = websiteInput.value.trim();
    if (websiteValue !== "" && !/^https?:\/\/[^\s]+$/.test(websiteValue)) {
      showError(websiteInput, '*URL має бути валідним або залишеним пустим.');
      valid = false;
    }

    // Message
    const messageValue = messageInput.value.trim();
    if (messageValue.length < 10 || messageValue.length > 350) {
      showError(messageInput, '*Повідомлення має бути 10–350 символів.');
      valid = false;
    }

    if (valid) {
      form.submit(); // якщо всі поля валідні
    }
  });

  // Скидання помилок при фокусі
  [nameInput, ageInput, emailInput, websiteInput, messageInput].forEach(input => {
    input.addEventListener('focus', () => {
      removeError(input);
    });
  });

  function showError(input, message) {
    input.classList.add('input-error');

    const error = document.createElement('div');
    error.className = 'error-message';
    error.textContent = message;
    input.insertAdjacentElement('afterend', error);
  }

  function removeError(input) {
    input.classList.remove('input-error');
    const next = input.nextElementSibling;
    if (next && next.classList.contains('error-message')) {
      next.remove();
    }
  }

  function clearErrors() {
    document.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
    document.querySelectorAll('.error-message').forEach(el => el.remove());
  }
});

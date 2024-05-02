const inputText = document.querySelector('#inputText'); // Добавлено id, чтобы исключить некорректное автоматическое заполненение формы браузером
const button = document.querySelector('button');
const duplicateField = document.querySelector('#duplicateField');

inputText.addEventListener('input', function (event) {
    duplicateField.textContent = inputText.value;
})

button.addEventListener('click', function (event) {
    event.preventDefault();
    console.log(inputText.value);
    duplicateField.textContent = "";
    inputText.value = "";
})
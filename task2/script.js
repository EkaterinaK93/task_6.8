const consoleLog = document.querySelector('#consoleLog');
consoleLog.addEventListener('click', () => {
    alert('console.log() - метод консоли используется для вывода сообщений в браузерную консоль')
})

const Alert = document.querySelector('#alert');
Alert.addEventListener('click', () => {
    alert('Для отображения информации пользователям была предусмотрена функция alert(). Простой способ вывести информацию. Показывает диалоговое окно с сообщением и кнопкой OK.')
})

const Prompt = document.querySelector('#prompt');
Prompt.addEventListener('click', () => {
    alert('Prompt() — отображает диалоговое окно с запросом на ввод текста.')
})

const changeLinkText = document.querySelector("#changeLinkText");

changeLinkText.addEventListener('click', function(event) {
    changeLinkText.textContent = prompt('Введите текст');
    event.preventDefault();
})
// 1. Изменение цвета заголовка при клике
document.querySelector('h1').addEventListener('click', function() {
    this.style.color = this.style.color === 'red' ? '#000' : 'red';
});

// 2. Подсветка пунктов меню при наведении
const navItems = document.querySelectorAll('nav li');
navItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = '#f0f0f0';
    });
    item.addEventListener('mouseout', () => {
        item.style.backgroundColor = '';
    });
});

// 3. Изменение текста футера при загрузке страницы
window.addEventListener('load', function() {
    const footer = document.querySelector('footer');
    footer.textContent += ' | Последнее обновление: ' + new Date().toLocaleDateString();
});

// 4. Обработчик для всех изображений - показывает alt при клике
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', function() {
        alert(this.title || 'Нет описания');
    });
});

// 5. Простое подтверждение при выходе с сайта
window.addEventListener('beforeunload', function(e) {
    e.preventDefault();
    e.returnValue = 'Вы уверены, что хотите покинуть страницу?';
});
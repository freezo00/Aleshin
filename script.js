
// Твой массив с объектами (исправленный)
let surprizes = [
    {
        name: "🌺 Ты самая лучшая! 🌺",
        info: function() {
            return this.name;
        }
    },
    {
        name: "🌺 Ты самая красивая! 🌺",
        info: function() {
            return this.name;
        }
    },
    {
        name: "🌺 Спасибо что ты всегда рядом! 🌺",
        info: function() {
            return this.name;
        }
    },
    {
        name: "🌺 Я тебя люблю! 🌺",
        info: function() {
            return this.name;
        }
    },
    {
        name: "🌺 Ты моя главная поддержка и опора! 🌺",
        info: function() {
            return this.name;
        }
    },
    {
        name: "🌺 Ты делаешь мою жизнь веселее! 🌺",
        info: function() {
            return this.name;
        }
    },
    {
        name: "🌺 Я благодарен что мы с тобой одна семья! 🌺",
        info: function() {
            return this.name;
        }
    }
];

function surpriz() {
    // Находим элемент для вывода сюрприза
    let surprizeElement = document.getElementById('surprize');
    
    // Получаем случайный индекс от 0 до длины массива
    let randomIndex = Math.floor(Math.random() * surprizes.length);
    
    // Получаем случайный объект из массива
    let randomSurprize = surprizes[randomIndex];
    
    // Вызываем метод info() у случайного объекта
    surprizeElement.innerHTML = randomSurprize.info();
    
    // Добавляем класс для плавного появления
    surprizeElement.classList.add('show');
}

// Завдання 1
let result = ''
function currentTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    let daysOfWeek = [
        'неділя', 'понеділок', 'вівторок', 'середа', 'четвер', 'пʼятниця', 'субота'
    ];
    let dayOfWeek = daysOfWeek[now.getDay()];

    let months = [
        'січня', 'лютого', 'березня', 'квітня', 'травня', 'червня',
        'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'
    ];
    let month = months[now.getMonth()];

    let date = now.getDate();
    let year = now.getFullYear();

    let formattedTime = hours + ':' + minutes + ':' + seconds + ', ' +
        dayOfWeek + ', ' + date + ' ' + month + ' ' + year +
        ' року';

    console.log(formattedTime);
    result += formattedTime + ' '
    return formattedTime;
}
currentTime()
document.getElementById('time').innerHTML = result;



// Завдання 2
function play() {
    let playAgain = true;

    while (playAgain) {
        const targetNumber = Math.floor(Math.random() * 101); // Генеруємо випадкове число від 0 до 100
        let attempts = 0;
        let guessed = false;

        while (!guessed) {
            const guess = parseInt(prompt('Вгадайте число від 0 до 100:'));
            if (isNaN(guess)) {
                alert('Введіть будь ласка число!');
                continue;
            }
            attempts++;
            if (guess === targetNumber) {
                alert(`Вітаємо! Ви вгадали число ${targetNumber} за ${attempts} спроб.`);
                guessed = true;
            } else {
                let message = '';
                if (Math.abs(guess - targetNumber) < 10) {
                    if (guess < targetNumber) {
                        message = 'Дуже гаряче. Більше.';
                    } else {
                        message = 'Дуже гаряче. Менше.';
                    }
                } else if (Math.abs(guess - targetNumber) < 20) {
                    if (guess < targetNumber) {
                        message = 'Гаряче. Більше.';
                    } else {
                        message = 'Гаряче. Менше.';
                    }
                } else {
                    if (guess < targetNumber) {
                        message = 'Холодно. Більше.';
                    } else {
                        message = 'Холодно. Менше.';
                    }
                }
                console.log(`${getCurrentDateTime()} Спроба ${attempts}: число ${guess} - не вірно. ${message}`);
            }
        }
        playAgain = confirm('Бажаєте зіграти ще раз?');
    }
    function getCurrentDateTime() {
        const now = new Date();
        const date = now.toLocaleDateString();
        const time = now.toLocaleTimeString();
        return `${date} ${time}`;
    }
}


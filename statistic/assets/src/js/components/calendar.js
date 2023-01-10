let rowsContainer = document.querySelector('.calendar__main-rows');
let month = document.querySelector('.calendar__header');

let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();
let currentDate = new Date().getDate();
let currentDay = new Date().getDay();
let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

let date = new Date(currentYear, currentMonth, 0);

let firstNumb = date.getDay() + 6;
if (firstNumb > 6) {
    firstNumb = firstNumb - 7;
}
let weekNumb = 5;
if (firstNumb <= 5) {
    weekNumb = 6;
}
if (daysInMonth == 28 && firstNumb == 0) {
    weekNumb = 4;
}

let continueNumb = 6 - firstNumb + 1;

for (let i = 1; i < weekNumb; i++) {
    let row = document.createElement('div');
    row.classList.add('calendar-row');
    for (let j = 0; j < 7; j++) {
        let day = document.createElement('span');
        row.appendChild(day);
        if (continueNumb <= daysInMonth) {
            day.textContent = continueNumb;
            continueNumb++;
        } else {
            continueNumb = 1;
            day.textContent = continueNumb;
            continueNumb++;
        }
    }
    console.log(row);
}




//найти первое число на первой строчке
//заполнить все остальные строчки числами, которые нам известны
//приступить к заполнению первой строки
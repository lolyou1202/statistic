let calendar = function () {
    let rowsContainer = document.querySelector('.calendar__main-rows');
    let month = document.querySelector('.calendar__header p');
    
    let currentYear = new Date().getFullYear();
    let currentMonth = new Date().getMonth();
    let currentDate = new Date().getDate();
    let currentDay = new Date().getDay();
    rowsContainer.innerHTML = '';
    
    let fillRows = function (date, currentDate, countDaysInMonth, countDaysInPreviousMonth) {
        let firstDayInMonth = date.getDay() + 6;
        if (firstDayInMonth > 6) {
            firstDayInMonth = firstDayInMonth - 7;
        }
        let weekNumb = 6;
        let continueNumb = 7 - firstDayInMonth + 1;

        let b = 1;
        let c = 1;
        let a = 1;
        for (let i = 0; i < weekNumb; i++) {
            let row = document.createElement('div');
            row.classList.add('calendar-row');
            rowsContainer.appendChild(row);
            for (let j = 0; j < 7; j++) {
                let day = document.createElement('span');
                row.appendChild(day);
                if (i == 0) {
                    if  (j < firstDayInMonth) {
                        day.textContent = countDaysInPreviousMonth - firstDayInMonth + b;
                        day.classList.add('notCurrentMonth');
                        b++;
                    }
                    if (j >= firstDayInMonth) {
                        day.textContent = c;
                        if (c == currentDate) {
                            day.classList.add('today')
                        }
                        c++;
                    }
                }
                if (i > 0) {
                    if (continueNumb > countDaysInMonth) {
                        day.textContent = a;
                        day.classList.add('notCurrentMonth');
                        a++;
                    }
                    if (continueNumb <= countDaysInMonth) {
                        day.textContent = continueNumb;
                        if (continueNumb == currentDate && date.getMonth() == currentMonth 
                                && date.getFullYear() == currentYear) {
                            day.classList.add('today')
                        }
                        continueNumb++;
                    }
                }
            }
        }
    }

    let arrowClick = function (currentYear, currentMonth, currentDate, currentDay) {
        document.querySelectorAll('.calendar__header-arrow').forEach(function(element) {
            element.addEventListener('click', function(e) {
                if (element.classList.contains('arrow-left')) {
                    rowsContainer.innerHTML = '';
                    currentMonth = currentMonth - 1;
                    load(currentYear, currentMonth, currentDate, currentDay);
                }
                if (element.classList.contains('arrow-right')) {
                    rowsContainer.innerHTML = '';
                    currentMonth = currentMonth + 1;
                    load(currentYear, currentMonth, currentDate, currentDay);
                }
            })
        })
    }

    let load = function (currentYear, currentMonth, currentDate, currentDay) {
        let countDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        let countDaysInPreviousMonth = new Date(currentYear, currentMonth , 0).getDate();
    
        let date = new Date(currentYear, currentMonth, 1);
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        month.textContent = monthNames[date.getMonth()]
        fillRows(date, currentDate, countDaysInMonth, countDaysInPreviousMonth);

        document.querySelectorAll('.calendar-row span').forEach((el) => {
            if (el.classList == '') {
                el.addEventListener('click', function() {
                    if (this.classList.contains('active')) {
                        this.classList.remove('active');
                    } else {
                        document.querySelectorAll('.calendar-row span').forEach((el) => {
                            el.classList.remove('active');
                        })
                        this.classList.toggle('active');
                    }
                    console.log(date = new Date(currentYear, currentMonth, this.textContent));
                })
            }
        })
    }

    load(currentYear, currentMonth, currentDate, currentDay);
    arrowClick(currentYear, currentMonth, currentDate, currentDay);
}

export {calendar}
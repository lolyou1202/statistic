let fillingline = function (value, start, today, end) {
    let line = document.querySelector('.league-progress__line-current');
    let keyFrames = document.createElement('style');

    keyFrames.innerHTML = `
        @keyframes linefilling {
            0% {
                max-width: 0;
            }
            100% {
                max-width: ${value}%;
            }
        }

        .league-progress__line-current {
            position: absolute;
            left: 0;
            top: 0;
            z-index: 10;
            border-radius: 50px;
            height: 10px;
            background: var(--primary-font);
            opacity: 30%;
            width: ${value}%;
            animation: linefilling 1s ease-in-out;
        }
    `;
    line.appendChild(keyFrames);

    let dateStart = document.querySelector('.league-progress__start');
    let dateEnd = document.querySelector('.league-progress__end');
    let dateToday = document.querySelector('.league-progress__today');

    dateStart.textContent = start;
    dateStart.style.left = 0;
    dateEnd.textContent = end;
    dateEnd.style.right = 0;
    dateToday.textContent = today;
    dateToday.style.left = `${value}%`;
    dateToday.style.transform = 'translateX(-50%)';
}

fillingline(30, '19 Oct', '1 Jan', '14 Jun');

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

let selectLeague = function (json) {
    let list = document.querySelector('.league-selection .select-list');
    list.innerHTML = '';
    for (let i = 0; i < json.length; i++) {
        let li = document.createElement('li');
        li.textContent = json[i].name;
        list.appendChild(li);
    }
    list.querySelectorAll('li').forEach((element) => {
        element.addEventListener('click', function(e) {
            for (let i = 0; i < json.length; i++) {
                if (json[i].name == element.textContent) {
                    document.querySelector('.league-card').innerHTML = `
                        <div class="league-img"></div>
                        <div class="league-content">
                            <p class="league-name">${json[i].name}</p>
                            <div class="league-country">
                                <div class="country-icon"></div>
                                <p class="country-name">${json[i].country.name}</p>
                            </div>
                        </div>
                    `;
                    document.querySelector('.league-img').style.backgroundImage = `url(${json[i].img})`;
                    document.querySelector('.country-icon').style.backgroundImage = `url(${json[i].country.img})`;
                }
            }
        })
    })
}
let jsonLeague = [
    {
      name: 'NBA',
      img: 'static/img/pngegg.png',
      season: {
        start: '19 Oct',
        end: '14 Jun',
        today: '18 Jan'
      },
      country: {
        name: 'USA',
        img: 'static/img/pngegg.png'
      }
    },
    {
      name: 'Euroleague',
      img: 'static/img/pngegg.png',
      season: {
        start: '2 Oct',
        end: '1 Jul',
        today: '18 Jan'
      },
      country: {
        name: 'Europe',
        img: 'static/img/pngegg.png'
      }
    },
    {
      name: 'VTB League',
      img: 'static/img/pngegg.png',
      season: {
        start: '2 Oct',
        end: '1 Jul',
        today: '18 Jan'
      },
      country: {
        name: 'Russia',
        img: 'static/img/pngegg.png'
      }
    }
]
selectLeague(jsonLeague);
export {fillingline, selectLeague}


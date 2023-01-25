let fillingLeague = function (json) {
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

  let selectLeague = function (data) {
    document.querySelector('.league-card').innerHTML = `
        <div class="league-img"></div>
        <div class="league-content">
            <p class="league-name">${data.property.name}</p>
            <div class="league-country">
                <div class="country-icon"></div>
                <p class="country-name">${data.property.country.name}</p>
            </div>
        </div>
    `;
    document.querySelector('.league-img').style.backgroundImage = `url(${data.property.img})`;
    document.querySelector('.country-icon').style.backgroundImage = `url(${data.property.country.img})`;
  }

  // let fillSelectLeague = function (json) {
  //   let list = document.querySelector('.league-selection .select-list');
  //   list.innerHTML = '';

  //   for (let i = 0; i < json.length; i++) {
  //     let li = document.createElement('li');
  //     li.textContent = json[i];
  //     list.appendChild(li);
  //   }
  // }

  fillingline(json.property.season.value, json.property.season.start, json.property.season.today, json.property.season.end)
  //fillSelectLeague(json.select)
  selectLeague(json);
}

export {fillingLeague}
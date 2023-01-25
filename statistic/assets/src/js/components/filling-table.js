let standings = function (json) {
  //Функция заполнения таблицы
  let fillingStandings = function (json, conference) {
    let body = document.querySelector('.standings__body');
    body.innerHTML = '';
  
    for (let key in json[conference]) {
      let li = document.createElement('li')
      li.classList.add('standings__body-item');
  
      li.innerHTML = `
        <div>
            <span>${json[conference][key].position}</span>
        </div>
        <div>
            <span>
                <div class="standings__team-img"></div>
                <p class="standings__team-name">${json[conference][key].team.name}</p>
            </span>
        </div>
        <div>
            <span>${json[conference][key].wins}</span>
        </div>
        <div>
            <span>${json[conference][key].loses}</span>
        </div>
        <div>
            <span>
                <div class="standings__last-five">${json[conference][key].lastFive[0]}</div>
                <div class="standings__last-five">${json[conference][key].lastFive[1]}</div>
                <div class="standings__last-five">${json[conference][key].lastFive[2]}</div>
                <div class="standings__last-five">${json[conference][key].lastFive[3]}</div>
                <div class="standings__last-five">${json[conference][key].lastFive[4]}</div>
            </span>
        </div>
        <div>
            <span>${json[conference][key].percent}</span>
        </div>
      `;
      li.querySelector('.standings__team-img').style.backgroundImage = `url(${json[conference][key].team.imageUrl})`;
      li.querySelectorAll('.standings__last-five').forEach((el) => {
        if (el.textContent == 'W') {
          el.classList.add('win');
        } else if (el.textContent == 'L') {
          el.classList.add('lose');
        }
      })
      
      body.appendChild(li);
      if (Object.keys(json[conference]).length != Number(key) + 1) {
        let hr = document.createElement('hr')
        body.appendChild(hr);
      }
    }
  }

  //Заполнение таблицы команд при загрузке страницы
  fillingStandings(json, 'east');

  //Заполнение таблицы команд при селекции конференции
  document.querySelectorAll('.standings .conference-selection li').forEach((el) => {
    el.addEventListener('click', function(e) {
      if (e.target.textContent == 'Eastern conference') {
        fillingStandings(json, 'east')
      }
      if (e.target.textContent == 'Western conference') {
        fillingStandings(json, 'west')
      }
    })
  })
}

let topPlayers = function (json) {
  let fillingTopPlayers = function (json) {
    let body = document.querySelector('.topPlayers__body');
    body.innerHTML = '';
  
    for (let key in json) {
      let li = document.createElement('li')
      li.classList.add('topPlayers__body-item');
      li.innerHTML = `
        <div>
          <span>${json[key].position}</span>
        </div>
        <div>
          <span>
            <div class="topPlayers__person-img"></div>
              <div>
                <p class="topPlayers__person-name">${json[key].player.person.name}</p>
              <div>
                <div class="topPlayers__person-team"></div>
                <div class="topPlayers__person-position">${json[key].player.person.position}</div>
              </div>
            </div>
          </span>
        </div>
        <div>
          <span>${json[key].value}</span>
        </div>
      `;
      li.querySelector('.topPlayers__person-img').style.backgroundImage = `url(${json[key].player.team})`;
      li.querySelector('.topPlayers__person-team').style.backgroundImage = `url(${json[key].player.person.img})`;
  
      body.appendChild(li);
      if (Object.keys(json).length != Number(key) + 1) {
        let hr = document.createElement('hr')
        body.appendChild(hr);
      }
    }
  }

  fillingTopPlayers(json)
}



export {standings, topPlayers}
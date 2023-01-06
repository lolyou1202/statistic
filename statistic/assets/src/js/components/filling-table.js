let jsonTeams = {
  1: {
    position: '1',
    team: {
      imageUrl: '../img/pngegg.png',
      name: 'Boston',
    },
    wins: '33',
    loses: '23',
    lastFive: 'WWWLL',
    percent: '0.58',
  },
  2: {
    position: '2',
    team: {
      imageUrl: '../img/pngegg.png',
      name: 'GSW',
    },
    wins: '11',
    loses: '43',
    lastFive: 'LLWLW',
    percent: '0.23',
  },
  3: {
    position: '2',
    team: {
      imageUrl: '../img/pngegg.png',
      name: 'GSW',
    },
    wins: '11',
    loses: '43',
    lastFive: 'LLWLW',
    percent: '0.23',
  },
  4: {
    position: '2',
    team: {
      imageUrl: '../img/pngegg.png',
      name: 'GSW',
    },
    wins: '11',
    loses: '43',
    lastFive: 'LLWLW',
    percent: '0.23',
  },
  5: {
    position: '2',
    team: {
      imageUrl: '../img/pngegg.png',
      name: 'GSW',
    },
    wins: '11',
    loses: '43',
    lastFive: 'LLWLW',
    percent: '0.23',
  },
  6: {
    position: '2',
    team: {
      imageUrl: '../img/pngegg.png',
      name: 'GSW',
    },
    wins: '11',
    loses: '43',
    lastFive: 'LLWLW',
    percent: '0.23',
  },
  7: {
    position: '2',
    team: {
      imageUrl: '../img/pngegg.png',
      name: 'GSW',
    },
    wins: '11',
    loses: '43',
    lastFive: 'LLWLW',
    percent: '0.23',
  },
  8: {
    position: '2',
    team: {
      imageUrl: '../img/pngegg.png',
      name: 'GSW',
    },
    wins: '11',
    loses: '43',
    lastFive: 'LLWLW',
    percent: '0.23',
  },
  9: {
    position: '2',
    team: {
      imageUrl: '../img/pngegg.png',
      name: 'GSW',
    },
    wins: '11',
    loses: '43',
    lastFive: 'LLWLW',
    percent: '0.23',
  },
  10: {
    position: '2',
    team: {
      imageUrl: '../img/pngegg.png',
      name: 'GSW',
    },
    wins: '11',
    loses: '43',
    lastFive: 'LLWLW',
    percent: '0.23',
  },
  11: {
    position: '2',
    team: {
      imageUrl: '../img/pngegg.png',
      name: 'GSW',
    },
    wins: '11',
    loses: '43',
    lastFive: 'LLWLW',
    percent: '0.23',
  },
  12: {
    position: '2',
    team: {
      imageUrl: '../img/pngegg.png',
      name: 'GSW',
    },
    wins: '11',
    loses: '43',
    lastFive: 'LLWLW',
    percent: '0.23',
  },
  13: {
    position: '2',
    team: {
      imageUrl: '../img/pngegg.png',
      name: 'GSW',
    },
    wins: '11',
    loses: '43',
    lastFive: 'LLWLW',
    percent: '0.23',
  },
  14: {
    position: '2',
    team: {
      imageUrl: '../img/pngegg.png',
      name: 'GSW',
    },
    wins: '11',
    loses: '43',
    lastFive: 'LLWLW',
    percent: '0.23',
  },
  15: {
    position: '2',
    team: {
      imageUrl: '../img/pngegg.png',
      name: 'GSW',
    },
    wins: '11',
    loses: '43',
    lastFive: 'LLWLW',
    percent: '0.23',
  },
}

let jsonTopPlayers = {
    1: {
      position: '1',
      team: {
        imageUrl: '../img/pngegg.png',
        name: 'Stephen Curry',
      },
      percent: '0.58',
    },
}

let fillingStandings = function (json) {
  let body = document.querySelector('.standings__body');
  body.innerHTML = '';

  for (let key in json) {
    let li = document.createElement('li')
    let hr = document.createElement('hr')
    li.classList.add('standings__body-item');

    li.innerHTML = `
      <div>
          <span>${json[key].position}</span>
      </div>
      <div>
          <span>
              <div class="standings__team-img"></div>
              <p class="standings__team-name">${json[key].team.name}</p>
          </span>
      </div>
      <div>
          <span>${json[key].wins}</span>
      </div>
      <div>
          <span>${json[key].loses}</span>
      </div>
      <div>
          <span>
              <div class="standings__last-five">${json[key].lastFive[0]}</div>
              <div class="standings__last-five">${json[key].lastFive[1]}</div>
              <div class="standings__last-five">${json[key].lastFive[2]}</div>
              <div class="standings__last-five">${json[key].lastFive[3]}</div>
              <div class="standings__last-five">${json[key].lastFive[4]}</div>
          </span>
      </div>
      <div>
          <span>${json[key].percent}</span>
      </div>
    `;
    li.querySelector('.standings__team-img').style.backgroundImage = `url(${json[key].team.imageUrl})`;
    li.querySelectorAll('.standings__last-five').forEach((el) => {
      if (el.textContent == 'W') {
        el.classList.add('win');
      } else if (el.textContent == 'L') {
        el.classList.add('lose');
      }
    })
    
    body.appendChild(li);
    if (!(Object.keys(json).length == key)) {
      body.appendChild(hr);
    }
  }
}

let fillingTopPlayers = function (json) {
    let body = document.querySelector('.topPlayers__body');
    body.innerHTML = '';
  
    for (let key in json) {
      let li = document.createElement('li')
      let hr = document.createElement('hr')
      li.classList.add('topPlayers__body-item');
  
      li.innerHTML = `
        <div>
            <span>${json[key].position}</span>
        </div>
        <div>
            <span>
                <div class="topPlayers__team-img"></div>
                <p class="topPlayers__team-name">${json[key].team.name}</p>
            </span>
        </div>
        <div>
            <span>${json[key].percent}</span>
        </div>
      `;
      li.querySelector('.topPlayers__team-img').style.backgroundImage = `url(${json[key].team.imageUrl})`;

      body.appendChild(li);
      if (!(Object.keys(json).length == key)) {
        body.appendChild(hr);
      }
    }
}

fillingStandings(jsonTeams);
//fillingTopPlayers(jsonTopPlayers);
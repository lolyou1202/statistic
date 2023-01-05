let json = {
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
    }
}

let fillingTable = function (json) {
    let body = document.querySelector('.standings__body');
    body.innerHTML = '';

    for (let key in json) {
        let li = document.createElement('li')
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
        body.appendChild(li);
    }

    // for (let i = 0; i <= Object.keys(json).length; i++) {
    //     let li = document.createElement('li');
    //     let div = document.createElement('div');

    //     if (i == 0 || i == 2 ||i == 3 || i == 5) {
    //         let span = document.createElement('span');

    //     }
    // }
    
}

fillingTable(json);
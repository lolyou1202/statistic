let json = [
    {
        time: '12:00',
        matches: {
            1: {
                comands: {
                    1: {
                        name: 'Golden State Warriors',
                        standings: '2',
                        place: 'Home',
                        img: '../img/pngegg.png'
                    },
                    2: {
                        name: 'Orlando Magick',
                        standings: '10',
                        place: 'Guests',
                        img: '../img/pngegg.png'
                    }
                }
            },
            2: {
                comands: {
                    1: {
                        name: 'Golden State Warriors',
                        standings: '2',
                        place: 'Home',
                        img: '../img/pngegg.png'
                    },
                    2: {
                        name: 'Orlando Magick',
                        standings: '10',
                        place: 'Guests',
                        img: '../img/pngegg.png'
                    }
                }
            }
        }
    },
    {
        time: '15:00',
        matches: {
            1: {
                comands: {
                    1: {
                        name: 'Golden State Warriors',
                        standings: '2',
                        place: 'Home',
                        img: '../img/pngegg.png'
                    },
                    2: {
                        name: 'Orlando Magick',
                        standings: '10',
                        place: 'Guests',
                        img: '../img/pngegg.png'
                    }
                }
            },
            2: {
                comands: {
                    1: {
                        name: 'Golden State Warriors',
                        standings: '2',
                        place: 'Home',
                        img: '../img/pngegg.png'
                    },
                    2: {
                        name: 'Orlando Magick',
                        standings: '10',
                        place: 'Guests',
                        img: '../img/pngegg.png'
                    }
                }
            }
        }
    },
    {
        time: '18:00',
        matches: {
            1: {
                comands: {
                    1: {
                        name: 'Golden State Warriors',
                        standings: '2',
                        place: 'Home',
                        img: '../img/pngegg.png'
                    },
                    2: {
                        name: 'Orlando Magick',
                        standings: '10',
                        place: 'Guests',
                        img: '../img/pngegg.png'
                    }
                }
            }
        }
    }
]

let fillMatches = function (json) {
    let matches = document.querySelector('.matches');
    let saveHeightcard = 60;
    let saveHeightTime = 101;
    let saveHeightLine = 116;
    matches.innerHTML = '';

    const width = matches.offsetWidth;
    const height = matches.offsetHeight;
    const canvas = document.getElementById('canvas');
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext('2d');
    context.beginPath();

    let midleLine = document.createElement('div');
    midleLine.classList.add('midleLine');
    matches.appendChild(midleLine);

    for (let i = 0; i < json.length; i++) {
        let midleLineBlock = document.createElement('div');
        midleLineBlock.classList.add('midleLine__time');

        let p = document.createElement('p');
        p.textContent = json[i].time;
        p.style.top = `${saveHeightTime}px`;
        let count = Object.keys(json[i].matches).length;
        saveHeightTime = saveHeightTime + count * (112 + 20);
        
        midleLineBlock.appendChild(p);
        matches.appendChild(midleLineBlock);

        for (let key in json[i].matches) {
            let match = document.createElement('div');
            match.classList.add('midleLine__match');

            match.innerHTML = `
                <div class="midleLine__match-command">
                    <div class="command__img"></div>
                    <div class="command__info">
                        <div class="command__info-name">
                            <p>${json[i].matches[key].comands[1].name}</p>
                            <span class="command__info-position">#
                            ${json[i].matches[key].comands[1].standings}
                            </span>
                        </div>
                        <div class="command__info-stadium">
                        ${json[i].matches[key].comands[1].place}
                        </div>
                    </div>
                </div>
                <div class="midleLine__match-command">
                    <div class="command__img"></div>
                    <div class="command__info">
                        <div class="command__info-name">
                            <p>${json[i].matches[key].comands[2].name}</p>
                            <span class="command__info-position">#
                            ${json[i].matches[key].comands[2].standings}
                            </span>
                        </div>
                        <div class="command__info-stadium">
                        ${json[i].matches[key].comands[2].place}
                        </div>
                    </div>
                </div>
            `;

            match.style.top = `${saveHeightcard}px`;
            saveHeightcard = saveHeightcard + 112 + 20;

            context.moveTo(width / 2 + 30, saveHeightTime);
    
            context.bezierCurveTo(((width/2)+(width/2)-300), 116, ((width / 2) + 30), 236, ((width/2)+(width/2)-300), 236);
            
            if (i % 2 == 1) {
                match.style.left = '30px';
            }

            

            midleLineBlock.appendChild(match);
        }
    }
    
    

    


    
    context.moveTo(width / 2 + 30, 116);
    context.lineTo(((width/2)+(width/2)-300), 116);

    context.moveTo(((width / 2) + 30), 236);
    context.lineTo(((width/2)+(width/2)-300), 236);

    context.lineWidth = 10;
    context.strokeStyle = '#DFE7F1';
    context.stroke();
}

fillMatches(json);

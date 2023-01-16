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
            },
            3: {
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
            },
            3: {
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

let fillMatches1 = function (json) {
    let matches = document.querySelector('.matches');
    let saveHeightcard = 60;
    let saveHeightTime = 101;
    let saveHeightLine = 116;
    matches.innerHTML = '';

    let width = matches.offsetWidth;
    let height = matches.offsetHeight;
    console.log(matches.scrollHeight);
    
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
            
            if (i % 2 == 1) {
                match.style.left = '30px';
                let blockX = ((width / 2) - (width / 2) + 300);
                let timeX = (width / 2);
                let centerX = timeX - (timeX - blockX + 35) / 2;
                let radius = (timeX - blockX) / 4;
                if (key == 1) {
                    context.moveTo(timeX, saveHeightLine);
                    context.lineTo(blockX, saveHeightLine);
                } else {
                    if (radius > 50) {
                        radius = 50;
                    }
                    context.moveTo(timeX, saveHeightTime + 15);
                    context.arcTo(centerX, saveHeightTime + 15, centerX, saveHeightTime + 15 + radius, radius);
                    context.lineTo(centerX, saveHeightLine - radius);
                    context.arcTo(centerX, saveHeightLine, blockX, saveHeightLine, radius);
                    context.lineTo(blockX, saveHeightLine);
                }
            } else {
                let blockX = ((width / 2) + (width / 2) - 300);
                let timeX = (width / 2);
                let centerX = timeX + (blockX - timeX) / 2;
                let radius = (blockX - timeX) / 4;
                if (key == 1) {
                    context.moveTo(timeX, saveHeightLine);
                    context.lineTo(blockX, saveHeightLine);
                } else {
                    if (radius > 50) {
                        radius = 50;
                    }
                    context.moveTo(timeX, saveHeightTime + 15);
                    context.arcTo(centerX, saveHeightTime + 15, centerX, saveHeightTime + 15 + radius, radius);
                    context.lineTo(centerX, saveHeightLine - radius);
                    context.arcTo(centerX, saveHeightLine, blockX, saveHeightLine, radius);
                    context.lineTo(blockX, saveHeightLine);
                }
            }

            saveHeightcard = saveHeightcard + 112 + 20;
            saveHeightLine = saveHeightLine + 112 + 20;
            midleLineBlock.appendChild(match);
        }
        let count = Object.keys(json[i].matches).length;
        saveHeightTime = saveHeightTime + count * (112 + 20);
    }
    
    context.lineWidth = 10;
    context.strokeStyle = '#DFE7F1';
    context.stroke();
}

let fillMatches = function (json) {
    let matches = document.querySelector('.matches');
    matches.innerHTML = '';

    let midleLine = document.createElement('div');
    midleLine.classList.add('midleLine');
    matches.appendChild(midleLine);

    for (let i = 0; i < json.length; i++) {
        let midleLineBlock = document.createElement('div');
        midleLineBlock.classList.add('midleLine__block');

        let p = document.createElement('p');
        p.textContent = json[i].time;

        const canvas = document.createElement('canvas');
        //canvas.width = '100%';
        //canvas.height = '100%';
        const context = canvas.getContext('2d');
        context.beginPath();

        midleLineBlock.appendChild(p);
        
        matches.appendChild(midleLineBlock);
        
        for (let key in json[i].matches) {
            let match = document.createElement('div');
            match.classList.add('matchInBlock');

            match.innerHTML = `
                <div class="matchInBlock-command">
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
                <div class="matchInBlock-command">
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

            if (i % 2 == 1) {
                midleLineBlock.style.margin = '0 0 20px auto';
                midleLineBlock.style.padding = '0 20px 0 0';
                midleLineBlock.style.alignItems = 'flex-end';
                p.style.left = '0';
            } else {

            }

            midleLineBlock.appendChild(match);
        }
        midleLineBlock.appendChild(canvas);
    }
}

fillMatches(json);

window.addEventListener('resize', function(event) {
    fillMatches(json);
});



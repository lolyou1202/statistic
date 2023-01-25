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
            midleLineBlock.appendChild(match);
        }

        let width = midleLineBlock.offsetWidth;
        let height = midleLineBlock.offsetHeight;
        canvas.width = width;
        canvas.height = height;

        let blockX = 270;
        let timeX = width;
        let centerX = timeX - (timeX - blockX) / 2;
        let saveHeightLine = 56;
        let saveHeightTime = 56;
        let radius = (timeX - blockX) / 6;
        
        for (let key in json[i].matches) {
            if (i % 2 == 1) {
                midleLineBlock.style.margin = '0 0 20px auto';
                midleLineBlock.style.padding = '0 20px 0 0';
                midleLineBlock.style.alignItems = 'flex-end';
                p.style.left = '0';

                blockX = width - 270;
                timeX = 0;
                centerX = blockX / 2;
                radius = blockX / 6;

                if (key == 1) {
                    context.moveTo(timeX, saveHeightLine);
                    context.lineTo(blockX, saveHeightLine);
                } else {
                    if (radius > 50) {
                        radius = 50;
                    }
                    context.moveTo(timeX, saveHeightTime);
                    context.arcTo(centerX, saveHeightTime, centerX, saveHeightTime + radius, radius);
                    context.lineTo(centerX, saveHeightLine - radius);
                    context.arcTo(centerX, saveHeightLine, blockX, saveHeightLine, radius);
                    context.lineTo(blockX, saveHeightLine);
                }
            } else {
                if (key == 1) {
                    context.moveTo(timeX, saveHeightLine);
                    context.lineTo(blockX, saveHeightLine);
                } else {
                    if (radius > 50) {
                        radius = 50;
                    }
                    context.moveTo(timeX, saveHeightTime);
                    context.arcTo(centerX, saveHeightTime, centerX, saveHeightTime + radius, radius);
                    context.lineTo(centerX, saveHeightLine - radius);
                    context.arcTo(centerX, saveHeightLine, blockX, saveHeightLine, radius);
                    context.lineTo(blockX, saveHeightLine);
                }
            }
            saveHeightLine = saveHeightLine + 132;
        }
        
        context.lineWidth = 10;
        context.strokeStyle = '#DFE7F1';
        context.stroke();
        midleLineBlock.appendChild(canvas);
    }
}

export {fillMatches}
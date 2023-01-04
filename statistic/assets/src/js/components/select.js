document.querySelectorAll('.select').forEach((el) => {
    let button = el.querySelector('button');

    button.addEventListener('click', (e) => {
        el.classList.toggle('active');
        el.querySelectorAll('li').forEach((elem) => {
            if (elem.textContent == button.querySelector('span').textContent) {
                el.querySelectorAll('li').forEach((elem) => {
                    elem.classList.remove('selected');
                })
                elem.classList.add('selected')
            }
        })
    })
    el.querySelectorAll('li').forEach((elem) => {
        elem.addEventListener('click', (e) => {
            button.querySelector('span').textContent = elem.textContent;
            el.classList.toggle('active');
        })
    })
    document.addEventListener('click', (e) => {
        if (!(el.contains(e.target))) {
            el.classList.remove('active');
        }
    })
})
let sidebar = document.querySelector('.sidebar');
let sidebarContainer = document.querySelector('.sidebar-container');
sidebar.addEventListener('click', function(e) {
    let hamburger = sidebar.querySelector('button');
    if (e.target == hamburger) {
        sidebar.classList.toggle('active')
        sidebarContainer.classList.toggle('active')
    }
})
let clickMenu = document.querySelector('.test');

let closeMenu = document.querySelector('.closemenu')

let bar = document.querySelector('.sidebar');

let body = document.querySelector('body');

clickMenu.addEventListener('click', () => {
    bar.classList.toggle('sidebar-hidden');
    if (clickMenu.style.display = 'none') {
        closeMenu.style.display = 'block'
    }
});

closeMenu.addEventListener('click', () => {
    if (closeMenu.style.display = 'none') {
        clickMenu.style.display = 'block'
    }
    bar.classList.remove('sidebar-hidden'),
    bar.classList.remove('sidebar-none')
});
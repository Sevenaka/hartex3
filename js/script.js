var menuBtn = document.querySelector('.header_top .open_menu'),
    dym = document.querySelector('.menu_bym'),
    closeMenu = document.querySelector('.mob_menu .close_pop'),
    body = document.body;

if(closeMenu) {
    closeMenu.addEventListener('click', function(){
        document.querySelector('.mob_menu').classList.remove('open');
        body.classList.remove('m_opn');
        dym.classList.remove('show');
    });
}

menuBtn.addEventListener('click', function(){
    document.querySelector('.mob_menu').classList.add('open');
    body.classList.add('m_opn');
    dym.classList.add('show');
});

dym.addEventListener('click', function(){
    document.querySelector('.mob_menu').classList.remove('open');
    dym.classList.remove('show');
    body.classList.remove('m_opn');
});
function openNav() {
    document.getElementById("sidenav").style.width = "250px";
    $('main').addClass('main-margin');
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    $('main').removeClass('main-margin');
}

$(".main-menu__link").on('click', function(){
    let currentActiveItem = $(this)
    let prevActiveItem = $('.main-menu__link--active')
    
    prevActiveItem.removeClass('main-menu__link--active')
    currentActiveItem.addClass('main-menu__link--active')
})

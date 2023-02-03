
$(document).ready(function () {
    const nav = document.querySelector('nav');
    const a = document.querySelectorAll('ul a');
    window.onscroll = function () {
        var top = window.scrollY;
        for (let index = 0; index < a.length; index++) {
            if (top >= 50) {
                nav.classList.add('activeScroll_nav');
                a[index].classList.add('activeScroll_link');
            } else {
                nav.classList.remove('activeScroll_nav');
                a[index].classList.remove('activeScroll_link');
            }
        }
    }

    const preloaderDone = setTimeout(bodyOverflow, 2000);
    const body = document.querySelector('body');
    body.classList.add('preloading');
    function bodyOverflow() {
        body.classList.remove('preloading');
    }

    $(window).on("load", function () {
        $(".preloader-web").delay(2000).fadeOut(500);
    });

    setTimeout(function () {
        document.getElementById("video-background").play();
        console.log('start video disini');
    }, 2000);

});
// FULLSCREEN
const bt = document.querySelector('#fullscreen');

bt.addEventListener('click', event => {
    event = document.documentElement;
    if (event.requestFullscreen) {
        event.requestFullscreen(); // W3C spec
    } else if (event.mozRequestFullScreen) {
        event.mozRequestFullScreen(); // Firefox
    } else if (event.webkitRequestFullscreen) {
        event.webkitRequestFullscreen(); // Safari
    } else if (event.msRequestFullscreen) {
        event.msRequestFullscreen(); // IE/Edge
    }

    if (document.fullscreenElement) {
        deactivateFullscreen();
    }
});

///function activateFullscreen(event) {};

function deactivateFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
};
/** Полноэкранный режим**/
//<button id="fullscr"></button>
/*   let fullscreen;
let fsEnter = document.getElementById('fullscr');
let fsEnterIn = "Войти в полноэкранный режим";
let fsEnterOut = "Выйти из полноэкранного режима";
fsEnter.innerHTML = fsEnterIn;
fsEnter.addEventListener('click', function (e) {
    e.preventDefault();
    if (!fullscreen) {
        fullscreen = true;
        document.documentElement.requestFullscreen();
        fsEnter.innerHTML = fsEnterOut;
    } else {
        fullscreen = false;
        document.exitFullscreen();
        fsEnter.innerHTML = fsEnterIn;
    }
});
if (e.keyCode === 27) {
    fsEnter.innerHTML = fsEnterIn;
}   */

window.onload = function () {

    let flagFullScrin = false
    let fullIcon = document.getElementById('ico')

    fullIcon.onclick = () => {
        full()
    }
    function full() {
        flagFullScrin = !flagFullScrin
        if (flagFullScrin) {
            document.documentElement.requestFullscreen()
            fullIcon.classList.remove('fa-expand')
            fullIcon.classList.add('fa-compress')
        } else if (!flagFullScrin) {
            fullIcon.classList.remove('fa-compress')
            fullIcon.classList.add('fa-expand')
            document.exitFullscreen()
        }
    }
    window.addEventListener("orientationchange", function() {
        window.location.reload();
    });

}
/* ================== MOBILE NAV ==================== */
const mobileNavButton = document.querySelector('.mobile-nav-button');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavIcon = document.querySelector('.mobile-nav-button__icon');

mobileNavButton.addEventListener('click', function() {
    mobileNavIcon.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
})
/* ================== VIDEO ==================== */

const videoBtn = document.querySelector('#video-story-btn');
const videoBtnIcon = document.querySelector('#video-story-btn-icon');
const videoFile = document.querySelector('#video-story');
const videoOverlay = document.querySelector('#vidio-story-overlay');

videoBtn.addEventListener('click', function(){

    // function toggleOverlay(event){
    //     if (event.type === 'mouseleave') {
    //         videoOverlay.classList.add('hidden');
    //     }
    //     if (event.type === 'mouseenter') {
    //         videoOverlay.classList.remove('hidden');
    //     }
    // }


    if (videoFile.paused) {
        videoFile.play();
        videoBtnIcon.src='./img/story/pause-white.svg';

        // videoOverlay.onmouseleave = toggleOverlay;
        // videoOverlay.onmouseenter  = toggleOverlay;
    }else {
        videoFile.pause();
        videoBtnIcon.src='./img/story/play-white.svg';
    }
})

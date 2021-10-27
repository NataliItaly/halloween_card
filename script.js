const header = document.querySelector('.site-header');
const spider = document.querySelector('.spider');
const title = document.querySelector('.title');

function scarySound(){
    const audio = new Audio();
    audio.preload = 'auto';
    audio.src = './monstr.mp3';
    audio.play();
}

spider.onclick = scarySound;

document.querySelector('.push-me').onclick = function() {
    header.classList.remove('hidden-header');
    header.classList.add('site-header-img');
    spider.classList.add('spider-animation');
    title.classList.remove('hidden-title');
    title.classList.add('visible-title');
}


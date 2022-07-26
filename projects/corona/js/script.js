const menuIcon = document.querySelector('.menu__icon');
const videoBtn = document.querySelector('.video-get-started');
if(menuIcon){
    const menuBody = document.querySelector('.menu__body');
    const button = document.querySelector('.button_blue');
    menuIcon.addEventListener("click", function(e){
        menuIcon.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        button.classList.toggle('_active');
        document.body.classList.toggle('_inactive');
    })
}
if(videoBtn){
    const videoPopup = document.querySelector('.pop-up');
    const videoClose = document.querySelector('.video-pop-up__close-btn')
    videoBtn.addEventListener("click", function(e){
        videoPopup.classList.toggle('_active');
        document.body.classList.toggle('_inactive');
    })
    videoClose.addEventListener("click", function(e){
        videoPopup.classList.toggle('_active');
        document.body.classList.toggle('_inactive');
    })
}
const a = document.querySelectorAll('a');
a.forEach(item=>{
    item.addEventListener("click", function(e){
        e.preventDefault();
    })
})
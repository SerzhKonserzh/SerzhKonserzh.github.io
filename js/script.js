//active link
const links=document.querySelectorAll('.nav-header__link')
links.forEach(link =>{
    link.addEventListener('click', ()=>{
        links.forEach(elem => elem.classList.remove('_active'));
        link.classList.add("_active");
        menuIcon.classList.remove('_active');
        menuList.classList.remove('_active');
    })
})
//burger menu
const menuIcon = document.querySelector('.nav-header__icon'),
    menuList = document.querySelector('.nav-header__list');
menuIcon.addEventListener('click',()=>{
    menuIcon.classList.toggle('_active');
    menuList.classList.toggle('_active');
})
//circular menu
const circularItems = document.querySelectorAll('.circular-menu__item'),
    circularBtn = document.querySelector('.circular-menu__btn');
let active = false;
const size = circularItems.length,
    arc = 2*Math.PI*(1/size),
    radius=35;
circularBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    active=!active;
    if(active){
        circularBtn.classList.add('_active');
        for(let i=0;i<size;i++){
            const angle = i*arc;
            const x = radius*Math.cos(angle);
            const y = radius*Math.sin(angle);
            circularItems[i].style.left = 50 + x + '%';
            circularItems[i].style.top = 50 + y + '%';
        }
    }else{
        circularBtn.classList.remove('_active');
        circularItems.forEach(item=>{
            item.classList.remove('_active');
        })
        for(let i=0;i<size;i++){
            circularItems[i].removeAttribute('style');
        }
    }
    circularItems.forEach(item=>{
        item.addEventListener('click', ()=>{
            item.classList.toggle('_active');
        })
    })
})

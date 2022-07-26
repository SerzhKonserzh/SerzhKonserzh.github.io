window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })

    const openPopUp = document.querySelectorAll('.pop_up_btn');
    const closePopUp = document.querySelectorAll('.close_btn');
    const popUp = document.querySelector('.pop_up');

    openPopUp.forEach(item => {
        item.addEventListener('click', () =>{
            popUp.classList.add('pop_up_active');
            document.body.style.overflow='hidden';
        })
    })
    closePopUp.forEach(item => {
        item.addEventListener('click', () =>{
            popUp.classList.remove('pop_up_active');
            document.body.style.overflow='visible';
        })
    })
})
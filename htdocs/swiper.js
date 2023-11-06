var swiper = new Swiper('.banner-swiper', {

loop: true,
speed: 2000,
effect: 'cube',
grabCursor: true,
cubeEffect: {
    shadow: true,
slideShadows: true,
shadowOffset: 20,
shadowScale: 0.94,
},
pagination:{
    el: '.swiper-pagination',
},
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},

});


const menu = document.querySelector('.menu')
const navMobile = document.querySelector('.nav-mobile')
function toggleMenu(){
    menu.classList.toggle('active');
    navMobile.classList.toggle('active');
}



AOS.init();




function send(){
    console.log("function call");
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "ah5160586@gmail.com",
        Password : "F71D1B5FACA8B8528D227F43D21ED2CE8B1F",
        To : 'ah5160586@gmail.com',
        From : "ah5160586@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}




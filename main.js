const menuOpenButton = document.getElementById('menu-open-button');
const menuCloseButton = document.getElementById('menu-close-button');

menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

// Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});
// nav par live
const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".nav-link");

window.addEventListener("scroll",()=>{
    let currentSection="";
    sections.forEach(section =>{
        const sectionTop=section.offsetTop;
        const sectionHeight=section.clientHeight;
        if(window.scrollY >=sectionTop-100){
            currentSection=section.getAttribute("id");
        }
    });
    navLinks.forEach(link =>{
        link.classList.remove("active");
        if(link.getAttribute("href")===`#${currentSection}`)
            {
            link.classList.add("active");
            }
    });
});

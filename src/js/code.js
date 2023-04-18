/************инициализация слайдера slick************/
$(document).ready(function () {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        prevArrow: ".carousel-btn__right",
        nextArrow: ".carousel-btn__left",
        variableWidth: true,
    });
});

/************инициализация модального окона Fancybox************/
$('[data-fancybox="gallery"]').fancybox({
    'width': '600px',
});


/************табы в секции "Услуги и цены"************/
const list = document.querySelectorAll('a.price');
const box = Array.from(list);

const list1 = document.querySelectorAll('div.price');
const box1 = Array.from(list1);

box.forEach(function (num, i) {
    num.addEventListener("click", function () {
        for (let j = 0; j < 6; j++) {
            if (i === j) {
                box1[j].style = 'display: flex';
                box[j].style = 'text-decoration: underline; color: #00BF78';
            }
            else {
                box1[j].style = 'display: none';
                box[j].style = 'text-decoration: none; color: #333333';
            }
        }
    });
});


/************плавный скролл"************/
document.querySelectorAll('a.scroll').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const getHref = this.getAttribute('href').substring(1)
        const scrollTarget = document.getElementById(getHref)
        const topOffset = 100
        const elementTop = scrollTarget.getBoundingClientRect().top
        const offsetPosition = elementTop - topOffset
        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth',
        })
    })
})

/************данные с формы"************/
const contactsForm = document.getElementsByClassName('form');

contactsForm[0].addEventListener('submit', function (event) {
    event.preventDefault();
    const {name, phone} = this.elements;
    console.log({
        name: name.value,
        phone: phone.value
    });
    this.reset();
});
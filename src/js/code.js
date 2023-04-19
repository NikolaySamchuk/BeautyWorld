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
const tabPriceArray = Array.from(document.querySelectorAll('a.price')); //массив ссылок на услуги
const priceArray = Array.from(document.querySelectorAll('div.price')); //массив услуг

tabPriceArray[0].style = 'text-decoration: underline; color: #00BF78'; //отображение на старте
priceArray[0].style = 'display: flex';

tabPriceArray.forEach(function (num, i) { //пробегаем по массиву ссылок
    num.addEventListener("click", function () { //если click
        for (let j = 0; j < tabPriceArray.length; j++) {
            if (i === j) {
                tabPriceArray[j].style = 'text-decoration: underline; color: #00BF78';
                priceArray[j].style = 'display: flex'; //отображение услуг
            }
            else { 
                tabPriceArray[j].style = 'text-decoration: none; color: #333333';
                priceArray[j].style = 'display: none'; //скрытие услуг
            }
        }
    });
});


/************плавный скролл"************/
document.querySelectorAll('a.scroll').forEach(link => {
    link.addEventListener('click', function (smoothScroll) {
        smoothScroll.preventDefault(); 
        const getHref = this.getAttribute('href').substring(1); //получаем ссылку без #
        const scrollTarget = document.getElementById(getHref); //элемент по ссылке
        const topOffset = 100; //задаем смещение
        const elementTop = scrollTarget.getBoundingClientRect().top; //верхняя граница выбранного элемента
        const offsetPosition = elementTop - topOffset; //смещение
        window.scrollBy({ //делаем скролл
            top: offsetPosition,
            behavior: 'smooth',
        });
    });
});

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
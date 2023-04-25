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

/************инициализация модального окона Fancybox для слайдера************/
$('[data-fancybox="gallery"]').fancybox({
    'width': '600px',
});

/************табы в секции "Услуги и цены"************/
const tabPriceArray = Array.from(document.querySelectorAll('a.price')); //массив ссылок на услуги
const priceArray = Array.from(document.querySelectorAll('div.price')); //массив услуг

tabPriceArray[0].style = 'text-decoration: underline; color: #00BF78'; //отображение на старте
priceArray[0].style = 'display: flex';

tabPriceArray.forEach(function (num, i) { //пробегаем по массиву ссылок
    num.addEventListener('click', function () { //если click
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
    const { name, phone } = this.elements;
    console.log({
        name: name.value,
        phone: phone.value
    });
    this.reset();
});

/************данные с расширенной формы"************/
const extendedForm = document.getElementsByClassName('extended-form');
const statusLoad = document.getElementsByClassName('extended-form__status');
const statusLoadNode = statusLoad[0].childNodes;

extendedForm[0].addEventListener('submit', function (event) {
    event.preventDefault();
    statusLoad[0].style = "display: flex";

    let sendData = {
        name: "string",
        phone: "string",
        masterId: 0,
        serviceId: 0,
        visitDate: "string"
    }

    sendData.name = this.elements.name.value;
    sendData.phone = this.elements.phone.value;
    sendData.masterId = this.elements.masterId.value;
    sendData.serviceId = this.elements.serviceId.value;
    sendData.visitDate = this.elements.visitDate.value;

    fetch('http://localhost:3001/api/orders', {
        method: 'POST',
        body: JSON.stringify(sendData),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((data) => {
            statusLoadNode[1].style = "display: none";
            statusLoadNode[3].style = "display: flex";
            setTimeout(() => {
                $.fancybox.close();
            }, 3000)
        })
    this.reset();
});

/************получение списка услуг и мастеров"************/
const updateForm = document.querySelectorAll('a.update-form');
const masterSelectList = document.getElementById('master-select');
const serviceSelectList = document.getElementById('service-select');

updateForm.forEach(link => {
    link.addEventListener('click', function () {

        while (masterSelectList.options.length) {
            console.log(masterSelectList.options.length)
            masterSelectList.options[0] = null;
        }
        while (serviceSelectList.options.length) {
            console.log(serviceSelectList.options.length)
            serviceSelectList.options[0] = null;
        }

        fetch('http://localhost:3001/api/services', {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((data) => {
                for (let i = 0; i < data.length; i++) {
                    let newOption = new Option(data[i].name + '/' + data[i].description, data[i].id);
                    serviceSelectList.append(newOption);
                }
            })

        fetch('http://localhost:3001/api/staff', {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((data) => {
                 for (let i = 0; i < data.length; i++) {
                    let newOption = new Option(data[i].fullName, data[i].id);
                    masterSelectList.append(newOption);
                } 
                //masterSelectList = data.map((el) => new Option(el.fullName, el.id))
            })
    });
});

/************маска ввода номера"************/
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('[data-mask="phone"]') // ищем все поля с атрибутом data-mask="phone"

    if (!elements) return // если таких нет, прекращаем выполнение функции
    const phoneOptions = { // создаем объект параметров
        mask: '+{7}(000)000-00-00' // задаем единственный параметр mask
    }
    elements.forEach(el => { // для каждого найденного поля с атрибутом [data-mask="phone"]
        IMask(el, phoneOptions) // инициализируем плагин с установленными выше параметрами
    })
});

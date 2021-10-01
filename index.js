// Making a function which toggles class name when clicked
const faqQuestions = document.querySelectorAll('.faq__question--question');
const faqAnswers = document.querySelectorAll('.faq__question--answer');
const faqLogo = document.querySelectorAll('.plus-logo');

//Accordion
faqQuestions.forEach((element, index) => {
    element.addEventListener('click', function(){
        faqAnswers[index].classList.toggle('visible');
        if(faqLogo[index].src.includes("add"))
        {
            console.log(faqLogo[index].src);
            faqLogo[index].setAttribute("src", `images/remove.svg`);
        }
        else if(faqLogo[index].src.match("images/remove"))
        {
            faqLogo[index].setAttribute("src", "images/add.svg");
            
        }
    });
})

//Accordion on lower feature section
const featureCards2Header = document.querySelectorAll('.feature__cards2--header');
const featureCards2Sub = document.querySelectorAll('.feature__cards2--sub');
featureCards2Header.forEach(function(element, index){
    element.addEventListener('click', function(){
        console.log(`Clicked`);
        featureCards2Sub[index].classList.toggle('visible-sub');
    });
});

//Accordion on Link
const linkHeader = document.querySelectorAll('.link__header');
const linkSub = document.querySelectorAll('.link__sub');
const arrow = document.querySelectorAll('.arrow');
linkHeader.forEach(function(element, index) {
    element.addEventListener('click', function () {
        if(arrow[index].src.includes("down-arrow"))
        {
            arrow[index].setAttribute("src", `images/up-arrow.svg`);
        }
        else if(arrow[index].src.includes("up-arrow"))
        {
            arrow[index].setAttribute("src", "images/down-arrow.svg");
        }
        linkSub[index].classList.toggle('visible-sub');
    });
});

//Change nation flag on option
const langSelector = document.querySelector('#lang__selector');
const langLogo = document.querySelector('.lang__logo');
langSelector.addEventListener('change', function(){
    if(langSelector.value === 'US')
    {
        langLogo.setAttribute('src', 'images/usa.svg');
    }
    else if(langSelector.value === 'CA')
    {
        langLogo.setAttribute('src', 'images/canada.svg');
    }
});

//Hamburger function

const hamburger = document.querySelector('.hamburger');
const hamburgerMenu = document.querySelector('.hamburger__menu');
hamburger.addEventListener('click', function() {
    if(hamburgerMenu.src.includes('images/hamburger.svg'))
    {
        hamburgerMenu.setAttribute('src', 'images/multiply.svg');
    }
    else if(hamburgerMenu.src.includes('images/multiply.svg'))
    {
        hamburgerMenu.setAttribute('src', 'images/hamburger.svg');
    }
});
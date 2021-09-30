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
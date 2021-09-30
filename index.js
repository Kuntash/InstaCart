// Making a function which toggles class name when clicked
const faqQuestions = document.querySelectorAll('.faq__question--question');
const faqAnswers = document.querySelectorAll('.faq__question--answer');
const faqLogo = document.querySelectorAll('.plus-logo');
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
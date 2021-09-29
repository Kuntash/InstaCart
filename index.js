// Making a function which toggles class name when clicked
const faqQuestions = document.querySelectorAll('.faq__question--question');
const faqAnswers = document.querySelectorAll('.faq__question--answer');
faqQuestions.forEach((element, index) => {
    element.addEventListener('click', function(){
        faqAnswers[index].classList.toggle('visible');
    });
    
})
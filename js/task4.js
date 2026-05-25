const accordeonQuestions = document.querySelectorAll(".accordeon_qustion");

accordeonQuestions.forEach((elm) => {
    elm.addEventListener('click', function () {
        const clickedAnswer = elm.parentElement.querySelector(".accordeon_answer");

        elm.classList.toggle("accordeon_question--active")
        clickedAnswer.classList.toggle("accordeon_answer--visible")

        if (clickedAnswer.classList.contains('accordeon_answer--visible')) {
            clickedAnswer.style.maxHeight = clickedAnswer.scrollHeight + "px"
        }
        else {
            clickedAnswer.style.maxHeight = null;
        }
    })

});